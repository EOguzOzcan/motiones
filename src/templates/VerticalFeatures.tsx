import { ThreeFeature } from "@/feature/ThreeFeautre"

import { Section } from "../layout/Section"

const VerticalFeatures = () => (
  <Section
    title="Providing the finest agro commodities"
    description="With over 12 years of extensive experience in international commodity trading"
  >
    <div className="flex w-full flex-col items-center justify-between space-x-0 px-5 md:flex-row  gap-x-24 md:px-0">
      <ThreeFeature
        title="Reliability"
        description="With a market of flooded with unreliable suppliers, we promise to provide you the best quality products."
        image="/trust.svg"
        imageAlt="Reliability"
      />
      <ThreeFeature
        title="Speed"
        description="We pride ourselves on speedy communication. If you have a question, we will respond within minutes."
        image="/speed.svg"
        imageAlt="Speed"
      />
      <ThreeFeature
        title="Best Prices"
        description="We invest in optimising our operations so every part of the process is as efficient as possible."
        image="/price.svg"
        imageAlt="Best Prices"
      />
      <ThreeFeature
        title="Direct"
        description="We work directly with suppliers and manufacturers to ensure efficient communication and the best prices."
        image="/direct.svg"
        imageAlt="Direct"
      />
    </div>
    {/* <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */}
  </Section>
)

export { VerticalFeatures }
