import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import Navbar from "./components/navbar";
import { Team } from "./components/team";



export default function Home(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Team />
      <Contact />
    </main>
  )
}