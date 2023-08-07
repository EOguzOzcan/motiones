import { createStyles, Text, Card, SimpleGrid, rem, Image, Button, Title, Container } from "@mantine/core"
import { IconGauge, IconUser } from "@tabler/icons-react"
import MantineTabs from "./components/Tabs"
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
    icon: IconGauge,
    image: "/assets/tractor.jpg",
    data: [
      {
        id: "0",
        title: "ICUMSA 45",
        description:
          "ICUMSA 45 Refined Sugar is a premium-quality, pure white, and finely granulated sugar that has undergone a thorough refining process to remove impurities and color. It is widely recognized for its high quality and is graded based on the International Commission for Uniform Methods of Sugar Analysis (ICUMSA) standard, ensuring consistent color and purity. This type of sugar is extensively used in the food and beverage industry for various applications, including baking, confectionery, beverage manufacturing, and as a general sweetener. Its versatility and superior quality make ICUMSA 45 Refined Sugar a popular choice for both commercial and household use worldwide "
      },
      {
        id: "1",
        title: "ICUMSA 100",
        description:
          "ICUMSA 100 Cane Sugar is a refined sugar produced from sugarcane, characterized by its light golden color and fine crystal structure. It undergoes a meticulous refining process to remove impurities, resulting in a premium-quality sweetener with a mild flavor. ICUMSA 100 sugar is graded based on the International Commission for Uniform Methods of Sugar Analysis (ICUMSA) standard, ensuring consistent color and purity. This type of sugar finds application in various industries, including food processing, beverage manufacturing, and confectionery, where its mild sweetness and light color are preferred. It is used as a sweetening agent in a wide range of products, including baked goods, candies, beverages, and sauces, adding a pleasant sweetness without overpowering other flavors."
      },
      {
        id: "2",
        title: "ICUMSA 150",
        description:
          "ICUMSA 150 White Cane Sugar is a high-quality refined sugar derived from sugarcane, possessing a slightly off-white color and fine crystal structure. It is produced through a careful purification process that removes impurities and results in a clean, mild-tasting sweetener. ICUMSA 150 sugar is classified according to the International Commission for Uniform Methods of Sugar Analysis (ICUMSA) standard, ensuring consistent color and purity. This type of sugar finds widespread use in the food and beverage industry, where its neutral flavor and fine texture make it suitable for various applications. It is commonly utilized in baking, confectionery, and beverage production, as well as in a wide range of culinary recipes that require a natural sweetener without altering the color of the final product."
      },
      {
        id: "3",
        title: "ICUMSA 600-1200",
        description:
          "ICUMSA 600-1200 Raw Brown Cane Sugar is an unrefined sugar product that retains its natural brown color and coarse texture due to minimal processing. It is derived from sugarcane and contains higher amounts of molasses, which imparts a distinct caramel-like flavor and aroma. The ICUMSA range of 600-1200 indicates the color intensity, with higher values representing a darker shade. This type of sugar is commonly used in the food industry for its unique taste and texture. It finds application in various culinary creations, such as baking, desserts, and sweet sauces, where its rich, earthy flavor enhances the overall taste profile of the dishes. Additionally, it is often used as a natural sweetener in beverages like coffee, tea, and specialty drinks, providing a more robust and complex sweetness compared to highly refined sugars. Its popularity lies in its ability to add depth and character to a wide range of food and beverage products."
      }
    ]
  },
  {
    title: "Premium Sunflower Oil",
    description:
      "As a trusted supplier in the industry, we take immense pride in offering premium-grade sunflower oil that promises purity, flavor, and versatility. We have an annual supply capacity of 1,000,000 tons of raw and refined sunflowers and showing a significant activity in vegetable oil production and storage areas. Besides working with fully integrated seed and vegetable oil processing facilities in Turkey, Malaysia and Europe, together with our business partners, we have a smart pallet rack storage system with a monthly storage capacity of more than 5,000 euro pallets for vegetable oil.",
    list: ["Refined Sunflower Oil", "High Oleic Sunflower Oil", "Organic Sunflower Oil"],
    icon: IconUser,
    image: "/assets/flower.jpg",
    data: [
      {
        id: "0",
        title: "Refined Oil",
        description:
          "Refined Sunflower Oil is a high-quality cooking oil extracted from sunflower seeds through a process of refining and purification. It is known for its light color, mild flavor, and high smoke point, making it a popular choice for cooking, frying, baking, and salad dressings. Refined sunflower oil undergoes a series of processes, including degumming, neutralization, bleaching, and deodorization, to remove impurities and enhance its stability and shelf life. Its neutral taste allows it to complement the natural flavors of various dishes without overpowering them. Due to its heart-healthy monounsaturated and polyunsaturated fats, and low levels of saturated fat, refined sunflower oil is considered a healthier alternative to some other cooking oils. Its versatility and nutritional benefits have made it a staple in kitchens worldwide for both domestic and commercial use."
      },
      {
        id: "1",
        title: "High Oleic Oil",
        description:
          "High Oleic Sunflower Oil is a premium-grade cooking oil derived from sunflower seeds with a distinctive composition that is rich in monounsaturated fats, particularly oleic acid. The high oleic variety of sunflower oil is obtained from specially selected sunflower seeds that have been bred to have higher levels of oleic acid and lower levels of polyunsaturated fats, resulting in a more stable and heat-resistant oil. This makes it ideal for high-temperature cooking methods such as frying and sautéing. The oil's high smoke point ensures that it does not break down and release harmful compounds when exposed to high heat. Additionally, the oil's neutral taste allows it to complement a wide range of dishes without altering their flavors. High Oleic Sunflower Oil is popular in both commercial food production and home cooking, where its stability, health benefits, and versatility make it a preferred choice for various culinary applications."
      },
      {
        id: "2",
        title: "Organic Oil",
        description:
          "Organic Sunflower Oil is a premium-quality cooking oil derived from organically grown sunflower seeds, cultivated without the use of synthetic pesticides, herbicides, or genetically modified organisms (GMOs). This oil is cold-pressed or expeller-pressed to retain its natural nutrients and flavors, resulting in a light golden color and a mild, nutty taste. The organic certification ensures that the oil is produced in an environmentally sustainable and responsible manner. Organic Sunflower Oil is a versatile oil suitable for various culinary uses, such as sautéing, roasting, baking, and salad dressings. Its high smoke point makes it ideal for frying and deep-frying, while its heart-healthy monounsaturated and polyunsaturated fats, as well as vitamin E content, contribute to its health benefits. With a clean and pure taste, Organic Sunflower Oil is a popular choice among health-conscious consumers seeking a natural and sustainable cooking oil option for their everyday culinary needs."
      }
    ]
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
    margin: "auto"
  },

  card: {
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "orange",
      width: rem(215),
      height: rem(2),

      marginTop: theme.spacing.sm
    }
  }
}))

