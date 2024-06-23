from flask import Flask, request, jsonify, send_file
from dateutil import parser
from datetime import datetime
import pandas as pd
import mysql.connector
from flask_cors import CORS
import speech_recognition as sr
from gtts import gTTS
import os

app = Flask(__name__, static_folder='static')
CORS(app)

# MySQL 데이터베이스 연결 설정
def get_db_connection():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="0821",
        database="mydatabase"
    )
    return connection

def parse_korean_datetime(date_str):
    # 날짜와 시간 부분을 분리
    parts = date_str.strip().split(' ')
    date_part = parts[0] + ' ' + parts[1] + ' ' + parts[2]  # '2024.', '6.', '23.'를 결합
    am_pm = parts[3]      # '오후' 또는 '오전'
    time_part = parts[4]  # '3:41:18'
    
    # 날짜 형식 정리: 연-월-일 포맷으로 변환, 마침표 제거
    date_part = date_part.replace('.', '')  # '2024 6 23'
    date_parts = date_part.split()
    year = date_parts[0]
    month = date_parts[1].zfill(2)  # 월을 두 자리 수로 만듦
    day = date_parts[2].zfill(2)    # 일을 두 자리 수로 만듦
    formatted_date = f"{year}-{month}-{day}"  # '2024-06-23'

    # 시간 형식 정리: '오후'와 '오전' 처리
    hour, minute, second = map(int, time_part.split(':'))
    if am_pm == '오후' and hour != 12:
        hour += 12
    elif am_pm == '오전' and hour == 12:
        hour = 0

    # 완전한 날짜-시간 문자열 생성
    correct_date_str = f"{formatted_date} {hour:02}:{minute:02}:{second:02}"
    
    # datetime 객체로 변환
    return datetime.strptime(correct_date_str, '%Y-%m-%d %H:%M:%S')


# CSV 파일 로드
df = pd.read_csv('center_loc.csv', encoding='cp949')

def clear_static_directory():
    folder = app.static_folder
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
        except Exception as e:
            print(f"Failed to delete {file_path}. Reason: {e}")
            
@app.route('/api/main_chat', methods=['GET'])
def main_chat():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT date, question FROM save_chat')
    results = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(results), 200

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    partial_city = request.args.get('city')
    partial_district = request.args.get('district')

    filtered_data = df[df['시도'].str.contains(partial_city, na=False, case=False) &
                       df['시군구'].str.contains(partial_district, na=False, case=False)]
    results = filtered_data[['수행기관명', '주소', '기관 대표전화']].to_dict(orient='records')

    return jsonify(results)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute('INSERT INTO user (email, pwd) VALUES (%s, %s)', (email, password))
        conn.commit()
    except mysql.connector.IntegrityError:
        return jsonify({"error": "User already exists"}), 400
    finally:
        cursor.close()
        conn.close()

    return jsonify({"message": "User created successfully"}), 201

@app.route('/api/signin', methods=['POST'])
def signin():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT pwd FROM user WHERE email = %s', (email,))
    result = cursor.fetchone()
    cursor.close()
    conn.close()

    if result and result[0] == password:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Invalid email or password"}), 401

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    question = data.get('question')
    response = "아직 대화 기능이 구현되지 않았습니다."
    return jsonify({"answer": response})

@app.route('/api/stt_chat', methods=['POST'])
def stt_chat():
    recognizer = sr.Recognizer()

    # 마이크에서 음성 데이터를 읽어옵니다
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
        print("Recognizing...")

    try:
        # Google Web Speech API를 사용하여 음성을 텍스트로 변환합니다
        text = recognizer.recognize_google(audio, language='ko-KR')
        print(f"Recognized Text: {text}")
        response = "아직 대화 기능이 구현되지 않았습니다."
        return jsonify({"answer": response, "recognized_text": text})
    except sr.UnknownValueError:
        text = "음성인식 실패"
        return jsonify({"answer": response, "recognized_text": text})
    except sr.RequestError as e:
        return jsonify({"error": f"Could not request results; {e}"}), 500
    
@app.route('/api/save_chat', methods=['POST'])
def save_chat():
    data = request.json
    email = data.get('email')
    question = data.get('question')
    answer = data.get('answer')
    date_str = data.get('date')  # '2024. 6. 23. 오후 3:41:18'
    
    # 입력받은 날짜 문자열 출력
    print(f"Received date string: {date_str}")
    

    # 한국어 날짜 형식 파싱
    dt = parse_korean_datetime(date_str)
    
    # datetime 객체를 ISO 8601 형식으로 변환
    iso_date = dt.strftime('%Y-%m-%dT%H:%M:%S')

    conn = get_db_connection()
    cursor = conn.cursor()

    # 데이터베이스에 저장
    cursor.execute('INSERT INTO save_chat (email, question, answer, date) VALUES (%s, %s, %s, %s)', 
                   (email, question, answer, iso_date))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "Chat saved successfully"}), 200

@app.route('/api/tts_chat', methods=['POST'])
def tts_chat():
    data = request.json
    text = data.get('text')
    if not text:
        return jsonify({"error": "Text is required"}), 400

    # static 폴더 내 파일 삭제
    clear_static_directory()

    # 음성 파일 생성
    tts = gTTS(text, lang='ko')
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"tts_{timestamp}.mp3"
    filepath = os.path.join(app.static_folder, filename)
    tts.save(filepath)

    # 파일의 URL 생성
    file_url = request.host_url + 'static/' + filename
    return jsonify({"url": file_url}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
