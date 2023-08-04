import { createStyles, Text, Card, SimpleGrid, rem, List, Image, Button, ThemeIcon, Title, Container } from "@mantine/core"
import { IconCircleDashed, IconGauge, IconUser } from "@tabler/icons-react"

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
		image: "/assets/sugar.jpg"
  },
  {
    title: "Premium Sunflower Oil",
    description:
      "As a trusted supplier in the industry, we take immense pride in offering premium-grade sunflower oil that promises purity, flavor, and versatility. We have an annual supply capacity of 1,000,000 tons of raw and refined sunflowers and showing a significant activity in vegetable oil production and storage areas. Besides working with fully integrated seed and vegetable oil processing facilities in Turkey, Malaysia and Europe, together with our business partners, we have a smart pallet rack storage system with a monthly storage capacity of more than 5,000 euro pallets for vegetable oil.",
    list: ["Refined Sunflower Oil", "High Oleic Sunflower Oil", "Organic Sunflower Oil"],
    icon: IconUser,
		image: "/assets/tractor.jpg"
  }
]

const useStyles = createStyles((theme) => ({
	title: {
		fontSize: rem(34),
		fontWeight: 900,

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(24)
		}
	},

	description: {
		maxWidth: 600,
		margin: 'auto',

	
	},

	card: {
		border: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
		}`
	},

	cardTitle: {
		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: "orange",
			width: rem(215),
			height: rem(2),

			marginTop: theme.spacing.sm
		}
	}
}))

export function Products() {
  const { classes } = useStyles()

	const downloadFile = () => {
    // Replace 'path/to/your/file.pdf' with the actual path or URL of your file
    const fileUrl = '/RUHA-CATALOG-2023.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'RUHA-CATALOG-2023.pdf'; // Specify the desired filename for the download
    link.click();
  };


  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow='md' radius='md' className={`${classes.card} relative flex flex-col`} padding='xl' id="products">
        <Card.Section>
        <Image src={feature.image} alt="test" height={375} className="object-cover" />
      </Card.Section>
      <Text fz='lg' fw={500} className={`${classes.cardTitle} text-center flex justify-center items-center flex-col text-2xl mt-8` } mt='md'>
        {feature.title}
      </Text>
      <Text fz='sm' c='dimmed' mt='sm' className="text-base">
        {feature.description}
      </Text>
      <List className="mb-12 ml-12" listStyleType='disc' fz='sm' c='dimmed' mt='sm'>
        {feature.list.map((item) => (
          <List.Item key={item} className="text-base mt-4"  icon={
						<ThemeIcon color="orange" size={20} radius="xl">
							<IconCircleDashed size="1rem" />
						</ThemeIcon>
					}>{item}</List.Item>
        ))}
      </List>
			<div className="absolute bottom-0 right-0 mr-8 ">
			<Button
      fullWidth
      className="bg-orange-500 mb-4 w-32"
			onClick={downloadFile}
    >
     Specs
    </Button>
			</div>
    </Card>
  ))



	return (
		<div className='px-12 py-6'>
			  <Title className={`${classes.title} text-2xl md:text-4xl mt-2 mb-6 text-black text-center`} order={2}>Products</Title>
				<Container size={800} p={0}>
        <Text size='sm' className={`${classes.description} text-lg  text-center mb-12`}>
				At ARC Global Chain, we take pride in offering a diverse range of premium sugar and top-notch sunflower oil products
        </Text>
      </Container>
			<SimpleGrid
				cols={2}
				spacing='xl'
				mt={50}
				breakpoints={[{maxWidth: 'md', cols: 1}]}
			>
				{features}
			</SimpleGrid>
		</div>
	)
}
