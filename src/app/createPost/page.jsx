"use client";
import { useReducer, useEffect, useState } from "react";
import { reducer } from "./reducer";
import { InitialValues } from "@/app/createPost/initialValues";
import { useSession } from "next-auth/react";
import "@/app/createPost/lol.css";

const page = () => {
  const session = useSession();
  const [state, dispatch] = useReducer(reducer, InitialValues);
  const [vendedor, setVendedor] = useState("");

  useEffect(() => {
    if (session.data) {
      setVendedor(session.data.user[0].Vendedor);
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("titulo", state.title);
    formData.set("descripcion", state.description);
    formData.set("imagen", state.image);
    formData.set("categoria", state.category);
    formData.set("modoPrecio", state.priceMode);
    formData.set("estado", state.state);

    const response = await fetch("/api/createProduct", {
      method: "POST",
      body: formData,
    });

    // const data = await response.json();
  };

  //Cambia los estilos por unos bonitos, acuerdate, que estos nomas los hice
  //Para ver el formulario y hacer las pruebas, ni puse los labels por lo mismo
  return true ? (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <div className="basis-1/2 text-center divTD">
          <input
            type="text"
            placeholder="Title"
            className="dimeInput input1"
            onChange={(e) =>
              dispatch({
                type: "title",
                payload: e.target.value,
              })
            }
          />
          <textarea
            cols="30"
            rows="10"
            className="input1 dimeInput textarea1"
            placeholder="Description"
            type="text"
            onChange={(e) =>
              dispatch({
                type: "description",
                payload: e.target.value,
              })
            }
          ></textarea>
          <div className="flex justify-center">
            <input
              className="bg-green-700 buttonUE"
              type="submit"
              value={"Send"}
            />
          </div>
        </div>

        <div className="basis-1/2 text-center divTD">
          <div class="w-full flex text-center">
            <input
              id="picture"
              type="file"
              class="flex justify-center h-24 w-full rounded-md border border-input px-3 py-2 text-sm text-gray-200 file:border-0 file:bg-transparent file:text-gray-400 file:text-sm file:font-medium SubirImage"
              onChange={(e) => {
                dispatch({
                  type: "image",
                  payload: e.target.files[0],
                });
              }}
            />
          </div>
          <div className="flex flex-row">
            <div className="basis-1/2 mr-2 my-5">
              <h2 className="mb-3 text-xl">Category</h2>
              <input
                className="catDos"
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "category",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="basis-1/2 ml-2 my-5">
              <h2 className="mb-3 text-xl">Price</h2>
              <input
                className="catDos"
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "priceMode",
                    payload: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : (
    <h1>No eres un vendedor</h1>
  );
};

export default page;
