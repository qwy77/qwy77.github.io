import React from 'react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { AppProps } from 'next/app'
import Menu from "@components/Menu"
import CommandMenu from "@components/CommandMenu"
import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { styled } from 'stitches.config'
import { globalStyles } from '@styles/global'
import '@styles/reset.css'
import { CMDK } from '@styles/CommandMenu'

const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#052926',
    },
  }
})

export const Wrapper = styled('div', {
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  display: 'grid',
  alignContent: 'space-between',
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  CMDK()

  const [open, setOpen] = React.useState(false)

  return (
    <PlausibleProvider domain="ding.one">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
      >
        <NextUIProvider theme={myDarkTheme}>
          <DefaultSeo {...SEO} />
          <Menu />
          <Component {...pageProps} />
          <CommandMenu open={open} setOpen={setOpen} />
        </NextUIProvider>
      </ThemeProvider>
    </PlausibleProvider>
  )
}
