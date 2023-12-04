// import data from "@/api/ia.json";

// async function loadPost(id) {
//   const data = await datos[id];
//   return data;
// }

export default async function IAverPage({ params }) {
  console.log(params.iaId);

  // const data = await loadPost(params.iaId);

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
        <div className="bg-slate-500 imgCard rounded-sm">
          <img src="" alt="" />
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
          <button className="buttCard  py-1 rounded-sm basis-1/3 mx-4 bg-pink-800">
            Edit
          </button>
          <button className="buttCard  py-1 rounded-sm basis-1/3 bg-red-600">
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
        <h1 className="text-center font-bold text-xl mb-4">Titulo</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque odit
          consequatur fugiat voluptate laboriosam, quaerat ab esse obcaecati
          debitis cupiditate sit accusantium quasi necessitatibus quia
          distinctio blanditiis, pariatur earum neque repudiandae assumenda,
          voluptatum ex incidunt? Exercitationem eveniet, obcaecati commodi
          nulla tempore voluptas quisquam suscipit. Iste qui non, perspiciatis
          harum laborum, dicta molestias aspernatur sunt voluptate sit esse
          optio reprehenderit quasi quos error, architecto beatae ratione eaque
          enim ab vero voluptatibus cum! Tempora consequuntur corporis voluptate
          ipsam autem beatae? Eos impedit quaerat dolorum aut! Consectetur
          suscipit quod odit ut iusto eveniet eum sit maiores dolorem
          repudiandae! Placeat at accusamus debitis voluptate!
        </p>
      </div>
    </div>
  );
}
