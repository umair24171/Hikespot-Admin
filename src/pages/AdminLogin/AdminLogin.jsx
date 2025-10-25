import React, { useContext, useState } from 'react';
import './AdminLogin.css';
import login from '../../assets/login.png';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import myContext from './../../context/myContext';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const context = useContext(myContext);
  const { getAdmin } = context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      const adminData = await getAdmin(email, password); // Get full admin data
      if (adminData) {
        const token = Math.random().toString(36).substr(2); // Simple token generation
        const adminDetails = {
          id: adminData.id,
          email: adminData.email,
          token: token
        };

        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminDetails', JSON.stringify(adminDetails)); // Store the whole admin data in local storage
        toast.success("Admin Login successfully");
        navigate("/admin/dashboard");
      } else {
        setError('Invalid email or password');
      }
    }
  };


  const isFormFilled = email && password;

  return (
    <div className="login-container">
      <div className="login-content">
        {/* <img src={login} alt="Login" className="login-image" /> */}
        <h1 className='login-heading'>Log in Your Account</h1>
        <p className='login-para'>Please enter your details that are shown below.</p>

        {error && <p className="login-error">{error}</p>}

        <div className="input-group-login">
          <MdEmail className="input-icon" />
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group-login">
          <RiLockPasswordFill className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            id="password"
            placeholder='Your Password'
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPassword(!showPassword)} className="password-toggle-icon">
            {showPassword ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
          </span>
        </div>

        <button
          className={`login-button ${isFormFilled ? 'active' : ''}`}
          onClick={handleLogin}
          disabled={!isFormFilled}
        >
          Login <IoIosArrowForward className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
