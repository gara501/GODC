type heroProps = {
  children: React.ReactNode
}

export const Hero = ({children}:heroProps) => {
  return (
    <div className="w-screen h-[calc(100vh/2)] bg-hero bg-cover bg-center">
      {children}
    </div>
  )
}
