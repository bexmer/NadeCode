import React from "react";
import "../globals.css";
import Link from "next/link";

export default function Creditos() {
  return (
    <div className="Credits mx-32">
      <h1 className="text-5xl text-center my-10 mb-20">Credits</h1>
      <div className="flex justify-center text-center">
        <div className="basis-1/3 bg-slate-950 mx-4 pb-10 rounded-md">
          <h2>Corporal</h2>
          <button id="100dns" className="bg-slate-900 px-10 py-1 rounded-lg">
            100 DNS
          </button>
        </div>
        <div className="basis-1/3 bg-slate-950 mx-4 pb-10 rounded-md">
          <h2>Sergeant</h2>
          <Link
            href={"/modelos"}
            id="500dns"
            className="bg-slate-900 px-10 py-1 rounded-lg"
          >
            500 DNS
          </Link>
        </div>
        <div className="basis-1/3 bg-slate-950 mx-4 pb-10 rounded-md">
          <h2>Elite</h2>
          <button id="1000dns" className="bg-slate-900 px-10 py-1 rounded-lg">
            1000 DNS
          </button>
        </div>
        <div className="basis-1/3 bg-slate-950 mx-4 pb-10 rounded-md">
          <h2>Supreme</h2>
          <button id="1500dns" className="bg-slate-900 px-10 py-1 rounded-lg">
            1500 DNS
          </button>
        </div>
      </div>
    </div>
  );
}
