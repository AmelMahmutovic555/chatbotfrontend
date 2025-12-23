import { Link } from "react-router";

import "./style/Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav id="navBar">
        <div>
          <Link to={"/"} className="logo">
            <p>ChatAI</p>
          </Link>
        </div>
        <div>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
