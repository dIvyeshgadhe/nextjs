"use client";
import React from "react";

const Studentdetail = ({ params }: any) => {
  console.log("param: ", params);
  return (
    <div>
      <h1>Studentdetail</h1>
      <h3>Name : {params.student}</h3>
    </div>
  );
};

export default Studentdetail;
