import React from "react"

import { createStyles, Title, SimpleGrid, Text, ThemeIcon, Grid, Col, rem } from "@mantine/core"
import { IconTruck } from "@tabler/icons-react"
import { GiShakingHands, GiAutoRepair } from "react-icons/gi"
import { MdEngineering } from "react-icons/md"
const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2)`
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  },
  featureTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  }
}))

const features = [
  {
    icon: GiShakingHands,
    title: "Customized Solutions",
    description:
      "We believe in offering products and solutions that meet the highest expectations. Our solutions can be customized for your applications and needs."
  },
  {
    icon: IconTruck,
    title: "Quick Technical Support and Flexibility",
    description:
      "We understand how your system is important in case you have downtime due to electrical converters. Our dedicated support team find quickest and best way to handle for existing problems in your system."
  },
  {
    icon: MdEngineering,
    title: "Engineering and Engineering Support",
    description:
      "With Motion-ES, you can have highly qualified engineering solutions with professionals who have years of experience."
  },
  {
    icon: GiAutoRepair,
    title: "Realibility and Customer-oriented Support/Solutions",
    description:
      "Your satisfaction is our priority. Our sales and technical team are always ready to assist you with any queries or concerns, providing a seamless experience in every step of the way."
  }
]

const VerticalFeatures = () => {
  const { classes } = useStyles()

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius='md' variant='gradient' className={"bg-cadetblue bg-none"}>
        <feature.icon className='bg-none text-anthracite' size={rem(26)} stroke={"1.5"} />
      </ThemeIcon>
      <Text fz='lg' mt='sm' fw={700} className={`${classes.featureTitle} text-xl text-anthracite mb-3`}>
        {feature.title}
      </Text>
      <Text fz='sm' className={`${classes.featureTitle} text-base`}>
        {feature.description}
      </Text>
    </div>
  ))

  return (
    <div className={`${classes.wrapper} mt-16 `}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={`${classes.title} text-2xl md:text-4xl`} order={2}>
            Motion-ES
          </Title>
          <Text fw={700} mt='sm' className={`${classes.featureTitle} text-xl text-anthracite mb-3`}>
            Your Trusted Partner for Quality, Price, Supply, and Service
          </Text>

          <Text className={`${classes.featureTitle} text-xl`}>
            Motion-ES is an integration and multiservice company that can support for your electrical converters,
            electrical motors/generators and batteries of many global manufacturers.
          </Text>
          <br />

          <Text className={`${classes.featureTitle} text-xl`}>
            Quick response, flexibility and customer-oriented solutions are our essential principles.
          </Text>
          <br />
          <Text className={`${classes.featureTitle} text-xl`}>
            We supply products for various markets along with technical support including engineering, automation,
            system integration, commissioning and after sales services. We mainly adapt our portfolio to the customer’s
            needs.
          </Text>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  )
}

export { VerticalFeatures }
