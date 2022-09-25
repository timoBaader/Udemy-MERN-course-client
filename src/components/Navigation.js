import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/landing">Home</Link>
      </nav>
    </div>
  );
}

export default Navigation;
