"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [Password, setContraseña] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("nombre", nombre);
    formData.set("correo", correo);
    formData.set("contraseña", Password);

    const response = await fetch("/api/createAccount", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    const responseSingIn = await signIn("credentials", {
      email: correo,
      password: Password,
      redirect: false,
    });

    if (responseSingIn.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="m-5 content-center">
      <h1 className="text-4xl font-semibold text-center">SingUp</h1>
      <form onSubmit={handleSubmit} className="grid">
        <div className="flex flex-row">
          <div className="basis-1/2 my-4 mr-1">
            <label htmlFor="correo">EMAIL</label>
            <input
              className="bg-zinc-700 p-2 rounded-md mt-4 w-full"
              type="email"
              name="correo"
              placeholder="user@example.com"
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="basis-1/2 my-4 ml-1">
            <label htmlFor="correo">NAME</label>
            <input
              className="bg-zinc-700 p-2 rounded-md mt-4 w-full"
              type="text"
              name="usuario"
              placeholder="User"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
        </div>
        <label className="mb-4" htmlFor="correo">
          PASSWORD
        </label>
        <input
          className="bg-zinc-700 p-2 rounded-md"
          type="password"
          name="Password"
          placeholder="*******"
          onChange={(e) => setContraseña(e.target.value)}
        />
        <div className="flex justify-center">
          <input
            className="bg-indigo-600 mt-10 px-16 py-1 rounded-md hover:opacity-70 active:bg-indigo-500"
            type="submit"
            value={"REGISTER"}
          />
        </div>
      </form>
    </div>
  );
};

export default page;
