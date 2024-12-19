import React from "react";
import { Scrollbar } from "react-scrollbar-js";

const CustomScrollbar = () => {
  const myScrollbarStyle = {
    height: "300px", // আপনার প্রয়োজন মতো উচ্চতা দিন
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  return (
    <Scrollbar style={myScrollbarStyle}>
      <div style={{ padding: "10px" }}>
  
      </div>
    </Scrollbar>
  );
};

export default CustomScrollbar;
