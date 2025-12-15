import { formatCLP } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <span className="navbar-brand fs-4">🍕 Pizzería Mamma Mia!</span>

      <div className="d-flex gap-2 ms-auto">
        <button className="btn btn-outline-light">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light">🔒 Profile</button>
            <button className="btn btn-outline-light">🔓 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🛡️ Register</button>
          </>
        )}

        <button className="btn btn-success">
          🛒 Total: ${formatCLP(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
