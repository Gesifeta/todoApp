import React from "react";

export default function Input(props) {
  return (
    <>
         <label htmlFor={props.name}>{props.placeholder}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
     
    
  );
}
