import { createStyles, Text, SimpleGrid, rem } from "@mantine/core"
import { IconDiscountCheck, Icon24Hours, IconTruck, IconTags } from "@tabler/icons-react"
import { GiShakingHands } from "react-icons/gi"
import { MdEngineering, MdOutlineAutoAwesome } from "react-icons/md"
import { VscServerProcess } from "react-icons/vsc"
const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl
  },

  overlay: {
    position: "absolute",
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: "light", color: "gray" }).background,
    zIndex: 1
  },

  content: {
    position: "relative",
    zIndex: 2
  },

  icon: {
    color: "#92ebcf"
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  },
  description: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  }
}))

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>
  title: string
  description: string
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles()

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz='lg' mb='xs' mt={5} className={classes.title}>
          {title}
        </Text>
        <Text className={`${classes.description} `}>{description}</Text>
      </div>
    </div>
  )
}

const mockdata = [
  {
    icon: IconTruck,
    title: "Quick Response",
    description:
      "Our sales and technical team are always ready to assist you with any queries or concerns, providing a seamless experience in every step of the way."
  },
  {
    icon: MdOutlineAutoAwesome,
    title: "Outstanding Support",
    description:
      "We understand that different markets have unique requirements. That’s why we offer customized solutions to suit your specific needs."
  },
  {
    icon: GiShakingHands,
    title: "Customer-oriented Solutions",
    description:
      "Your satisfaction is our priority. Stand out on the market with a customized touch that improve your energy efficiency in your system."
  },
  {
    icon: IconDiscountCheck,
    title: "Competitive Pricing",
    description:
      "At Motion-ES, we believe in providing premium solutions at competitive prices. This allows you to maintain a healthy profit margin without compromising on quality."
  },
  {
    icon: MdEngineering,
    title: "Industry Expertise",
    description:
      "With a robust and efficient supply chain, we ensure that your orders are processed promptly and delivered on time."
  },
  {
    icon: Icon24Hours,
    title: "Sustainable Sourcing",
    description:
      "Our dedicated customer support team is always ready to assist you with any inquiries or concerns. Experience top-notch service and quick solution to any issues that may arise."
  },
  {
    icon: IconTags,
    title: "Product Range",
    description:
      "We provide wide range of products with frequency converters, static converters, inverters, motors, generators, batteries of many global manufacturers."
  },
  {
    icon: VscServerProcess,
    title: "Custom Packaging",
    description:
      "Benefit from our extensive industry knowledge and expertise, we provide valuable insights and guidance to help you make proper decisions for your business."
  }
]

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />)

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "sm", cols: 1 },
        { maxWidth: "md", cols: 2 },
        { maxWidth: "lg", cols: 2 }
      ]}
      spacing={100}
    >
      {items}
    </SimpleGrid>
  )
}
