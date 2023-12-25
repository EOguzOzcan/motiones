import { ContactMantine } from "../mantine/Contact"
import { Hero } from "./Hero"
import { Footer } from "./Footer"
import { VerticalFeatures } from "./VerticalFeatures"
import { WhyChoose } from "../mantine/WhyChoose"
import { Products } from "../mantine/Products"
import NewProduct from "../mantine/NewProduct"
import { HeaderAction } from "@/mantine/Header"

const Base = () => (
  <div className='w-full text-gray-600 antialiased'>
    <HeaderAction />
    <Hero />
    <VerticalFeatures />
    <NewProduct />
    <WhyChoose
      title='Why Choose Us'
      description='Our commitment to excellence extends beyond our services, as we provide eight unique business features that set us apart from the competition and ensure our reliability'
    />
    <Products />
    <div className='bg-gray-100 mt-12'>
      <ContactMantine />
    </div>
    <Footer />
  </div>
)

export { Base }
