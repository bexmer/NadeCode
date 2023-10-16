import { NextResponse } from "next/server";
import { supabase } from "@/libs/database";

export const POST = async (request) => {
   try {
      const { usuario } = await request.json();
   
      const {error} = await supabase.from('Usuarios').update({Vendedor:true}).eq('Correo', usuario);
   
      if(error){ return NextResponse.error(error.message)}
   
      return NextResponse.json({message: 'todo bien'}, {status: 200});
   } catch (error) {
       return NextResponse.error(error.message);
   }
}