// import Link from 'next/link'

import { Background } from "../background/Background"

import { useMediaQuery } from "@mantine/hooks"
import { createStyles, Title, Text, rem, Image } from "@mantine/core"
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundImage:
    //   'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/sunflower.jpg)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column"
    }
  },

  image: {
    maxWidth: "100%"
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0
    }
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(800),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15
    }
  },

  description: {
    color: theme.white,
    fontWeight: 600,
    maxWidth: rem(600),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%"
    }
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%"
    }
  }
}))
// const VideoBackground = () => {

// 	return (
// 		<div className='youtube-container'>

// 		<iframe
// 		className='opacity-90'
// 			src="https://www.youtube-nocookie.com/embed/QKduOuB4Yyc?controls=0&autoplay=1&mute=1&loop=1&showInfo=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=QKduOuB4Yyc"
// 			title="YouTube video player"
// 			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 			allowFullScreen
// 			>

// 			</iframe>

// 			</div>
// 	)
// }

const Hero = () => {
  const { classes } = useStyles()
  const matches = useMediaQuery("(max-width: 1200px)")
  return (
    <Background color='bg-gray-100 '>
      <div id='home'>
        <div className={`${classes.inner} ${matches ? "mobile-section" : "section"}`}>
          <div className='black-overlay'></div>
          {/* <video autoPlay loop muted> */}
          <Image src='/testt.jpg' className={classes.image} />

          {/* <source src='/testt.jpg' type='video/mp4' /> */}
          {/* </video> */}
          <div className={`${classes.content} content flex flex-col items-center justify-center lg:ml-32`}>
            <Title className={`${classes.title} text-lg md:text-4xl mt-6 `}>Engineering and technical solutions</Title>
            <Text className={`${classes.description} md:text-2xl`} mt={30}>
              Marine and Port & Industry & E-Mobility & Service
            </Text>
          </div>
        </div>
      </div>
      {/* {isScreenMd && (
					<NavSection yPadding="py-6" >
					<NavbarTwoColumns logo={<Logo  />}>

						<li  className="w-24 h-10  flex items-center justify-center rounded-md text-white text-2xl    hover:text-white transition-all ease-in-out cursor-pointer">
						Link offset={-150} to="about" smooth={true} duration={1000}>
							About 
						</ScrollLink>
						</li>
						<li className="w-32 h-10  flex items-center justify-center rounded-md  text-white   text-2xl  hover:text-white transition-all ease-in-out cursor-pointer">
						<ScrollLink offset={-150} to="products" smooth={true} duration={1000}>
							Products
							</ScrollLink>
						</li>
						<li className="w-32 h-10  flex items-center justify-center rounded-md  text-white  text-2xl   hover:text-white transition-all ease-in-out cursor-pointer">
						<ScrollLink offset={-150} to="contact" smooth={true} duration={1000}>
							 Contact Us
							</ScrollLink>
						</li>
						
					</NavbarTwoColumns>
				</NavSection>
				)} */}
    </Background>
  )
}

export { Hero }
