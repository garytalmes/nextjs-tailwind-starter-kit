// https://dev.to/ofilipowicz/next-js-per-page-layouts-and-typescript-lh5
import "styles/globals.css"
import { useState, useEffect } from "react"
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app"
import type { NextComponentType } from "next"
import { ReactNode } from "react"
import { AppProvider } from "lib/contexts/AppContext"

const App:NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({ 
  Component, 
  pageProps: { ...pageProps }
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page:ReactNode) => page)

  const [ theme, setTheme ] = useState("")
  const [ appReady, setAppReady ] = useState(false)

  const changeTheme = (newMode:string):void => {
    const oldMode = (newMode === "light") ? "dark" : "light"
    document.body.classList.remove(oldMode)
    document.body.classList.add(newMode)
    setTheme(newMode)
  }

  useEffect(() => {
    const classes = document.body.classList
    if(!classes.length || (classes[0] !== "dark" && classes[0] !== "light")){
      // console.log("screen mode can be set manually")
      if( window && window.matchMedia('(prefers-color-scheme: dark)').matches ){
        changeTheme("dark")
      } else {
        changeTheme("light")
      }
    }
  }, [])

  // prevents font-flickering
  useEffect(() => {
    setTimeout(() => {
      setAppReady(true)
    }, 100);
  }, [])

  return (
    <>
      { appReady && (
        <AppProvider theme={theme} changeTheme={changeTheme}>
          { getLayout(<Component {...pageProps} />) }
        </AppProvider>
      )}
    </>
  )
}

export default App