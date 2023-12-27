import { useEffect, useState } from "react"

import { createStyles, rem, Title } from "@mantine/core"
import { useScrollIntoView } from "@mantine/hooks"

import { CardsCarousel } from "./components/CardsCarousel"
import { SubProductCarousel } from "./components/SubProductCarousel"
import subProducts from "../productInformation/subProducts.json"

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  },

  description: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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

type SubProductsType = {
  id: string
  mainProductId: string
  mainProductName: string
  title: string
  description: string
  image: string
}[]
export type SelectedProductType = {
  id: string
  productName: string
}[]

const randomNumber = Math.floor(Math.random() * 4) + 1

export function Products() {
  const { classes } = useStyles()
  const [SelectedProduct, setSelectedProduct] = useState<SelectedProductType>([])
  const [filteredSubProducts, setFilteredSubProducts] = useState<SubProductsType>([])
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 90
  })

  useEffect(() => {
    // Filter the subProducts.json file to find the product that matches the ProductId
    if (SelectedProduct.length === 0) {
      const product = subProducts.filter((product) => product.mainProductId === randomNumber.toString())
      setFilteredSubProducts(product)
    } else {
      const product = subProducts.filter((product) => product.mainProductId === SelectedProduct[0].id)
      setFilteredSubProducts(product)
    }
  }, [SelectedProduct])

  // const downloadFile = () => {
  //   // Replace 'path/to/your/file.pdf' with the actual path or URL of your file
  //   const fileUrl = "/RUHA-CATALOG-2023.pdf"
  //   const link = document.createElement("a")
  //   link.href = fileUrl
  //   link.download = "RUHA-CATALOG-2023.pdf" // Specify the desired filename for the download
  //   link.click()
  // }

  // const features = mockdata.map((feature, index) => (
  //   <Card
  //     key={feature.title}
  //     shadow='md'
  //     radius='md'
  //     className={`${classes.card} relative flex flex-col`}
  //     padding='xl'
  //     id='products'
  //   >
  //     <Card.Section>
  //       <Image src={feature.image} alt='test' height={375} className='object-cover' />
  //     </Card.Section>
  //     <Text
  //       fz='lg'
  //       fw={500}
  //       className={`${classes.cardTitle} text-center flex justify-center items-center flex-col text-2xl mt-8`}
  //       mt='md'
  //     >
  //       {feature.title}
  //     </Text>
  //     <Text fz='sm' c='dimmed' mt='sm' className='text-base'>
  //       {feature.description}
  //     </Text>
  //     <MantineTabs data={feature.data} index={index} />

  //     <div className='absolute bottom-0 right-0 mr-8 '>
  //       <Button fullWidth className='bg-gray-500 mb-4 w-32 hover:bg-orange-500 transition-all'>
  //         Specs
  //       </Button>
  //     </div>
  //   </Card>
  // ))

  return (
    <div className='px-6 py-6'>
      <Title className={`${classes.title} text-2xl md:text-4xl mt-2 mb-6 text-center`} order={2}>
        Products
      </Title>
      {/* <Container size={800} p={0}>
        <Text size='sm' className={`${classes.description} text-xl  text-center mb-12`}>
          At ARC Global Chain, we take pride in offering a diverse range of premium sugar and top-notch sunflower oil
          products
        </Text>
      </Container> */}
      {/* <hr /> */}
      {/* <SimpleGrid cols={0} spacing='xl' mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}> */}
      {/* {features} */}
      <CardsCarousel setSelectedProduct={setSelectedProduct} scrollIntoView={scrollIntoView} />
      <div className='mt-12' ref={targetRef}>
        {filteredSubProducts.length > 0 && (
          <>
            <Title order={3} size='h1' className='text-center mb-6'>
              {filteredSubProducts[0].mainProductName}
            </Title>
            <SubProductCarousel subProducts={filteredSubProducts} />
          </>
        )}
      </div>
      {/* </SimpleGrid> */}
    </div>
  )
}
