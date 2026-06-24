export const LoginForm = () => {
  return (
    <form className='flex flex-col gap-3.5' >
      <input className='border rounded-[5px] border-gray-200 w-full text-black p-3' type="email" placeholder='E-mail' />
      <button className='bg-[#212a2f] w-full p-3 text-white rounded-[5px] cursor-pointer'>Entrar</button>
    </form>
  )
}
