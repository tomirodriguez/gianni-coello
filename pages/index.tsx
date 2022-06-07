import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Home: NextPage = () => {
  const [imgSrc, setImgSrc] = useState('/imgs/gianni-pinoccio.jpeg');
  return (
    <div className="bg-slate-800 h-screen py-12">
      <Head>
        <title>Lasha Coello</title>
        <meta name="description" content="Lasha, tu actiz favorita" />
      </Head>

      <main className="container mx-auto flex flex-col items-center">
        <h1 className="text-red-400 text-5xl mb-4">LASHA COELLO</h1>
        <h2 className="text-red-300 text-xl mb-8">Tu actriz en este lio</h2>

        <Image
          src={imgSrc}
          alt="Gianni y Pinoccio"
          width={720 / 2}
          height={960 / 2}
          onMouseOver={() => setImgSrc('/imgs/gianni-jump.png')}
          onMouseLeave={() => setImgSrc('/imgs/gianni-pinoccio.jpeg')}
          className="rounded-md shadow-lg"
        />

        <h3 className="mt-6 text-md text-blue-100">
          Tambien te adiestra al rope
        </h3>
      </main>
    </div>
  );
};

export default Home;
