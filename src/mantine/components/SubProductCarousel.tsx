import { useMediaQuery } from "@mantine/hooks"
import { Paper, Title, useMantineTheme, TypographyStylesProvider } from "@mantine/core"
import classes from "../css/CardsCarousel.module.css"
import { Transition } from "@mantine/core"
import { useHover } from "@mantine/hooks"
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

interface CardProps {
  image: string
  title: string
  isMobile: boolean
  description: string
}

interface SubProductProps {
  subProducts: {
    id: string
    mainProductId: string
    title: string
    description: string
    image: string
  }[]
}

function Card({ image, title, description, isMobile }: CardProps) {
  const { hovered, ref } = useHover()

  return (
    <Paper
      ref={ref}
      p='xl'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={`${classes.card} product-background`}
    >
      <div className='z-10'>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {isMobile ? (
        <Transition mounted={isMobile} transition='slide-up' duration={400} timingFunction='ease'>
          {(styles) => (
            <Paper
              shadow='lg' // You can adjust the shadow to make it different
              style={{
                ...styles,
                overflow: "auto",
                width: "100%"
              }}
              className='bg-opacityAnthracite'
            >
              <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: description }} className='text-gray-200	' />
              </TypographyStylesProvider>
            </Paper>
          )}
        </Transition>
      ) : (
        <Transition mounted={hovered} transition='slide-up' duration={400} timingFunction='ease'>
          {(styles) => (
            <Paper
              shadow='lg' // You can adjust the shadow to make it different
              style={{
                ...styles,
                overflow: "auto",
                width: "100%"
              }}
              className='bg-opacityAnthracite'
            >
              <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: description }} className='text-gray-200	' />
              </TypographyStylesProvider>
            </Paper>
          )}
        </Transition>
      )}
    </Paper>
  )
}

export function SubProductCarousel({ subProducts }: SubProductProps) {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const [key, setKey] = useState(0)

  const slides = subProducts.map((item) => (
    <SwiperSlide key={item.title}>
      <Card {...item} isMobile={mobile} />
    </SwiperSlide>
  ))

  const slideCount = slides.length

  useEffect(() => {
    // Update the key whenever subProducts change
    setKey((prevKey) => prevKey + 1)
  }, [subProducts])

  if (mobile === undefined) return null

  return (
    <Swiper
      // install Swiper modules
      key={key}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={mobile ? 1 : slideCount > 2 ? 3 : 2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log("swiper", swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slides}
    </Swiper>
  )
}
