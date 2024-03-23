import React from "react";

function Button({ btnName, btnBackground, btnHover, color }) {
  return (
    <div>
      <button
        className={`main-button border-0 transition-all Dm-body font-normal text-[14px] bg-${btnBackground} ${btnHover} text-${color} font-medium`}
      >
        {btnName}
      </button>
    </div>
  );
}

export default Button;
