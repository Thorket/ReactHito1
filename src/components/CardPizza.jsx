const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={img}
        alt={`Pizza ${name}`}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">🍕 Pizza {name}</h5>

        <hr />

        <p className="fw-bold mb-1">Ingredientes:</p>
        <p className="mb-2">{ingredients.join(", ")}</p>

        <hr />

        <p className="fw-bold mb-3">Precio: ${price.toLocaleString("es-CL")}</p>

        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-outline-secondary">Ver Más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
