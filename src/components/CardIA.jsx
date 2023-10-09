import React from "react";
import "@/components/todo.css";

export default function CardIA() {
  return (
    <div className="CardIA p-5 m-2 rounded-xl">
      {/* Imagen */}
      <div className="flex justify-center bg-black">
        <img
          className="w-30 m-2 h-20 rounded-lg"
          src={"/src/components/img/840_560.jpg"}
          alt="carro"
        />
      </div>

      {/* Titulo */}
      <div className="text-center">
        <h1 className="text-2xl py-5 font-semibold">Titulo</h1>
      </div>

      {/* Descripción */}
      <div className="bg-stone-900 px-5 py-4 rounded-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, vel
          provident distinctio sit facilis dolore sint incidunt perferendis sunt
          ab.
        </p>
      </div>

      {/* Información */}
      <div className="flex info justify-center pt-3 text-center items-center">
        <div className="rounded-lg bg-violet-950 py-1 px-3">Pre</div>
        <div className="rounded-lg bg-cyan-950 py-2 px-3 text-xs">
          Natural Language
        </div>
        <div className="rounded-lg bg-violet-950 py-1 px-3">Free</div>
      </div>
    </div>
  );
}
