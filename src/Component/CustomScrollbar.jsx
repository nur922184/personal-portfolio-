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
        <p>এখানে আপনার কন্টেন্ট দিন।</p>
        <p>কাস্টম স্ক্রল বারটি কাজ করবে।</p>
        <p>আপনার ডিজাইন অনুযায়ী পরিবর্তন করুন।</p>
      </div>
    </Scrollbar>
  );
};

export default CustomScrollbar;
