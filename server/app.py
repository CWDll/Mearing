from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# CSV 파일 로드
df = pd.read_csv('center_loc.csv', encoding='cp949')  # 인코딩 설정

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    partial_city = request.args.get('city')  # 도시 이름을 쿼리 파라미터로 받음
    partial_district = request.args.get('district')  # 구 이름을 쿼리 파라미터로 받음
    
    # 데이터 필터링
    filtered_data = df[df['시도'].str.contains(partial_city, na=False, case=False) & 
                       df['시군구'].str.contains(partial_district, na=False, case=False)]
    results = filtered_data[['수행기관명', '주소', '기관 대표전화']].to_dict(orient='records')
    
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
