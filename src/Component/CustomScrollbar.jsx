import React from "react";
import { Scrollbar } from "react-scrollbar-js";

const CustomScrollbar = () => {
  const myScrollbarStyle = {
    height: "300px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    padding: "6px",
  };

  const contentStyle = {
    padding: "8px",
    lineHeight: "1.6",
  };

  return (
    <Scrollbar
      style={myScrollbarStyle}
      trackYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <span
              {...restProps}
              ref={elementRef}
              style={{
                position: "absolute",
                right: "2px",
                bottom: "2px",
                top: "2px",
                width: "6px",
                borderRadius: "4px",
                background: "#e0e0e0",
              }}
            />
          );
        },
      }}
      thumbYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <span
              {...restProps}
              ref={elementRef}
              style={{
                background: "#888",
                borderRadius: "4px",
                width: "6px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#555")}
              onMouseLeave={(e) => (e.target.style.background = "#888")}
            />
          );
        },
      }}
    >
      <div style={contentStyle}>
        {[...Array(20).keys()].map((i) => (
          <p key={i}>👉 Scrollable content line {i + 1}</p>
        ))}
      </div>
    </Scrollbar>
  );
};

export default CustomScrollbar;

