import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="navbar flex justify-center">
      <Link className="linkNav" href={"/"}>
        NebulaCode
      </Link>
      <Link className="linkNav" href={"/modelos"}>
        Product
      </Link>
      <Link className="linkNav" href={"/"}>
        Pre-training
      </Link>
      <Link className="linkNav" href={"/"}>
        Points
      </Link>
      <div className="linkNav">
        <button className="butonBuscar px-6 ">Search</button>
      </div>
    </section>
  );
}
