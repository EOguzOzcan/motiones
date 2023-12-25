import { Logo } from "@/templates/Logo"
import { createStyles, Header, Container, Group, Burger, rem } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Link as ScrollLink } from "react-scroll"

const HEADER_HEIGHT = rem(70)

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 800px)": {
      justifyContent: "center"
    }
  },

  links: {
    "@media (max-width: 850px)": {
      display: "contents"
    },
    "@media (max-width: 800px)": {
      display: "none"
    }
  },

  burger: {
    [theme.fn.largerThan(800)]: {
      display: "none"
    }
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500
  },

  linkLabel: {
    marginRight: rem(5)
  }
}))

export function HeaderAction() {
  const { classes } = useStyles()
  const [opened, { toggle }] = useDisclosure(false)
  // const [windowScreen, setWindowScreen] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setWindowScreen(window.scrollY < 368)
  //   }

  //   setWindowScreen(window.scrollY < 368)

  //   // Add event listener for scroll on the client side
  //   window.addEventListener("scroll", handleScroll)

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  return (
    <Header
      className={`fixed z-[200] px-0 md:px-12 bg-cadetblue opacity-90`}
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0 }}
      mb={120}
    >
      <Container className={classes.inner} fluid>
        <Group className='flex justify-center items-center cursor-pointer mt-2'>
          <Burger opened={opened} onClick={toggle} className={`${classes.burger}`} color={"white"} size='md' />
          <Logo />
        </Group>
        <Group spacing={24} className={`${classes.links} mt-1`}>
          {/* <a
						href="#about" // Replace "#" with the URL or path to the About section
						className={`${classes.link} text-white text-2xl`}
					> */}
          <li className={`${classes.link} text-anthracite text-1.5xl cursor-pointer`}>
            <ScrollLink offset={-150} to='about' smooth={true} duration={1000}>
              About
            </ScrollLink>
          </li>

          <li className={`${classes.link} text-anthracite text-1.5xl cursor-pointer `}>
            <ScrollLink offset={-150} to='products' smooth={true} duration={1000}>
              Products
            </ScrollLink>
          </li>

          <li className={`${classes.link} text-anthracite text-1.5xl cursor-pointer`}>
            <ScrollLink offset={-150} to='contact' smooth={true} duration={1000}>
              Contact Us
            </ScrollLink>
          </li>
        </Group>
        {opened && (
          <div className='absolute top-[70px] bg-gray-200 w-[370px] rounded-md'>
            <Group spacing={5} className={`${classes.links} flex justify-center items-center`}>
              <li
                className={`${classes.link} text-black  text-xl text-center cursor-pointer bg-gray-100 w-[360px] m-1 mt-2 rounded-md`}
              >
                <ScrollLink offset={-150} to='about' smooth={true} duration={1000}>
                  About
                </ScrollLink>
              </li>
              <li
                className={`${classes.link} text-black  text-xl text-center cursor-pointer bg-gray-100 w-[360px] m-1 rounded-md`}
              >
                <ScrollLink offset={-150} to='products' smooth={true} duration={1000}>
                  Products
                </ScrollLink>
              </li>
              <li
                className={`${classes.link} text-black  text-xl text-center cursor-pointer bg-gray-100 w-[360px] m-1 rounded-md mb-2`}
              >
                <ScrollLink offset={-150} to='contact' smooth={true} duration={1000}>
                  Contact Us
                </ScrollLink>
              </li>
            </Group>
          </div>
        )}
      </Container>
    </Header>
  )
}
