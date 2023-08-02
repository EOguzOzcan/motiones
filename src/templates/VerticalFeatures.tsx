import { ThreeFeature } from "@/feature/ThreeFeautre"

import { Section } from "../layout/Section"

const VerticalFeatures = () => (
  <Section
    title="It's about making ideas happen"
    description="Spend less time worrying about front-end and more focusing on your product."
  >
    <div className="flex w-full flex-col items-center space-x-0 px-5 md:flex-row md:space-x-20 md:px-0">
      <ThreeFeature
        title="Reliability"
        description="With a market of flooded with unreliable suppliers and joker brokers, we promise to make sure that rain or shine you can count on us to provide you with the best quality products."
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
        description="We invest in optimising our operations so every part of the process is as efficient as possible. This allows us to continuously get you better and better prices with no chance of a reduction in quality."
        image="/price.svg"
        imageAlt="Best Prices"
      />
      <ThreeFeature
        title="Direct"
        description="Tired of working with a chain of joker brokers? We work direct with suppliers to ensure efficient communication and the best prices."
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