export function Products() {
  const { classes } = useStyles()

  // const downloadFile = () => {
  //   // Replace 'path/to/your/file.pdf' with the actual path or URL of your file
  //   const fileUrl = "/RUHA-CATALOG-2023.pdf"
  //   const link = document.createElement("a")
  //   link.href = fileUrl
  //   link.download = "RUHA-CATALOG-2023.pdf" // Specify the desired filename for the download
  //   link.click()
  // }

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow='md'
      radius='md'
      className={`${classes.card} relative flex flex-col`}
      padding='xl'
      id='products'
    >
      <Card.Section>
        <Image src={feature.image} alt='test' height={375} className='object-cover' />
      </Card.Section>
      <Text
        fz='lg'
        fw={500}
        className={`${classes.cardTitle} text-center flex justify-center items-center flex-col text-2xl mt-8`}
        mt='md'
      >
        {feature.title}
      </Text>
      <Text fz='sm' c='dimmed' mt='sm' className='text-base'>
        {feature.description}
      </Text>
      <MantineTabs data={feature.data} />

      <div className='absolute bottom-0 right-0 mr-8 '>
        <Button fullWidth className='bg-gray-500 mb-4 w-32 hover:bg-orange-500 transition-all'>
          Specs
        </Button>
      </div>
    </Card>
  ))

  return (
    <div className='px-12 py-6'>
      <Title className={`${classes.title} text-2xl md:text-4xl mt-2 mb-6 text-black text-center`} order={2}>
        Products
      </Title>
      <Container size={800} p={0}>
        <Text size='sm' className={`${classes.description} text-lg  text-center mb-12`}>
          At ARC Global Chain, we take pride in offering a diverse range of premium sugar and top-notch sunflower oil
          products
        </Text>
      </Container>
      <SimpleGrid cols={2} spacing='xl' mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        {features}
      </SimpleGrid>
    </div>
  )
}
