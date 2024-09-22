import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Card from "./Card.js";
import penIcon from "../images/caneta.png";
import plusIcon from "../images/mais.png";

function Main({
  cards,
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return <h1>Carregando...</h1>;
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button
            type="button"
            className="profile__avatar-edit"
            onClick={onEditAvatarClick}
          >
            <img
              className="profile__image"
              src={currentUser.avatar}
              alt="Foto do usuário"
            />
          </button>
          <div className="profile__info-container">
            <div className="profile__title-container">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__title-button"
                type="button"
                onClick={onEditProfileClick}
              >
                <img
                  src={penIcon}
                  alt="Botão com uma caneta"
                  className="profile__info-image"
                />
              </button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="button profile__addbutton"
          type="button"
          onClick={onAddPlaceClick}
        >
          <img
            src={plusIcon}
            alt="Botão com o sinal de mais"
            className="profile__addbutton-img"
          />
        </button>
      </section>

      <div className="elements">
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card) => (
            <Card
              cardData={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
            />
          ))
        ) : (
          <p>Nenhum card encontrado.</p>
        )}
      </div>
    </main>
  );
}

export default Main;
