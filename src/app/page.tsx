import { Hero } from '../components/Hero/Hero';
import { Videos } from '../components/Videos/Videos';
import { Music } from '../components/Music/Music';
import { Contact } from '../components/Contact/Contact';
import Script from 'next/script';

export default function Home() {
  
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2XCZ4C7BCY"
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2XCZ4C7BCY');
        `}
      </Script>
      <main>
        <Hero />
        <Videos />
        <Music />
        <Contact />
    </main>
    </>
  )
}
