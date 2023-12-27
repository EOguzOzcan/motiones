import { Carousel } from "@mantine/carousel"
import { useMediaQuery } from "@mantine/hooks"
import { Paper, Text, Title, useMantineTheme, TypographyStylesProvider } from "@mantine/core"
import classes from "../css/CardsCarousel.module.css"
import { Transition } from "@mantine/core"
import { useHover } from "@mantine/hooks"

interface CardProps {
  image: string
  title: string
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

function Card({ image, title, description }: CardProps) {
  const { hovered, ref } = useHover()

  return (
    <Paper
      ref={ref}
      shadow='md'
      p='xl'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={`${classes.card} product-background`}
    >
      <div className='z-10'>
        <Text className={classes.category} size='xs'></Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Transition mounted={hovered} transition='slide-up' duration={400} timingFunction='ease'>
        {(styles) => (
          <Paper
            shadow='lg' // You can adjust the shadow to make it different
            p='md'
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
    </Paper>
  )
}

export function SubProductCarousel({ subProducts }: SubProductProps) {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

  const slides = subProducts.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ))
  const slideCount = slides.length
  return (
    <Carousel
      containScroll='trimSnaps'
      withIndicators
      height={750}
      slideSize={mobile ? "100%" : slideCount > 2 ? "33%" : "50%"}
      slideGap='md'
      align='start'
      // align='start'
      slidesToScroll={mobile ? 1 : slideCount > 2 ? 3 : 2}
    >
      {slides}
    </Carousel>
  )
}
