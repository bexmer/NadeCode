"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Sesiones() {
  const router = useRouter();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("correo", correo);
    formData.set("contraseña", contraseña);

    const responseSingIn = await signIn("credentials", {
      email: correo,
      password: contraseña,
      redirect: false,
    });

    if (responseSingIn.status === 200) {
      router.push("/");
    } else {
      router.push("/Error");
    }
  };
  return (
    <div className="m-5 content-center">
      <h1 className="text-4xl font-semibold text-center">LogIn</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1">
          <label className="my-4" htmlFor="correo">
            EMAIL
          </label>
          <input
            className="bg-zinc-700 p-2 rounded-md"
            type="email"
            name="correo"
            placeholder="Email"
            onChange={(e) => setCorreo(e.target.value)}
          />
          <label className="my-4" htmlFor="contraseña">
            PASSWORD
          </label>
          <input
            className="bg-zinc-700 p-2 rounded-md"
            type="password"
            name="contraseña"
            placeholder="Password"
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-indigo-600 mt-10 px-16 py-1 rounded-md hover:opacity-70 active:bg-indigo-500">
            GET IN
          </button>
        </div>
      </form>
    </div>
  );
}
