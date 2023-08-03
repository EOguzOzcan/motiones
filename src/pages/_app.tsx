import { MantineProvider } from "@mantine/core"
import "../styles/global.css"

import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Component {...pageProps} />
  </MantineProvider>
)

export default MyApp
