'use client';
import React from 'react';
import CardIA from '@/components/CardIA';
import dato from '@/app/api/ia.json';
import Link from 'next/link';
import '@/app/globals.css';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Modelos() {
  const session = useSession();
  const [vendedor, setVendedor] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('session', session);
    if (session.status !== 'loading') {
      if (session.data.user.length > 0) {
        setVendedor(session.data.user[0].Vendedor);
      }
    }
  }, [session.status]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('/api/showData', {
        method: 'GET',
      });

      const data = await response.json();

      setPosts(data.message);
    };

    getPosts();
  }, []);

  return (
    <div>
      {vendedor && (
        <nav className="flex items-center h-10 ">
          <Link
            href={'/createPost'}
            className=" bg-green-800 px-9 mx-5 butonCreate rounded-md hover:bg-cyan-800 active:opacity-80"
          >
            Create
          </Link>
        </nav>
      )}
      <div className="grid grid-cols-4">
        {posts.map((data) => (
          <>
            <CardIA key={data.id} data={data} />
          </>
        ))}
      </div>
    </div>
  );
}
