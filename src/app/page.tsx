import { Hero } from '../components/Hero/Hero';
import { ParallaxImage } from '../components/ParallaxImage/ParallaxImage';
import { About } from '../components/About/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <ParallaxImage />
      <About />
    </main>
  )
}
