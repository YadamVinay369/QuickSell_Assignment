import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />{" "}
      <span
        style={{
          color: "green",
          fontWeight: "bolder",
          letterSpacing: "2px",
        }}
      >
        QuickSell Assignment
      </span>
    </div>
  );
};

export default Loading;
