import { createStyles, Text, SimpleGrid, rem } from '@mantine/core';
import {  IconMessage2, IconCertificate, IconDiscountCheck, Icon24Hours, IconTruck, IconTableOptions, IconTags, IconLeaf } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: "gray" }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: "orange" }).color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm" className='text-base'>
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconCertificate,
    title: "Quality Assurance",
    description:
      "Our sugar and sunflower oil products undergo rigorous quality checks at every stage to guarantee unmatched purity and taste. You can trust that only the finest products make their way to your shelves."
  },
  {
    icon: IconTableOptions,
    title: "Product Range",
    description:
      "We understand that different businesses have unique requirements. That's why we offer a tailored product range, including various sugar grades and different sunflower oil quantities to suit your specific needs."
  },
  {
    icon: IconTags,
    title: "Custom Packaging",
    description:
      "Establish your brand identity with our private labeling and custom packaging options. Stand out on the market with a personalized touch that reflects your business's uniqueness."
  },
  {
    icon: IconDiscountCheck,
    title: "Competitive Pricing",
    description:
      "At ARC Global Chain, we believe in providing premium products at competitive prices. This allows you to maintain a healthy profit margin without compromising on quality."
  },
  {
    icon: IconTruck,
    title: "Efficient Supply Chain",
    description:
      "With a robust and efficient supply chain, we ensure that your orders are processed promptly and delivered on time. Say goodbye to stock shortages and maintain a seamless business flow."
  },
  {
    icon: Icon24Hours,
    title: "Outstanding Support",
    description:
      "Our dedicated customer support team is always ready to assist you with any inquiries or concerns. Experience top-notch service and quick resolution to any issues that may arise."
  },
  {
    icon: IconLeaf,
    title: "Sustainable Sourcing",
    description:
      "We are committed to sustainability and ethical sourcing practices. Our sugar and sunflower oil are sourced responsibly, ensuring minimal impact on the environment and supporting local communities."
  },
  {
    icon: IconMessage2,
    title: "Industry Expertise",
    description:
      "Benefit from our extensive industry knowledge and expertise. We provide valuable insights and guidance to help you make informed decisions that drive your business forward."
  }
]


export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
  
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={100}>
        {items}
      </SimpleGrid>
   
  );
}