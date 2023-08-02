import { Meta } from "../layout/Meta"
import { AppConfig } from "../utils/AppConfig"
import { About } from "./About"
import { Banner } from "./Banner"
import { BannerRight } from "./BannerRight"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { VerticalFeatures } from "./VerticalFeatures"

const Base = () => (
  <div className='w-full text-gray-600 antialiased'>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
		<About/>
    <BannerRight />
    <Banner />
    <div className='bg-gray-100'>
      <Footer />
    </div>
  </div>
)

export { Base }
