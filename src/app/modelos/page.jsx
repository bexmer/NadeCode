import React from "react";
import CardIA from "@/components/CardIA";
import dato from "@/app/api/ia.json";
import Link from "next/link";
import "@/app/globals.css"


export default function Modelos() {
  return (
    <div>
      <nav className="flex items-center h-10 ">
        <Link href={"/createPost"} className=" bg-green-800 px-9 mx-5 butonCreate rounded-md hover:bg-cyan-800 active:opacity-80">Create</Link>
      </nav>
      <div className="grid grid-cols-4">
        <CardIA data={dato} />
        <CardIA data={dato} />
        <CardIA data={dato} />
        <CardIA data={dato} />
        <CardIA data={dato} />
        <CardIA data={dato} />
      </div>
    </div>
  );
}
