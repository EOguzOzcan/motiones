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

  return (
    <div className='px-6 py-6'>
      <Title className={`${classes.title} text-2xl md:text-4xl mt-2 mb-6 text-center`} order={2} id='products'>
        Products
      </Title>
      <CardsCarousel setSelectedProduct={setSelectedProduct} scrollIntoView={scrollIntoView} />
      <div className='mt-12' ref={targetRef}>
        {filteredSubProducts.length > 0 && (
          <>
            <Title className={`${classes.title} text-2xl md:text-4xl mt-2 mb-6 text-center`} order={2}>
              {filteredSubProducts[0].mainProductName}
            </Title>
            <SubProductCarousel subProducts={filteredSubProducts} />
          </>
        )}
      </div>
    </div>
  )
}
