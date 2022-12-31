import Breakpoints from "components/Breakpoints"

interface IProps {
  children: React.ReactNode
}

const MainLayout = ({children}:IProps):JSX.Element => {
  return (
    <div>
      <div>
        <Breakpoints />
      </div>
      { children }
    </div>
  )
}

export default MainLayout