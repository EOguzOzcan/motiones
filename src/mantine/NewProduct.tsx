import React from "react"
import { Container, SimpleGrid, Title, Image, Text, createStyles, rem } from "@mantine/core"
import { aboutContent } from "@/utils/aboutContent"
import { useMediaQuery } from "@mantine/hooks"

const imageContent = (
  <Image
    height={350}
    className='mx-4 mt-0 md:mt-8 '
    style={{ width: "auto" }}
    radius='lg'
    src='/container2.jpg'
    alt='Random image'
  />
)

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2)`
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  },
  featureTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  }
}))

const NewProduct = () => {
  const matches = useMediaQuery("(max-width: 1200px)")
  const { classes } = useStyles()

  const mockdata = () => {
    return (
      <div className='text-gray-600' id='about'>
        <Title className={`${classes.title} text-2xl md:text-4xl`} order={2}>
          {aboutContent.title}
        </Title>
        <Text className={`${classes.featureTitle} mt-3 text-xl`}>
          {aboutContent.paragraphs.map((paragraph, index) => (
            <div key={index} className='mr-5 mb-7'>
              <Text c='dimmed' className={`${classes.featureTitle}`}>
                {paragraph}
              </Text>
            </div>
          ))}
        </Text>
      </div>
    )
  }

  return (
    <Container className={`${classes.wrapper} mt-16 `} fluid={true}>
      <SimpleGrid spacing={0} cols={matches ? 1 : 2}>
        <div>{mockdata()}</div>
        <div>{imageContent}</div>
      </SimpleGrid>
    </Container>
  )
}

export default NewProduct
