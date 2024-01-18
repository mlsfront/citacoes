import Head from 'next/head'
import Menu from '@/components/Menu';
import AmorCitacao from '@/components/AmorCitacao';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amor e Salvação</title>
        <meta name="description" content="Fomos salvos da condenação eterna graças a Deus e a Jesus que se ofereceu como sacrifício vivo para morrer em nosso lugar, e a sua ressureição dentre os mortos no terceiro dia como havia sido predita pelos profetas e por Jesus; nos dá a plena certeza da vida eterna mediante a Salvação." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <AmorCitacao />
      </main>
    </>
  )
}
