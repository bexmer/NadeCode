"use client";
import Sesiones from "./Sesiones";
import Page from "./RegistroSesion";
import React, { useState } from "react";
import "./todo.css";

export default function Principal() {
  // Estado local para manejar el estado del checkbox
  const [mostrarComponenteB, setMostrarComponenteB] = useState(false);

  // Manejador de cambios del checkbox
  const handleChange = () => {
    setMostrarComponenteB(!mostrarComponenteB);
  };

  return (
    <div className="prinCar flex justify-center items-center">
      <div className="basis-3/5 estoPart">
        <div className="prt1 bg-stone-800">
          <div className="container flex justify-center items-center">
            <div className="loader">
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>

            <div className="loader triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>
          </div>
        </div>
        <div className="prt2 bg-stone-800">
          <h1 className="pl-5">For the AI ​​tools you need.</h1>
        </div>
      </div>

      <div className="laB basis-2/5 p-6">
        <div className="flex flex-row justify-center">
          <h1 className="text-right mb-2 basis-1/3">LOG IN</h1>
          <h1 className="text-center mb-2 basis-1/3">
            {/* Checkbox para alternar componentes */}
            <div className="flex flex-row justify-center mb-7">
              <div className="checkbox-wrapper-51">
                <input
                  id="cbx-51"
                  type="checkbox"
                  checked={mostrarComponenteB}
                  onChange={handleChange}
                />
                <label className="toggle" htmlFor="cbx-51">
                  <span>
                    <svg viewBox="0 0 10 10" height="10px" width="10px">
                      <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
          </h1>
          <h1 className="text-left mb-2 basis-1/3">SING UP</h1>
        </div>

        {/* Mostrar ComponenteA solo si mostrarComponenteB es falso */}
        {!mostrarComponenteB && <Sesiones />}

        {/* Mostrar ComponenteB solo si mostrarComponenteB es verdadero */}
        {mostrarComponenteB && <Page />}
      </div>
    </div>
  );
}
