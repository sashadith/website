import { Hero } from '../components/Hero/Hero';
import { Videos } from '../components/Videos/Videos';
import { Music } from '../components/Music/Music';
import { Scrolling } from '../components/Scrolling/Scrolling';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Videos />
      <Music />
      <Scrolling />
    </main>
  )
}
