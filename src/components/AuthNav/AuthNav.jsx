import { StyledLink } from '../Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
