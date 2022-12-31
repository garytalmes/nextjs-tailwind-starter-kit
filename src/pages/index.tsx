import MainLayout from "components/MainLayout"

const Homepage = () => {
  return (
    <div className="px-10 py-3">
      <p className="text-xl">Hello, World</p>
    </div>
  )
}

Homepage.getLayout = function getLayout(page:any) {
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}

export async function getStaticProps(ctx:any) {
  
  return { 
    props: { 

    }
  }
}


export default Homepage