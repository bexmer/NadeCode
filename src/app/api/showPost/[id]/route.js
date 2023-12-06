import { NextResponse } from 'next/server';
import { supabase } from '@/libs/database';

export const GET = async (request, { params }) => {
  const { id } = params;

  const { data: publicaciones } = await supabase
    .from('Productos')
    .select('*')
    .eq('id', id);

  return NextResponse.json({
    message: publicaciones,
  });
};
