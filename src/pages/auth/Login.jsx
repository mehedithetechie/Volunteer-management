import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import NavBar from '../../components/NavBar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import loginLottie from '../../assets/login-lottie.json'
import Lottie from 'lottie-react';



const Login = () => {

  const { signInUser, signINWithGoogle } = useAuth();
  const [password, showPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = e => {
    e.preventDefault();

     const form = e.target
    const email = form.email.value
    const password = form.password.value


    signInUser(email, password)
      .then(res => {
        toast.success('SuccessFully Login')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)

      })
      .catch(err => {
        toast.error("Email Or Pin Is Incorrect")

      });
  };


  const handleLoginWithGoogle = () => {
    signINWithGoogle()
      .then(res => {
        toast.success('SuccessFully Login')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)
        
      })
      .catch(err => {
        toast.error('Please SignUP With Valid Information');
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <div className=" flex justify-center items-center min-h-screen mt-20">
        
        <div>
          <Toaster />
        </div>
        <div className="card  p-10 rounded-none">
         
          <div className='flex  flex-col xl:flex-row xl:my-44  justify-center xl:gap-20'>
            <div>
              
              <h2 className="text-xl font-bold text-center mb-6 text-blue-500">Login</h2>
              <form onSubmit={handleLogin} className="md:w-96 w-[350px] rounded-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-blue-400">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input bg-[#F3F3F3] "
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text font-semibold text-blue-400">Password</span>
                  </label>
                  <input
                    type={password ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    className="input bg-[#F3F3F3] "
                    required
                  />
                  <div
                    onClick={() => showPassword(!password)}
                    className="absolute right-4 top-[51px] cursor-pointer"
                  >
                    {password ? <FaEyeSlash /> : <FaEye />}
                  </div>
      
                  <label className="label my-2">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
      
                <div className="form-control ">
                  <button className="btn bg-blue-500  text-white">Login</button>
                </div>
              </form>

           
              <div className="my-5 flex justify-center">
                <button
                  onClick={handleLoginWithGoogle}
                  className="py-4 lg:px-20 px-8 border-2  flex items-center justify-center rounded-lg gap-2"
                >
                  <FcGoogle className="md:text-2xl text-base" /> LogIn With Google
                </button>
              </div>
              <p className="text-center">
                Dont’t Have An Account ?{' '}
                <Link className="text-blue-500  font-bold" to="/volunteer/register">
                  Register
                </Link>
              </p>

            </div>
            
            <div>
              <Lottie className='lg:h-96 h-80' animationData={loginLottie}></Lottie>
            </div>
          </div>
          
        </div>
      </div>
   </div>
  
  );
};

export default Login;