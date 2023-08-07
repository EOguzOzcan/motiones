import React from "react"

import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem } from "@mantine/core"
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from "@tabler/icons-react"

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2)`
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  }
}))

const features = [
  {
    icon: IconReceiptOff,
    title: "Uncompromising Quality",
    description:
      "We believe in offering products that meet the highest quality standards. Our sugar and sunflower oil products undergo rigorous testing and inspection to ensure they exceed your expectations."
  },
  {
    icon: IconFileCode,
    title: "Competitive Pricing",
    description:
      "We understand the value of affordability in a competitive market. Our prices are designed to give your business the edge it needs without compromising on quality."
  },
  {
    icon: IconCircleDotted,
    title: "Reliable Supply",
    description:
      "With ARC Global Chain, you can count on a steady and dependable supply. Say goodbye to stock shortages and focus on growing your business with confidence."
  },
  {
    icon: IconFlame,
    title: "Exceptional Customer Service",
    description:
      "Your satisfaction is our priority. Our dedicated support team is always ready to assist you with any queries or concerns, providing a seamless experience every step of the way."
  }
]

const VerticalFeatures = () => {
  const { classes } = useStyles()

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius='md' variant='gradient' gradient={{ deg: 133, from: "orange", to: "yellow" }}>
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz='lg' mt='sm' fw={900} className='text-black'>
        {feature.title}
      </Text>
      <Text c='dimmed' fz='sm' className='text-base'>
        {feature.description}
      </Text>
    </div>
  ))

  return (
    <div className={`${classes.wrapper} my-4 mt-16 mx-0 md:mx-12`}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={`${classes.title} text-2xl md:text-4xl`} order={2}>
            ARC Global Chain
          </Title>
          <br />
          <Title className={`${classes.title} text-2xl md:text-3.5xl mt-2`} order={2}>
            Your Trusted Partner for Quality, Price, Supply, and Service
          </Title>
          <br />

          <Text c='dimmed' className='text-xl'>
            ARC Global Chain is established by ATG & Ruha Yağ Rafineri A.Ş.to provide the finest quality sugar and
            sunflower oil commodity products.
          </Text>
          <br />
          <Text c='dimmed' className='text-xl'>
            We pride ourselves in manufacturing and delivering the highest quality commodities. We also make sure all
            our products undergo accredited independent quality assurance inspection testing.
          </Text>
          <Button variant='gradient' gradient={{ deg: 133, from: "blue", to: "cyan" }} size='lg' radius='md' mt='xl'>
            Get started
          </Button>
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
