import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card({ cardData, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const { link, name, owner, likes } = cardData;

  const isOwn = owner._id === currentUser._id;

  const cardDeleteButtonClassName = `elements__button-trash ${
    isOwn ? "elements__button-trash_visible" : "elements__button-trash_hidden"
  }`;

  const isLiked = likes.some((like) => like === currentUser._id);

  const cardLikeButtonClassName = `elements__like-button ${
    isLiked ? "active" : ""
  }`;

  const handleCardClick = () => {
    onCardClick(cardData);
  };

  const handleLikeClick = () => {
    onCardLike(cardData);
  };

  const handleDeleteClick = () => {
    onCardDelete(cardData);
  };

  return (
    <div className="elements__card">
      {isOwn && (
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        ></button>
      )}
      <img
        className="elements__image"
        src={link}
        alt={name}
        onClick={handleCardClick}
      />
      <div className="elements__group">
        <h2 className="elements__title">{name}</h2>
        <button
          className={cardLikeButtonClassName}
          name="like"
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
      <span className="elements__like-count">{likes.length}</span>
    </div>
  );
}

export default Card;
