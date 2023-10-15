// import CardIA from "../components/CardIA";
// import Filtro from "@/components/Filtro";
import Principal from "@/components/Principal";
// import Link from "next/link";

import datos from "@/api/ia.json";
console.log(datos);

export default function Home() {
  return (
    <main>
      <div className="principal">
        <Principal />
      </div>
      {/* <div className="flex mb-10 mt-9">
        <div className="basis-3/12">
          <Filtro />
        </div>
        <div className="grid grid-cols-3 basis-9/12 justify-items-center">
          {datos.map((data) => {
            return (
              <Link href={`/${data.Id}`}>
                <CardIA data={data} key={data.Id} />
              </Link>
            )
          })}
        </div>
      </div> */}
    </main>
  );
}
