"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation";
import "../globals.css";
import Link from "next/link";

export default function Creditos() {
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(0);
  const [receiver, setReceiver] = useState(null);
  //USE EFFECT
  // RUNS WHEN THE COMPONENT IS MOUNTED
  useEffect(() => {
    let key = window.localStorage.getItem("publicKey"); //obtiene la publicKey del localStorage
    setPublicKey(key);
    //if (key) getBalances(key);
    //if (explorerLink) setExplorerLink//(null);
  }, []);

  //Funcion para enviar una transaccion
  const sendTransaction = async (monto) => {
    try {
      //Consultar el balance de la wallet
      getBalances(publicKey);
      console.log("Este es el balance", balance);

      //Si el balance es menor al monto a enviar
      if (balance < amount) {
        toast.error("No tienes suficiente balance");
        return;
      }

      const provider = window?.phantom?.solana;
      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed"
      );

      //Llaves

      const fromPubkey = new PublicKey(publicKey);
      const toPubkey = new PublicKey(receiver);

      //Creamos la transaccion
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: monto * LAMPORTS_PER_SOL,
        })
      );
      console.log("Esta es la transaccion", transaction);

      //Traemos el ultimo blocke de hash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = fromPubkey;

      //Firmamos la transaccion
      const transactionsignature = await provider.signTransaction(transaction);

      //Enviamos la transaccion
      const txid = await connection.sendRawTransaction(
        transactionsignature.serialize()
      );
      console.info(`Transaccion con numero de id ${txid} enviada`);

      //Esperamos a que se confirme la transaccion
      const confirmation = await connection.confirmTransaction(txid, {
        commitment: "singleGossip",
      });

      const { slot } = confirmation.value;

      console.info(
        `Transaccion con numero de id ${txid} confirmado en el bloque ${slot}`
      );

      const solanaExplorerLink = `https://explorer.solana.com/tx/${txid}?cluster=${SOLANA_NETWORK}`;
      setExplorerLink(solanaExplorerLink);

      toast.success("Transaccion enviada con exito :D ");

      //Actualizamos el balance
      getBalances(publicKey);
      setAmount(null);
      setReceiver(null);

      return solanaExplorerLink;
    } catch (error) {
      console.error("ERROR SEND TRANSACTION", error);
      toast.error("Error al enviar la transaccion");
    }
  };

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
