import { useDispatch } from 'react-redux';
import { login } from 'redux/users/userApi';
import './styles.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className="form__area">
      <div className="content">
        <div className="text">Login Form</div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="field">
            <input type="text" name="email" required />
            <span className="fas fa-user"></span>
            <label>Email</label>
          </div>
          <div className="field">
            <input type="password" name="password" required />
            <span className="fas fa-lock"></span>
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="/register">Forgot Password?</a>
          </div>
          <button type="submit" className="login__btn">
            Log in
          </button>
          <div className="sign-up">
            Not a member?
            <a href="/register">signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
};
