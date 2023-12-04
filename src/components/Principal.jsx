"use client";
import Sesiones from "./Sesiones";
import Page from "./RegistroSesion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import "./todo.css";

export default function Principal() {
  // Estado local para manejar el estado del checkbox
  const [mostrarComponenteB, setMostrarComponenteB] = useState(false);

  // Manejador de cambios del checkbox
  const handleChange = () => {
    setMostrarComponenteB(!mostrarComponenteB);
  };
  const [publicKey, setPublicKey] = useState(null);

  const router = useRouter();
  //USE EFFECT
  // RUNS WHEN THE COMPONENT IS MOUNTED
  useEffect(() => {
    let key = window.localStorage.getItem("publicKey"); //obtiene la publicKey del localStorage
    setPublicKey(key);
    //if (key) getBalances(key);
    //if (explorerLink) setExplorerLink//(null);
  }, []);

  const signIn = async () => {
    //Si phantom no esta instalado
    const provider = window?.phantom?.solana;
    const { solana } = window;

    if (!provider?.isPhantom || !solana.isPhantom) {
      toast.error("Phantom no esta instalado");
      setTimeout(() => {
        window.open("https://phantom.app/", "_blank");
      }, 2000);
      return;
    }

    //Si phantom esta instalado
    let phantom;
    if (provider?.isPhantom) phantom = provider;

    const { publicKey } = await phantom.connect(); //conecta a phantom
    console.log("publicKey", publicKey.toString()); //muestra la publicKey
    setPublicKey(publicKey.toString()); //guarda la publicKey en el state
    window.localStorage.setItem("publicKey", publicKey.toString()); //guarda la publicKey en el localStorage

    toast.success("Tu Wallet esta conectada 👻");

    // getBalances(publicKey);
  };

  //Funcion para cerrar sesion con nuestra Wallet de Phantom

  const signOut = async () => {
    if (window) {
      const { solana } = window;
      window.localStorage.removeItem("publicKey");
      setPublicKey(null);
      solana.disconnect();
      router.refresh(window?.location?.pathname);
    }
  };

  return (
    <div className="prinCar flex justify-center items-center">
      <Toaster position="bottom-center" />
      <div className="todoWallet basis-3/5">
        <div className="divRaro mx-10">
          <h1 className="text-3xl font-bold mt-10">Wallet Connect</h1>

          <p className="opacity-70 my-10">
            Connect to your wallet and gain credits to the use of the models.
          </p>

          {/* BOTOMES ESPECIALES */}
          {publicKey ? (
            <>
              <button
                type="submit"
                className="inline-flex justify-center bg-blue-900 py-2 px-5 rounded-md text-white hover:bg-indigo-900 active:opacity-70 transition mb-5"
                onClick={() => {
                  signOut();
                }}
              >
                Disconnect your Wallet 👻
              </button>
              <br />
              <br />
              <Link
                href={"/creditos"}
                className="bg-blue-700 px-7 py-2 rounded-md active:opacity-60 hover:bg-violet-700 mt-10"
              >
                Credits
              </Link>
            </>
          ) : (
            <div className="flex flex-col place-items-center justify-center">
              <button
                type="submit"
                className="inline-flex justify-center bg-blue-900 py-2 px-5 rounded-md text-white hover:bg-indigo-900 active:opacity-70 transition"
                onClick={() => {
                  signIn();
                }}
              >
                Get your Wallet 👻
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="laB basis-2/5 p-6">
        <div className="flex flex-row justify-center">
          <h1 className="text-right mb-2 basis-1/3">LOG IN</h1>
          <h1 className="text-center mb-2 basis-1/3">|</h1>
          <h1 className="text-left mb-2 basis-1/3">SING UP</h1>
        </div>
        {/* Checkbox para alternar componentes */}
        <div className="flex flex-row justify-center mb-7">
          <div class="checkbox-wrapper-51">
            <input
              id="cbx-51"
              type="checkbox"
              checked={mostrarComponenteB}
              onChange={handleChange}
            />
            <label class="toggle" for="cbx-51">
              <span>
                <svg viewBox="0 0 10 10" height="10px" width="10px">
                  <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        {/* Mostrar ComponenteA solo si mostrarComponenteB es falso */}
        {!mostrarComponenteB && <Sesiones />}

        {/* Mostrar ComponenteB solo si mostrarComponenteB es verdadero */}
        {mostrarComponenteB && <Page />}
      </div>
    </div>
  );
}
