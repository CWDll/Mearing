import React, { useState } from "react";

// 컴포넌트 가져오기
import { SecondaryButton } from "./Button";

const HelpModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
    setDisable(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setDisable(false);
  };

  return (
    <div>
      <SecondaryButton
        onClick={handleButtonClick}
        disabled={disable}
        children="도움말"
      />
      {isOpen && (
        <div>
          <div>Help Modal Content</div>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default HelpModal;
