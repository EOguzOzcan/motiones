import { Meta } from "../layout/Meta"
import { AppConfig } from "../utils/AppConfig"
import { About } from "./About"
import { Banner } from "./Banner"
import { BannerRight } from "./BannerRight"
import { Contact } from "./Contact"
import { Hero } from "./Hero"
import { Footer } from "./Footer"
import { VerticalFeatures } from "./VerticalFeatures"

const Base = () => (
  <div className='w-full text-gray-600 antialiased'>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <About />
    <BannerRight />
    <Banner />
    <div className='bg-gray-100'>
      <Contact />
    </div>
    <Footer />
  </div>
)

export { Base }
