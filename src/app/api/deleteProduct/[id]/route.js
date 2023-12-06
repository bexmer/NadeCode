import { NextResponse } from 'next/server';
import { supabase } from '@/libs/database';

export const GET = async (request, { params }) => {
  try {
    const { error } = await supabase
      .from('Productos')
      .delete()
      .eq('id', params.id);

    if (error) {
      return NextResponse.error(error.message);
    }
    console.log('se hizo una solicitud');
    return NextResponse.json({
      status: 200,
      message: 'Todo salio correctamente',
    });
  } catch (error) {
    return NextResponse.error(error.message);
  }
};
