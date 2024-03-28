import React from "react";
import { Link } from "react-router-dom";

function Button({ btnName, btnBackground, btnHover, color, Class, btnLink }) {
  return (
    <div>
      <Link to={btnLink} reloadDocument>
        <button
          className={`main-button border-0 transition-all Dm-body font-normal text-[14px] bg-${btnBackground} ${btnHover} text-${color} font-medium ${Class}`}
        >
          {btnName}
        </button>
      </Link>
    </div>
  );
}

export default Button;
