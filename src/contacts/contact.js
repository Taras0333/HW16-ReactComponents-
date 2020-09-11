import React, { Component } from "react";
const Cont = (props) => (
  <div className="wrap">
    <span className="item">{props.firstName}</span>
    <span className="item">{props.lastName}</span>
    <span className="item phone">{props.phone}</span>
  </div>
);
export default Cont;
