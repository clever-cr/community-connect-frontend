import { useState } from 'react';
import Input from '../ui/Input';
import { useDispatch } from 'react-redux';
import { register } from '../services/authentication/action';
import Button from '../ui/Button';
import { Link,useNavigate  } from 'react-router-dom';


const SignUpPage = () => {
const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formDatas] = useState<any>();
  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    const formData = new FormData(event?.target);
    const formValues = Object.fromEntries(formData.entries());
    await register({
      ...formValues,
      location: {
        address: formValues.address,
        city: formValues.city,
        zip: formValues.zip,
        country: formValues.country,
      },
    }
    
  )(dispatch);
navigate("/login")
  };
  console.log(formDatas, 'dtat fromm');
  return (
    <>

      <div className="flex flex-col items-center pt-28">
        <h1 className="text-bold text-3xl leading-10 text-dark pb-8"> Join Community <span className='text-[#007DFD]'>Connect</span></h1>
        <form className="flex flex-col gap-4 "onSubmit={handleSubmit}>
          <div className="flex items-center gap-5">
            <Input name="email" placeholder="email" />
            <Input name="name" placeholder="name" />
          </div>

          <div className="flex items-center gap-5">
            <Input name="password" placeholder="password" type='password' />

            <Input name="role" placeholder="role" />
          </div>

          <div className="flex items-center gap-5">
            <Input name="address" placeholder="address" />

            <Input name="city" placeholder="city" />
          </div>

          <div className="flex items-center gap-5">
            <Input name="zip" placeholder="zip" />

            <Input name="country" placeholder="country" />
          </div>

          <Button
            text="sign up"
            type="submit"
            className="bg-[#007DFD] text-white flex justify-center rounded-2xl"
          />
    
        </form>
        <p className="pt-5">Arleady have an account <Link to="/login" className="text-[#007DFD]"> Sign in</Link></p>
      </div>
    </>
  );
};
export default SignUpPage;
