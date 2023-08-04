import { createStyles, Text, Title, Image, rem,Container, } from '@mantine/core';







const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  margin: theme.spacing.xl,
	padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
   

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '50%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));






const About = () => {
	const { classes } = useStyles();


	


  return (
    <div className={classes.wrapper}>
        <Container size="xl" py="xl" className='ml-0' id='about' >
     

      <Title order={2} className={ `${classes.title} text-gray-600 mb-8 text-2xl md:text-5xl `} ta="center"  mt="sm">
        About ARC Global Chain
      </Title>

      <Text c="dimmed" className={`${classes.description} text-lg md:text-xl pl-0 md:pl-12 text-left `} ta="center" mt="md">
			At ARC Global Chain, we are passionate about providing the finest selection of premium-grade sugar products and top-quality sunflower oil. As a trusted supplier, we offer a range of unique product differentiations and business features to meet your specific needs. 
      </Text>
      <Text c="dimmed" className={`${classes.description} text-sm md:text-base pl-0 md:pl-20`} ta="center" mt="md">
			Whether you're a retailer, distributor, or a food manufacturer, Our commitment to excellence sets us apart from the competition, and we are dedicated to providing you with the best products and exceptional service for your business needs.
      </Text>
      <Text c="dimmed" ta="center" mt="md" className=" text-sm md:text-base pl-0 md:pl-32">
			Choose us as your partner, and let's sweeten up your business together
      </Text>

     
    </Container>
      <Image src="/left.png" className={classes.image} />
    </div>
  );
}

export {About}
