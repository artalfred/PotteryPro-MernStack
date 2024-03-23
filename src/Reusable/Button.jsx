import React from "react";

function Button({ btnName, btnBackground, btnHover, color }) {
  return (
    <div>
      <button
        className={`main-button bg-${btnBackground} hover:bg-${btnHover} text-${color} font-medium`}
      >
        {btnName}
      </button>
    </div>
  );
}

export default Button;
