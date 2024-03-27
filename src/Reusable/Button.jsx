import React from "react";

function Button({ btnName, btnBackground, btnHover, color, Class }) {
  return (
    <div>
      <button
        className={`main-button border-0 transition-all Dm-body font-normal text-[14px] bg-${btnBackground} ${btnHover} text-${color} font-medium ${Class}`}
      >
        {btnName}
      </button>
    </div>
  );
}

export default Button;
