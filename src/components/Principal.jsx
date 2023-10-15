import React from "react";
import Link from "next/link";

export default function Principal() {
  return (
    <div className="prinCar flex ">
      <div className="todoWallet basis-3/5">
        <div className="divRaro mx-10 pt-16 m-auto">
          <h1 className="text-2xl">Wallet Connect</h1>
          
          <p className="opacity-70 my-10">
            Connect to your wallet and gain credits to the use of the models.
          </p>
          
          <button className="bg-blue-900 px-7 py-2 rounded-md active:opacity-60 hover:bg-violet-700 ">
            Connect
          </button>
          <br />
          <br />

          <Link
            href={"/creditos"}
            className="bg-blue-700 px-7 py-2 rounded-md active:opacity-60 hover:bg-violet-700 mt-10"
          >
            Creditos
          </Link>
        </div>
      </div>
      <div className="laB basis-2/5 p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
        ipsam quae, illo id distinctio quaerat nihil reprehenderit voluptatibus
        dolores? Mollitia minima ex ipsa, quia doloribus ab suscipit ducimus id?
      </div>
    </div>
  );
}
