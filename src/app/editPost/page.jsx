'use client';
import { useReducer, useEffect, useState } from 'react';
import { reducer } from './reducer';
import { InitialValues } from '@/app/createPost/initialValues';
import { useSession } from 'next-auth/react';
import '@/app/createPost/lol.css';
import { useRouter } from 'next/navigation';
import { UseGlobalContext } from '../context/Context';

const page = () => {
  const router = useRouter();
  const session = useSession();
  const { posts } = UseGlobalContext();
  const [vendedor, setVendedor] = useState('');
  const [title, setTitle] = useState(posts.Titulo);
  const [description, setDescription] = useState(posts.Descripcion);

  useEffect(() => {
    if (session.status !== 'loading') {
      if (session.data.user.length > 0) {
        setVendedor(session.data.user[0].Vendedor);
      }
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/updateProduct`, {
      method: 'POST',
      body: JSON.stringify({
        id: posts.id,
        title: title,
        description: description,
      }),
    });

    const data = await response.json();

    if (data.status === 200) {
      router.push('/modelos');
    }
  };

  //Cambia los estilos por unos bonitos, acuerdate, que estos nomas los hice
  //Para ver el formulario y hacer las pruebas, ni puse los labels por lo mismo
  return vendedor ? (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <div className="basis-1/2 text-center divTD">
          <input
            type="text"
            placeholder="Title"
            className="dimeInput input1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            className="input1 dimeInput textarea1"
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex justify-center">
            <input
              className="bg-green-700 buttonUE"
              type="submit"
              value={'Send'}
            />
          </div>
        </div>
      </div>
    </form>
  ) : (
    <h1>No eres un vendedor</h1>
  );
};

export default page;
