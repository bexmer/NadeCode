import { NextResponse } from "next/server";
import { supabase } from "@/libs/database";

export const POST = async (request) => {
    try {
        const data = await request.formData();
        const nombre = data.get('nombre');
        const correo = data.get('correo')
        const contraseña = data.get('contraseña');

        const { error } = await supabase.from('Usuarios').insert({
            Nombre: nombre,
            Correo: correo,
            Contrasena: contraseña,
            Vendedor: false,
        });

        if (error) return NextResponse.json({message: error});

        return NextResponse.json(
            { message: 'Todo salió correctamente' },
            { status: 200 }
          );

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};