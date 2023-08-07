import { ThemeIcon, Text, Title, Container, createStyles, rem } from "@mantine/core"
import { IconCookie, IconUser, IconMessage2, IconLock, IconCertificate } from "@tabler/icons-react"
import { FeaturesAsymmetrical } from "./Features"

export const MOCKDATA = [
  {
    icon: IconCertificate,
    title: "Quality Assurance",
    description:
      "Our sugar and sunflower oil products undergo rigorous quality checks at every stage to guarantee unmatched purity and taste. You can trust that only the finest products make their way to your shelves."
  },
  {
    icon: IconUser,
    title: "Tailored Product Range",
    description:
      "We understand that different businesses have unique requirements. That's why we offer a tailored product range, including various sugar grades and different sunflower oil quantities to suit your specific needs."
  },
  {
    icon: IconCookie,
    title: "Custom Packaging",
    description:
      "Establish your brand identity with our private labeling and custom packaging options. Stand out on the market with a personalized touch that reflects your business's uniqueness."
  },
  {
    icon: IconLock,
    title: "Competitive Pricing",
    description:
      "At ARC Global Chain, we believe in providing premium products at competitive prices. This allows you to maintain a healthy profit margin without compromising on quality."
  },
  {
    icon: IconMessage2,
    title: "Reliable and Efficient Supply Chain",
    description:
      "With a robust and efficient supply chain, we ensure that your orders are processed promptly and delivered on time. Say goodbye to stock shortages and maintain a seamless business flow."
  },
  {
    icon: IconCookie,
    title: "Outstanding Customer Support",
    description:
      "Our dedicated customer support team is always ready to assist you with any inquiries or concerns. Experience top-notch service and quick resolution to any issues that may arise."
  },
  {
    icon: IconLock,
    title: "Sustainable Sourcing",
    description:
      "We are committed to sustainability and ethical sourcing practices. Our sugar and sunflower oil are sourced responsibly, ensuring minimal impact on the environment and supporting local communities."
  },
  {
    icon: IconMessage2,
    title: "Industry Expertise and Guidance",
    description:
      "Benefit from our extensive industry knowledge and expertise. We provide valuable insights and guidance to help you make informed decisions that drive your business forward."
  }
]

interface FeatureProps {
  icon: React.FC<any>
  title: React.ReactNode
  description: React.ReactNode
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div >
      <ThemeIcon variant='filled' color="orange" size={40} radius={8}>
        <Icon size='1.1rem' stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={700} className="text-black text-xl">
        {title}
      </Text>
	
      <Text size='sm' color='dimmed' className="text-base" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  )
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    maxWidth: "80vw"
  },

  title: {
	
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			fontSize: rem(36),
			fontWeight: 900,
			lineHeight: 1.1,
			marginBottom: theme.spacing.md,
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign: "center"
    }
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left"
    }
  }
}))

interface FeaturesGridProps {
  title: React.ReactNode
  description: React.ReactNode
  data?: FeatureProps[]
}

export function WhyChoose({ title, description }: FeaturesGridProps) {
  const { classes } = useStyles()
 

  return (
    <Container className={classes.wrapper}>
     <Title className={`${classes.title} text-2xl md:text-4xl mt-2`} order={2}>{title}</Title>

      <Container size={800} p={0}>
        <Text size='sm' className={`${classes.description} text-lg `}>
          {description}
        </Text>
      </Container>
				<br />
				<br />

     <FeaturesAsymmetrical/>
    </Container>
  )
}
