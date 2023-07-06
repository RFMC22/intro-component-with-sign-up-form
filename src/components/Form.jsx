import Promo from './Promo'
import Error from './Error';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const formSubmit =  data => reset();
  return (
    <div className='lg:mt-0 mt-[64px]'>
      <Promo textBold='Try it free 7 days' text='then $20/mo. thereafter'/>
      <form 
        onSubmit={(handleSubmit(formSubmit))}
        className='form'
      >
        <div className='relative'>
          <input
            className={` input-text ${errors.firstName ? 'border-red-1' :'focus:border-blue-1'}`} 
            type="text" 
            placeholder='First Name'
            {...register("firstName", { required: true, maxLength: 80 })}
            />
            {errors.firstName && <Error>First Name cannot be empty</Error>}
        </div>
        <div className='relative'>
          <input
            className={` input-text ${errors.lastName ? 'border-red-1' :'focus:border-blue-1'}`} 
            type="text" 
            placeholder='Last Name'
            {...register('lastName', {required: true})}
          />
          {errors.lastName && <Error>Last Name cannot be empty</Error>}
        </div>
        <div className='relative'>
          <input
            className={` input-text ${errors.emailAddress ? 'border-red-1' :'focus:border-blue-1'}`} 
            type="email" 
            placeholder='Email Address'
            {...register('emailAddress', {required: true, pattern: /^\S+@\S+$/i})}
          />
          {errors.emailAddress && <Error>Looks like this is not an email</Error>}
        </div>
        <div className='relative'>
          <input
            className={` input-text ${errors.password ? 'border-red-1' :'focus:border-blue-1'}`} 
            type="password" 
            placeholder='Password'
            {...register('password', {required: true})}
          />
          {errors.password && <Error>Password cannot be empty</Error>}
        </div>
        <input 
          className='btn-primary' type="submit" value="claim your free trial" />
        <p className='mt-[8px] text-[11px] text-gray-blue text-center px-4'>By clicking the button, you are agreeing to our <span className='text-red-1 font-semibold'>Terms and Services</span></p>
      </form>
    </div>
  )
}

export default Form