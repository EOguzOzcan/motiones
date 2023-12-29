import { Dispatch, SetStateAction } from "react"
import { useMediaQuery } from "@mantine/hooks"
import { Paper, Text, Title, Button, useMantineTheme } from "@mantine/core"
import { IconArrowDown } from "@tabler/icons-react"
import classes from "../css/CardsCarousel.module.css"
import products from "../../productInformation/products.json"
import type { SelectedProductType } from "../Products"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

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

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={mobile ? 1 : 2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log("swiper", swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <Card {...item} setSelectedProduct={setSelectedProduct} scrollIntoView={scrollIntoView} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
