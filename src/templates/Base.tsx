import { Meta } from "../layout/Meta"
import { AppConfig } from "../utils/AppConfig"
import { About } from "./About"
import { BannerRight } from "./BannerRight"
import { ContactMantine } from "../mantine/Contact"
import { Hero } from "./Hero"
import { Footer } from "./Footer"
import { VerticalFeatures } from "./VerticalFeatures"
import { WhyChoose } from "../mantine/WhyChoose"
import { Products } from "../mantine/Products"

const Base = () => (
  <div className='w-full text-gray-600 antialiased'>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <About />
    <BannerRight />
    <WhyChoose
      title='Why Choose ARC Global Chain'
      description='At ARC Global Chain, we take pride in offering a diverse range of premium sugar and top-notch sunflower oil products. Our commitment to excellence extends beyond our products, as we provide eight unique business features that set us apart from the competition and ensure your success'
    />
    <Products />
    <div className='bg-gray-100'>
      <ContactMantine />
    </div>
    <Footer />
  </div>
)

export { Base }
