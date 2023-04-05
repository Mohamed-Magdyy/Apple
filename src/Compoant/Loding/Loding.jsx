import React from "react";
import $ from "jquery";
import "../Loding/Loding.css";

export default function Loding() {
  $(document).ready(function () {
    $(".point-loding").fadeOut(3000, function () {});
  });

  return (
    <>
      <div className="point-loding">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </>
  );
}
