import { useEffect, useRef } from "react";
import { FormValidator, formConfig } from "../utils/formValidator";
import closeIcon from "../images/close-icon.png";

function PopupWithForm({
  title,
  name,
  onSubmit,
  children,
  isOpen,
  onClose,
  buttonText,
}) {
  const formRef = useRef();
  const overlayRef = useRef();

  const close = () => {
    onClose();
    formRef.current.reset();
    resetValidation();
  };

  const handleCloseClick = () => {
    close();
  };

  const handleCloseClickOverlay = (e) => {
    if (e.target === overlayRef.current) {
      close();
    }
  };

  const enableValidation = () => {
    new FormValidator({
      formElement: formRef.current,
      config: formConfig,
    }).enableValidation();
  };

  const resetValidation = () => {
    new FormValidator({
      formElement: formRef.current,
      config: formConfig,
    }).resetValidation();
  };

  useEffect(() => {
    if (isOpen) {
      enableValidation();
    }
  }, [isOpen]);

  return (
    <section
      className={`popup ${isOpen ? "popup_opened" : ""} popup_${name}`}
      ref={overlayRef}
      onClick={handleCloseClickOverlay}
    >
      <div className="popup__container" id="cards-form">
        <button
          type="button"
          className="popup__close-button"
          onClick={handleCloseClick}
        >
          <img
            className="popup__close-button-img"
            src={closeIcon}
            alt="Ícone para fechar o popup"
          />
        </button>
        <h2 className="popup__title">{title}</h2>
        <form
          name={name}
          className={`popup__form popup__form_${name}`}
          ref={formRef}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="popup__input-submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
