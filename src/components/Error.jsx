import iconError from '../assets/icon-error.svg'
const Error = ({children}) => {
  return (
    <>
      <img src={iconError} alt="icono de error" className='block absolute right-[27px] top-[37%]'/>
      <p className="text-[11px] font-medium text-red-1 mt-[6px] text-end">{children}</p>
    </>
  )
}

export default Error