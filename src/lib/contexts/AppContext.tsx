import React, { createContext, useContext, ReactNode } from "react"

export interface IAppContext {
  theme:string
  changeTheme:any
  children?:React.ReactNode
}

export const AppContext = createContext<IAppContext>({
  theme: "",
  changeTheme: () => null
})

export const useAppContext = () => useContext(AppContext)
export const AppProvider = ({ theme, changeTheme, children }:IAppContext& { children: ReactNode }): JSX.Element => {

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}