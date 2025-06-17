import { Link } from 'react-router-dom';
import img from '../../src/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          
        })
        
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-8">
          <img src={img} alt="missing img" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  className="btn bg-[#FF3811] text-white mt-4"
                  type="submit"
                  value="Sign Up"
                />
              </fieldset>
            </form>
            <p className='my-4 text-center'>
              new to car doctors?{" "}
              <Link className="text-[#FF3811]" to="/signin">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
