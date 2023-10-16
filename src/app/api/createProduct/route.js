import { NextResponse } from 'next/server';
import uploadImages from '@/middlewares/UploadImage';
import { supabase } from "@/libs/database"

export const POST = async (request) => {
  try {
    const Data = await request.formData();
    const title = Data.get('titulo');
    const description = Data.get('descripcion');
    const image = Data.get('imagen');
    const category = Data.get('categoria');
    const priceMode = Data.get('modoPrecio');

    const bytes = await image.arrayBuffer();
    const bufferImage = Buffer.from(bytes);

    const Image = await uploadImages(bufferImage);

    const { error } = await supabase.from('Productos').insert({
      Titulo: title,
      Descripcion: description,
      Imagen: Image.secure_url,
      Categoria: Number(category),
      ModoPrecio: Number(priceMode),
      Estado: false,
    });

    if (error) return NextResponse.error(error);

    return NextResponse.json(
      { message: 'Todo salió correctamente' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Algo salió mal' }, { status: 500 });
  }
};
