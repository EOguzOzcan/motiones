import { Carousel } from "@mantine/carousel"
import { useMediaQuery } from "@mantine/hooks"
import { Paper, Text, Title, Button, useMantineTheme } from "@mantine/core"
import classes from "../css/CardsCarousel.module.css"
import { Dispatch, SetStateAction } from "react"
import products from "../../productInformation/products.json"
import type { SelectedProductType } from "../Products"
interface CardProps {
  image: string
  title: string
  category: string
  id: string
  setSelectedProduct: Dispatch<SetStateAction<SelectedProductType>>
  scrollIntoView: ({ alignment }?: any) => void
}

interface CardsCarouselProps {
  setSelectedProduct: Dispatch<SetStateAction<SelectedProductType>>
  scrollIntoView: ({ alignment }?: any) => void
}

function Card({ image, title, category, id, setSelectedProduct, scrollIntoView }: CardProps) {
  return (
    <Paper shadow='md' p='xl' radius='md' style={{ backgroundImage: `url(${image})` }} className={classes.card}>
      <div>
        <Text className={classes.category} size='xs'>
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        onClick={() => {
          setSelectedProduct([{ id: id, productName: title }])
          scrollIntoView({
            alignment: "center"
          })
        }}
      >
        Read article
      </Button>
    </Paper>
  )
}

export function CardsCarousel({ setSelectedProduct, scrollIntoView }: CardsCarouselProps) {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const slides = products.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} setSelectedProduct={setSelectedProduct} scrollIntoView={scrollIntoView} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      withIndicators
      height={750}
      slideSize={mobile ? "100%" : "50%"}
      slideGap='md'
      align='start'
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  )
}
