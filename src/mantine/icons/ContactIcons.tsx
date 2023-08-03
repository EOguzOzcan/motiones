import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from "@mantine/core"
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react"

type ContactIconVariant = "white" | "gradient"

interface ContactIconStyles {
  variant: ContactIconVariant
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage: theme.colors.red[0],
    backgroundColor: "transparent"
  },

  title: {
    color: theme.white[5]
  },
  description: {
    color: variant === "gradient" ? theme.black : theme.white
  }
}))

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>
  title: React.ReactNode
  description: React.ReactNode
  variant?: ContactIconVariant
}

function ContactIcon({ icon: Icon, title, description, variant = "gradient", className, ...others }: ContactIconProps) {
  const { classes, cx } = useStyles({ variant })
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius='md' className={classes.icon}>
          <Icon size='1.5rem' />
        </ThemeIcon>
      ) : (
        <Box mr='md'>
          <Icon size='1.5rem' />
        </Box>
      )}

      <div>
        <Text size='xs' className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

interface ContactIconsListProps {
  data?: ContactIconProps[]
  variant?: ContactIconVariant
}

const MOCKDATA = [
  { title: "Email", description: "info@arcglobalchain.com", icon: IconAt },
  { title: "Phone", description: "+90 (212) 660 8457", icon: IconPhone },
  { title: "Address", description: "Başarı Sk. No:3/3, Bakırköy, İstanbul, Turkey", icon: IconMapPin },
  { title: "Working hours", description: "9 a.m. – 6 p.m.", icon: IconSun }
]

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />)
  return <Stack>{items}</Stack>
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: theme.primaryColor
        })}
      >
        <ContactIconsList variant='white' />
      </Box>
    </SimpleGrid>
  )
}
