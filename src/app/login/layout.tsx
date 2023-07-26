import Link from "next/link";
import React, { ReactNode } from "react";
import "./login.css";
const layout = ({ children }: any) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginstudent">Student Login </Link>
        </li>
        <li>
          <Link href="/login/loginteacher">Teacher Login </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
