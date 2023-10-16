'use client';
import { useState } from 'react';
import {useRouter} from "next/navigation"
import { signIn } from 'next-auth/react';

const page = () => {
  const router = useRouter();
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('correo', correo);
    formData.set('contraseña', contraseña);

    const responseSingIn = await signIn('credentials', {
      email: correo,
      password: contraseña,
      redirect: false,
    });

    if(responseSingIn.status === 200){ 
      router.push('/');
    }else{
      router.push('/Error');
    }
  }

  return (<div className="w-1/4">
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="email" name="correo" placeholder="Email" onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" name="contraseña" placeholder="Password" onChange={(e) => setContraseña(e.target.value)} />
      <div className="flex justify-center">
        <input type="submit" value={'Log in'} />
      </div>
    </form>
  </div>)
}

export default page;