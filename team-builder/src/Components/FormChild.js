import React from "react";
import styled from "styled-components";

const FormChild = (props) => {
  return (
    <div>
      <span>{props.fname}</span>
      <span>{props.lname}</span>
      <span>{props.email}</span>
      <span>{props.role}</span>
    </div>
  );
};
