import { useState } from "react";
import "./FavoriteButton.css";

interface Props {
  initialFavorite?: boolean;
}

export const FavoriteButton = ({ initialFavorite = false }: Props) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <button
      className={`favorite-btn ${isFavorite ? "active" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
      }}
      aria-label="Toggle Favorite"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
          2 6 4 4 6.5 4 
          8.04 4 9.54 4.81 10.4 6.09 
          11.26 4.81 12.76 4 14.3 4 
          16.8 4 18.8 6 18.8 8.5 
          18.8 12.28 15.4 15.36 12 18.03z" />
      </svg>
    </button>
  );
};