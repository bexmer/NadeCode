'use client';

import { useEffect, useState } from 'react';
import { UseGlobalContext } from '../context/Context';
import { useRouter } from 'next/navigation';

// import data from "@/api/ia.json";

// async function loadPost(id) {
//   const data = await datos[id];
//   return data;
// }

export default async function IAverPage({ params }) {
  // const data = await loadPost(params.iaId)zz;
  const [post, setPost] = useState();
  const context = UseGlobalContext();
  const router = useRouter();

  useEffect(() => {
    const loadPost = async () => {
      const response = await fetch(
        `${location.origin}/api/showPost/${params.id}`,
        {
          method: 'GET',
        }
      );

      const data = await response.json();

      setPost(data.message[0]);
    };

    loadPost();
  }, []);

  const handleEdit = async () => {
    context.setPosts(post);
    router.push(`${location.origin}/editPost`);
  };

  const handleDelete = async () => {
    const response = await fetch(
      `${location.origin}/api/deleteProduct/${params.id}`,
      { method: 'GET' }
    );

    const data = await response.json();

    if (data.status === 200) {
      router.push('/modelos');
    }
  };

  // function estado() {
  //   if (data.Estado == true) {
  //     return <h1>Entrenado</h1>;
  //   } else {
  //     return <h1>Pre-Entrenado</h1>;
  //   }
  // }
  return (
    <div className="flex">
      {/* Lado izquierdo */}
      <div className="basis-7/12 p-6  flex-col">
        <div className="bg-slate-500 imgCard rounded-sm flex justify-center">
          <img
            src={post !== undefined ? post.Imagen : ''}
            className="h-full"
            alt=""
          />
        </div>

        <div className="flex text-center my-7 font-semibold">
          <div className="basis-1/3 estado mr-4 rounded-sm py-1">
            {/* {estado()} */}
          </div>
          <div className="basis-1/3 categoria mx-4 rounded-sm py-1">
            {/* <h1>{data.Categoria}</h1> */}
          </div>
          <div className="basis-1/3 precio ml-4 rounded-sm py-1">
            {/* <h1>{data.Modo_Precio}</h1> */}
          </div>
        </div>

        <div className="flex flex-row mb-7">
          <button className="buttCard  py-1 rounded-sm basis-1/3 bg-green-600">
            Acceder
          </button>
          <button
            onClick={() => handleEdit()}
            className="buttCard  py-1 rounded-sm basis-1/3 mx-4 bg-pink-800"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete()}
            className="buttCard  py-1 rounded-sm basis-1/3 bg-red-600"
          >
            Delete
          </button>
        </div>

        <div className="flex mt-5 bg-stone-800 py-4 rounded-sm">
          <div className="py-2 px-3 mx-4 basis-1/2">
            <img src="" alt="" />
            <p>Open IA</p>
          </div>

          <div className="basis-1/2 justify-end">
            <button className="bg-gray-800 py-2 px-3 mx-1 rounded-md">
              Suscribete
            </button>
            <button className="bg-gray-800 py-2 px-3 mx-1 rounded-md">
              <img src="/src/img/thumbs-up.svg" alt="" />
            </button>
            <button className="bg-gray-800 py-2 px-3 mx-1 rounded-md">
              <img src="/src/img/thumbs-down.svg" alt="" />
            </button>
            <button className="bg-gray-800 py-2 px-3 mx-1 rounded-md">
              <img src="/src/img/bookmark.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Lado derecho */}
      <div className="basis-5/12 p-6 ladoDerecho">
        <h1 className="text-center font-bold text-xl mb-4">
          {post !== undefined ? post.Titulo : ''}
        </h1>
        <p className="text-justify">
          {post !== undefined ? post.Descripcion : ''}
        </p>
      </div>
    </div>
  );
}
