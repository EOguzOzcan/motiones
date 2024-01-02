import { Logo } from "@/templates/Logo"
import { createStyles, Header, Container, Group, rem, Text, Image } from "@mantine/core"
// import { useDisclosure } from "@mantine/hooks"
import { Link as ScrollLink } from "react-scroll"

const HEADER_HEIGHT = rem(70)

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 1050px)": {
      justifyContent: "center"
    }
  },

  links: {
    "@media (max-width: 850px)": {
      display: "contents"
    },
    "@media (max-width: 1050px)": {
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
  // const [opened, { toggle }] = useDisclosure(false)
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
      className={`fixed z-[200] px-0 md:px-12 bg-cadetblue `}
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0 }}
      mb={120}
    >
      <Container className={classes.inner} fluid>
        <Group className='flex justify-center items-center cursor-pointer mt-2'>
          {/* <Burger opened={opened} onClick={toggle} className={`${classes.burger} text-anthracite`} size='md' /> */}
          <Logo />
        </Group>
        <Group spacing={24} className={`${classes.links} mt-1 items-baseline`}>
          <Text className='flex items-center mr-3	'>
            Exclusive Partner of&nbsp;&nbsp;
            <Image width={90} src='/Ingeteam.png' />
          </Text>
          <li className={`${classes.link} text-anthracite text-1.5xl cursor-pointer`}>
            <ScrollLink offset={-175} to='about' smooth={true} duration={1000}>
              About
            </ScrollLink>
          </li>

          <li className={`${classes.link} text-anthracite text-1.5xl cursor-pointer `}>
            <ScrollLink offset={-175} to='products' smooth={true} duration={1000}>
              Products
            </ScrollLink>
          </li>

          <li className={`${classes.link} text-anthracite text-1.5xl cursor-pointer`}>
            <ScrollLink offset={-175} to='contact' smooth={true} duration={1000}>
              Contact Us
            </ScrollLink>
          </li>
        </Group>
        {/* {opened && (
          <div className='absolute top-[70px] bg-cadetblue w-[370px] rounded-md'>
            <Group spacing={5} className={`${classes.links} flex justify-center items-center`}>
              <ScrollLink offset={-175} to='about' smooth={true} duration={1000} onClick={toggle}>
                <li
                  className={`${classes.link} text-anthracite text-xl text-center cursor-pointer bg-gray-100 w-[360px] m-1 mt-2 rounded-md`}
                >
                  About
                </li>
              </ScrollLink>

              <ScrollLink offset={-175} to='products' smooth={true} duration={1000} onClick={toggle}>
                <li
                  className={`${classes.link} text-anthracite text-xl text-center cursor-pointer bg-gray-100 w-[360px] m-1 rounded-md`}
                >
                  Products
                </li>
              </ScrollLink>
              <ScrollLink offset={-175} to='contact' smooth={true} duration={1000} onClick={toggle}>
                <li
                  className={`${classes.link} text-anthracite text-xl text-center cursor-pointer bg-gray-100 w-[360px] m-1 rounded-md mb-2`}
                >
                  Contact Us
                </li>
              </ScrollLink>
            </Group>
          </div>
        )} */}
      </Container>
    </Header>
  )
}
