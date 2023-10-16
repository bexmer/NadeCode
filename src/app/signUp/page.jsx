'use client';
import { useState } from 'react';
import { signIn } from "next-auth/react"
import {useRouter} from "next/navigation"

const page = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [Password, setContraseña] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('nombre', nombre);
    formData.set('correo', correo);
    formData.set('contraseña', Password);

    const response = await fetch('/api/createAccount', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    const responseSingIn = await signIn('credentials', {
      email: correo,
      password: Password,
      redirect: false,
    });

    if(responseSingIn.status === 200){ 
      router.push('/');
    }
  }

return (
  <div className="w-1/4">
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="text" name="usuario" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
      <input type="email" name="correo" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" name="Password" placeholder="*******" onChange={(e) => setContraseña(e.target.value)} />
      <div className="flex justify-center">
        <input type="submit" value={'Sing up'} />
      </div>
    </form>
  </div>
)
}
 
export default page;