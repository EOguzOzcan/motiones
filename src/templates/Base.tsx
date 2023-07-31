import { Meta } from "../layout/Meta"
import { AppConfig } from "../utils/AppConfig"
import { Banner } from "./Banner"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { VerticalFeatures } from "./VerticalFeatures"

const Base = () => {
  return (
    <div className='text-gray-600 antialiased'>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      <Banner />
      <div className='bg-red-500'>
        <Footer />
      </div>
    </div>
  )
}

export { Base }
