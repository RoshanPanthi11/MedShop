import Navbar from '../app/components/Navbar'
import Banner from '../app/components/Banner'
import Flashsale from '../app/components/Flashsale'
import Category from '../app/components/Category'
import Footer from '../app/components/Footer'
import Testimonial from '../app/components/Testimonial'
import About from '../app/components/About'

export default function HomePage() {
  return (
   <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section (optional) */}
     <Banner></Banner>

      {/* Flash Sales or Featured Products */}
      <Flashsale></Flashsale>
      <Category></Category>
      <About></About>
       <Testimonial>
      </Testimonial>
      <Footer></Footer>
     
      </>
    
  );
}
