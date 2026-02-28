import { useNavigate } from "react-router-dom";
import "./card.css";

function Card({ title, description }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>

      <button
        className="button"
        onClick={() => navigate("/presentacion")}
      >
        Ver más
      </button>
    </div>
  );
}

export default Card;