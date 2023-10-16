'use client';
import { useReducer, useEffect, useState } from 'react';
import { reducer } from './reducer';
import { InitialValues } from '@/app/createPost/initialValues';
import { useSession } from 'next-auth/react'

const page = () => {
  const session = useSession();
  const [state, dispatch] = useReducer(reducer, InitialValues);
  const [vendedor, setVendedor] = useState('');

  useEffect(() => {
    if (session.data) {
      setVendedor(session.data.user[0].Vendedor);
    }
  }, [session])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('titulo', state.title);
    formData.set('descripcion', state.description);
    formData.set('imagen', state.image);
    formData.set('categoria', state.category);
    formData.set('modoPrecio', state.priceMode);
    formData.set('estado', state.state);

    const response = await fetch('/api/createProduct', {
      method: 'POST',
      body: formData,
    });

    // const data = await response.json();

  };

  //Cambia los estilos por unos bonitos, acuerdate, que estos nomas los hice 
  //Para ver el formulario y hacer las pruebas, ni puse los labels por lo mismo
  return vendedor ? (
    <div className="w-1/4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          onChange={(e) =>
            dispatch({
              type: 'title',
              payload: e.target.value,
            })
          }
        />
        <input
          type="text"
          onChange={(e) =>
            dispatch({
              type: 'description',
              payload: e.target.value,
            })
          }
        />
        <input
          type="file"
          onChange={(e) => {
            dispatch({
              type: 'image',
              payload: e.target.files[0],
            });
          }}
        />
        <input
          type="number"
          onChange={(e) =>
            dispatch({
              type: 'category',
              payload: e.target.value,
            })
          }
        />
        <input
          type="number"
          onChange={(e) =>
            dispatch({
              type: 'priceMode',
              payload: e.target.value,
            })
          }
        />
        <div className="flex justify-center">
          <input type="submit" value={'send data'} />
        </div>
      </form>
    </div>
  ): (<h1>No eres un vendedor</h1>)
};

export default page;
