import '@/components/todo.css';
import Link from 'next/link';

export default function CardIA({ data }) {
  return (
    <Link href={`/${data.id}`} className="CardIA p-5 m-2 rounded-xl">
      {/* Imagen */}
      <div className="flex justify-center bg-black">
        <img
          className="w-30 m-2 h-20 rounded-lg"
          src={data.Imagen}
          alt="carro"
        />
      </div>

      {/* Titulo */}
      <div className="text-center">
        <h1 className="text-2xl py-5 font-semibold">{data.Titulo}</h1>
      </div>

      {/* Descripción */}
      <div className="bg-stone-900 px-5 py-4 rounded-lg">
        <p className="descri text-justify">{data.Descripcion}</p>
      </div>

      {/* Información */}
      <div className="flex info justify-center pt-3 text-center items-center">
        <div className="rounded-lg bg-violet-950 py-1 px-3">Pre</div>
        <div className="rounded-lg bg-cyan-950 py-2 px-3 text-xs">
          Natural Language
        </div>
        <div className="rounded-lg bg-violet-950 py-1 px-3">Free</div>
      </div>
    </Link>
  );
}
