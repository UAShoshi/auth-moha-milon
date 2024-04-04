import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

  const { singInUser, singInWithGoogle } = useContext(AuthContext);
  const Navigate = useNavigate();



  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);



    singInUser(email, password)
    .then(result => {
      console.log(result.user);
      e.target.reset();
      Navigate('/');
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const handleGoogleSingIn = () =>{
    singInWithGoogle()
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="p-3">New to Auth Moha Milon? Please<Link to="/register">
        <button className="btn btn-link">Register</button></Link></p>
        <p><button onClick={handleGoogleSingIn} className="btn btn-ghost">Google</button></p>
      </div>
    </div>
  </div>
  );
};

export default Login;