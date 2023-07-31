import { ThreeFeature } from "@/feature/ThreeFeautre"

import { Section } from "../layout/Section"

const VerticalFeatures = () => (
  <Section
    title="It's about making ideas happen"
    description="Spend less time worrying about front-end and more focusing on your product."
  >
    <div className="flex w-full flex-col items-center space-x-0 px-5 md:flex-row md:space-x-20 md:px-0">
      <ThreeFeature
        title="Responsive Layout"
        description="Optio dolores expedita unde vel laudantium enim nisi eos distinctio, rem. Repellat repudiandae quos laborum magni."
        image="/responsive.svg"
        imageAlt="Responsive Layout"
      />
      <ThreeFeature
        title="Easy to Customize"
        description="Praesentium reprehenderit quae, sequi deserunt laboriosam velit necessitatibus nulla ea optio, quis nam pariatur."
        image="/website.svg"
        imageAlt="Responsive Layout"
      />
      <ThreeFeature
        title="Fully Documented"
        description="Aperiam recusandae ipsa culpa, cupiditate magnam dolor molestiae, omnis, architecto possimus aperiam corrupti corporis."
        image="/document.svg"
        imageAlt="Responsive Layout"
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
