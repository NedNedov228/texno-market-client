import React, { useState } from 'react';
import './AuthModal.scss';
import MyBtn from '../MyBtn/MyBtn';
import { login } from '../../../api/Service';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const onChange = (event : Event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>x</button>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={() => login(values.email,values.password)}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={onChange} type="text" id="username" name="username" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="password" id="password" name="password" required />
          </div>
          <MyBtn type='submit'>{isLogin ? 'Login' : 'Register'}</MyBtn>
        </form>
        <button className="toggle-button" onClick={toggleForm}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
