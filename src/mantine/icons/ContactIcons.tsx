import { createStyles, ThemeIcon, Text, Box, Stack } from "@mantine/core"
import { IconPhone, IconMapPin, IconAt } from "@tabler/icons-react"

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
  { title: "Email", description: "info@motion-es.com", icon: IconAt },
  { title: "Phone", description: "+90 (549) 786 2720", icon: IconPhone },
  { title: "Address", description: "Cami mahallesi No:2  A/18 Tuzla / İstanbul Türkiye", icon: IconMapPin }
]

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />)
  return <Stack>{items}</Stack>
}
