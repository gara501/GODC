type heroProps = {
  children: React.ReactNode
}

export const Hero = ({children}:heroProps) => {
  return (
    <section className="bg-top-center bg-cover bg-no-repeat bg-hero bg-gray-400 bg-blend-multiply w-full">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        {children}
    </div>
  </section>
  )
}
