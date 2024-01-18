import Head from 'next/head'
import Menu from '@/components/Menu';
import HomeSalvacao from '@/components/HomeSalvacao';

export default function Amor() {
  return (
    <>
      <Head>
        <title>Citações de Amor</title>
        <meta name="description" content="O Amor de Deus descrito pelo Apóstolo João no capítulo 3 e versículo 16 do Evangelho que leva seu nome, diz que Deus nos amou de tal maneira que entregou seu filho unigênito para morrer em nosso lugar. Para que todo aquele que nele crê não morra, mas tenha a vida eterna." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <HomeSalvacao/>
      </main>
    </>
  )
}
