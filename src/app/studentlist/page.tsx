import Link from "next/link";
import React from "react";

const Studentlist = () => {
  const studentList = [
    {
      name: "divyesh",
      age: 22,
      work: "React developer",
      mobileNumber: 9624899246,
    },
    {
      name: "keval",
      age: 20,
      work: "node developer",
      mobileNumber: 9624899246,
    },
    {
      name: "kewtan",
      age: 21,
      work: "paython developer",
      mobileNumber: 9624899246,
    },
    {
      name: "kaushik",
      age: 18,
      work: "React developer",
      mobileNumber: 9624899246,
    },
  ];
  return (
    <div>
      {studentList?.map((val, index) => (
        <>
          <div style={{ display: "flex" }}>
            <ul>
              <li key={index}>
                {" "}
                <Link href={`/studentlist/${val.name}`}>{val?.name} </Link>
              </li>
            </ul>
            <ul>
              <li key={index}> {val?.work}</li>
            </ul>
            <ul>
              <li key={index}> {val?.mobileNumber}</li>
            </ul>
            <ul>
              <li key={index}> {val?.age}</li>
            </ul>
          </div>
        </>
      ))}
    </div>
  );
};

export default Studentlist;
