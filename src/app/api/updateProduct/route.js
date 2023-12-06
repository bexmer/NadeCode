import { NextResponse } from 'next/server';
import { supabase } from '@/libs/database';

export const POST = async (request) => {
  try {
    const { id, title, description } = await request.json();

    if (title !== undefined && description !== undefined) {
      const { error } = await supabase
        .from('Productos')
        .update({ Titulo: title, Descripcion: description })
        .eq('id', id);
    } else if (title === undefined && description !== undefined) {
      const { error } = await supabase
        .from('Productos')
        .update({ Descripcion: description })
        .eq('id', id);
    } else if (title !== undefined && description === undefined) {
      const { error } = await supabase
        .from('Productos')
        .update({ Titulo: title })
        .eq('id', id);
    }

    return NextResponse.json({
      status: 200,
      message: 'Todo salio correctamente',
    });
  } catch (error) {
    return NextResponse.error(error.message);
  }
};
