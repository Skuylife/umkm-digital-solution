import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"

export default function Home(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Testimonials/>
    <Pricing/>
    <Contact/>
    <Footer/>
    </>
  )
}