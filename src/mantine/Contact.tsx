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
import { IconBrandTwitter, IconBrandYoutube, IconBrandLinkedin } from "@tabler/icons-react"
import { ContactIconsList } from "./icons/ContactIcons"
import { useForm } from "@mantine/form"
import emailjs from "@emailjs/browser"

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
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
    maxWidth: rem(500),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%"
    }
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column"
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

const social = [
  { Icon: IconBrandLinkedin, link: "https://www.linkedin.com/company/motion-es/about/" },
  { Icon: IconBrandTwitter, link: "" },
  { Icon: IconBrandYoutube, link: "" }
]
type ContactData = {
  from: string
  name: string
  message: string
  [key: string]: string // Index signature to indicate that all keys are strings
}
export function ContactMantine() {
  const { classes } = useStyles()

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant='transparent'
      onClick={() => window.open(Icon.link, "_blank")}
      disabled={!Icon.link}
    >
      <Icon.Icon size='1.4rem' stroke={1.5} />
    </ActionIcon>
  ))
  const form = useForm({
    initialValues: {
      from: "",
      name: "",
      message: ""
    },
    validate: {
      from: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email")
    }
  })

  const handleSendEmail = async (data: ContactData) => {
    const form = document.createElement("form")
    form.style.display = "none"

    // Append each field to the form
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = data[key]
        form.appendChild(input)
      }
    }

    document.body.appendChild(form)
    debugger
    emailjs.sendForm("service_58ouo3b", "template_r27zrgw", form, "QrPuAhJdd2d4wc7T5").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className={`${classes.wrapper} mx-6 my-6 bg-anthracite`} id='contact'>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        <div>
          <Title className={`${classes.title} text-3xl`}>Let Us Know How We Can Help Your Business Succeed</Title>
          <Text className={`${classes.description} text-lg`} mt='lg' mb={30}>
            For any inquiries or to place an order, contact our friendly customer support team today. We look forward to
            serving you.
          </Text>
          <ContactIconsList variant='white' />
          <Group mt='xl'>{icons}</Group>
        </div>
        <div className={classes.form}>
          <form onSubmit={form.onSubmit((values) => handleSendEmail(values))}>
            <TextInput
              label='Email'
              placeholder='your@email.com'
              required
              {...form.getInputProps("from")}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label='Name'
              mt='md'
              {...form.getInputProps("name")}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label='Your message'
              minRows={4}
              mt='md'
              {...form.getInputProps("message")}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Group position='right' className={`mt-5`}>
              <Button type='submit' className='bg-anthracite hover:bg-gray-700 transition-all'>
                Send message
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  )
}
