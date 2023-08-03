import { createStyles, Badge, Group, Text, Card, SimpleGrid, Container, rem, List } from "@mantine/core"
import { IconGauge, IconUser } from "@tabler/icons-react"

const mockdata = [
  {
    title: "Sugar: Nature's Sweet Perfection",
    description:
      "Indulge in the natural sweetness of our ICUMSA sugar products, carefully selected to meet the highest standards of purity and taste. Our sugar products are sourced from the finest sugarcane plantations around the world, ensuring a consistent level of quality and flavor. From white granulated sugar to various grades of refined sugar, we offer a diverse range to cater to your specific needs. Perfect for baking, beverages, confectionery, and more, our sugar products will enhance the sweetness in every aspect of your business.",
    list: [
      "White Refined Sugar (ICUMSA 45)",
      "Cane Sugar (ICUMSA 100)",
      "White Cane Sugar (ICUMSA 150)",
      "Raw Brown Cane Sugar (ICUMSA 600-1200)"
    ],
    icon: IconGauge
  },
  {
    title: "Premium Sunflower Oil:",
    description:
      "As a trusted supplier in the industry, we take immense pride in offering premium-grade sunflower oil that promises purity, flavor, and versatility. Whether you are a retailer, distributor, or a food manufacturer, our catalog showcases a wide range of options to cater to your unique requirements, including packaging and shipment details.We have an annual supply capacity of 1,000,000 tons of raw and refined sunflowers and showing a significant activity in vegetable oil production and storage areas. Besides working with fully integrated seed and vegetable oil processing facilities in Turkey, Malaysia and Europe, together with our business partners, we have a smart pallet rack storage system with a monthly storage capacity of more than 5,000 euro pallets for vegetable oil.",
    list: ["Refined Sunflower Oil", "High Oleic Sunflower Oil", "Organic Sunflower Oil"],
    icon: IconUser
  }
]

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24)
    }
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  card: {
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm
    }
  }
}))

export function Products() {
  const { classes, theme } = useStyles()
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow='md' radius='md' className={classes.card} padding='xl'>
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz='lg' fw={500} className={classes.cardTitle} mt='md'>
        {feature.title}
      </Text>
      <Text fz='sm' c='dimmed' mt='sm'>
        {feature.description}
      </Text>
      <List listStyleType='disc' fz='sm' c='dimmed' mt='sm'>
        {feature.list.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
    </Card>
  ))

  return (
    <Container size='lg' py='xl'>
      <Group position='center'>
        <Badge variant='filled' size='lg'>
          Products
        </Badge>
      </Group>

      <SimpleGrid cols={2} spacing='xl' mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  )
}
