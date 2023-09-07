import { Hero } from '../components/Hero/Hero';
import { Videos } from '../components/Videos/Videos';
import { Music } from '../components/Music/Music';
import { VideosAnimate } from '../components/VideosAnimate/VideosAnimate';

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Videos />
      <Music />
      {/* <VideosAnimate /> */}
    </main>
  )
}
