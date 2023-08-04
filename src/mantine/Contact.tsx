import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem
} from "@mantine/core"
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react"
import { ContactIconsList } from "./icons/ContactIcons"

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: `calc(${theme.spacing.xl} * 2.5)`,
    borderRadius: theme.radius.md,
    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%"
    }
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1]
    }
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5]
    }
  },

  inputLabel: {
    color: theme.black
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6]
  }
}))

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram]

export function ContactMantine() {
  const { classes } = useStyles()

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant='transparent'>
      <Icon size='1.4rem' stroke={1.5} />
    </ActionIcon>
  ))

  return (
    <div className={`${classes.wrapper} mx-12 my-6`} id="contact">
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <div>
          <Title className={classes.title}>Join the Ranks of Our Satisfied Clients</Title>
          <Text className={classes.description} mt='sm' mb={30}>
            For any inquiries or to place an order, contact our friendly customer support team today. We look forward to
            serving you!
          </Text>

          <ContactIconsList variant='white' />

          <Group mt='xl'>{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label='Email'
            placeholder='your@email.com'
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label='Name'
            placeholder='John Doe'
            mt='md'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label='Your message'
            placeholder='I want to order your goods'
            minRows={4}
            mt='md'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position='right' mt='md'>
            <Button className={classes.control} variant='light'>
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  )
}
