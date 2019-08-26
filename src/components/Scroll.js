import React from "react";

const Scroll = props => {
  return (
    <div style={{ margin: "20px 0", overflow: "scroll", height: "800px" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
