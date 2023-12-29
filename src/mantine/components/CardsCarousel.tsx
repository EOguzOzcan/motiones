import { Dispatch, SetStateAction } from "react"
import { Carousel } from "@mantine/carousel"
import { useMediaQuery } from "@mantine/hooks"
import { Paper, Text, Title, Button, useMantineTheme } from "@mantine/core"
import { IconArrowDown, IconArrowRight, IconArrowLeft } from "@tabler/icons-react"
import classes from "../css/CardsCarousel.module.css"
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
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={`${classes.card} product-background`}
    >
      <div className='z-10'>
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
        className='bg-anthracite hover:bg-gray-700 transition-all pr-1 ml-2 mb-1'
      >
        Read More <IconArrowDown className='ml-2' />
      </Button>
    </Paper>
  )
}

export function CardsCarousel({ setSelectedProduct, scrollIntoView }: CardsCarouselProps) {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

  if (mobile === undefined || products === undefined) return null

  // const slides = products.map((item) => (
  //   <Carousel.Slide key={item.id}>
  //     <Card {...item} setSelectedProduct={setSelectedProduct} scrollIntoView={scrollIntoView} />
  //   </Carousel.Slide>
  // ))
  return (
    <>
      <Carousel
        classNames={classes}
        height={750}
        slideSize={mobile ? "100%" : "50%"}
        slideGap='xs'
        align='start'
        nextControlIcon={<IconArrowRight />}
        previousControlIcon={<IconArrowLeft />}
        slidesToScroll={1}
      >
        {products.map((item) => (
          <Carousel.Slide key={item.id}>
            <Card {...item} setSelectedProduct={setSelectedProduct} scrollIntoView={scrollIntoView} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  )
}
