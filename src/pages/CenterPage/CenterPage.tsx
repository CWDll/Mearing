import React from "react";
import { useNavigate } from "react-router-dom";

const CenterPage: React.FC = () => {
  const navigate = useNavigate();
// 뒤로가기 버튼 클릭 이벤트
const goToBack = (): void => {
  navigate("/");
};

  return (
    <div>
      <h1>Center Page</h1>
      <button onClick={goToBack}>Go to Main Page</button>
    </div>
  );
};

export default CenterPage;
