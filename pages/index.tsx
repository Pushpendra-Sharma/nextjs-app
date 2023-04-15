import Head from 'next/head';
import Image from 'next/image';
import { ProgressBar } from '@/components';
import logo from '../public/growth-x-logo-dark.png';
import { AppProvider } from '@/contexts/app-context';
import { MainContainer } from '@/containers';

export default function Home() {
  return (
    <>
      <Head>
        <title>Typeform App</title>
        <meta name='description' content='Typeform app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='w-full bg-black'>
        <ProgressBar value={1} />
        <Image src={logo} alt='growth-x logo' width={96} height={24} />
      </header>

      <main className='bg-black text-white'>
        <AppProvider>
          <MainContainer />
        </AppProvider>
      </main>

      <footer className='bg-black'></footer>
    </>
  );
}
