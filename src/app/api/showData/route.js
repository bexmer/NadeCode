import { NextResponse } from 'next/server';
import { supabase } from '@/libs/database';

export const GET = async () => {
  const { data: publicaciones } = await supabase.from('Productos').select(
    '*'
  );

  return NextResponse.json({
    message: publicaciones,
  });
};
