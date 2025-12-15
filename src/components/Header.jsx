import pizzaBg from "../assets/pizzas.jpg";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${pizzaBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "5rem 1rem",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
