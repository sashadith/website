import { Hero } from '../components/Hero/Hero';
import { Videos } from '../components/Videos/Videos';
import { VideosAnimate } from '../components/VideosAnimate/VideosAnimate';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Videos />
      {/* <VideosAnimate /> */}
    </main>
  )
}
