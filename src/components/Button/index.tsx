interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export const Button = ({ children, variant = 'primary', size = 'md', onClick, className }: ButtonProps) => {

  const buttonStyles = {
    base: 'flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full py-2.5',
    variant: {
      primary: 'bg-white text-primary hover:bg-gray-100',
      secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-primary',
    },
    size: {
      sm: 'px-5',
      md: 'px-8',
      lg: 'px-10'
    },
  }

  const combinedClassName = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]} ${className ?? ''}`

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  )
}
