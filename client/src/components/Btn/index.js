import React from "react";

function Button({ type = "default", className, children, onClick, id }) {
  return (
    <button onClick={onClick} id={id} className={["btn", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
