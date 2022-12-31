
const Breakpoints = () => {
  return (
    <>
      { process.env.NODE_ENV === "development" && (
        <div className="fixed top-0 left-0 z-50 text-gray-300 p-3">
          <span className="text-xs block sm:hidden">xs</span>
          <span className="text-xs hidden sm:block md:hidden">sm</span>
          <span className="text-xs hidden md:block lg:hidden">md</span>
          <span className="text-xs hidden lg:block xl:hidden">lg</span>
          <span className="text-xs hidden xl:block 2xl:hidden">xl</span>
          <span className="text-xs hidden 2xl:block 3xl:hidden">2xl</span>
          <span className="text-xs hidden 3xl:block 4xl:hidden">3xl</span>
          <span className="text-xs hidden 4xl:block">2xl</span>

        </div>
      )}
    </>
  )
}

export default Breakpoints