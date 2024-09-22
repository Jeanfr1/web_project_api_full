import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const linkRef = useRef("");

  useEffect(() => {
    if (isOpen) {
      linkRef.current.value = "";
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: linkRef.current.value,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Alterar a foto do perfil"
      name="edit-avatar"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Salvar"
    >
      <input
        className="popup__input-text popup__input-text_link"
        id="avatar-link"
        ref={linkRef}
        placeholder="Link da Imagem"
        type="url"
        name="avatar"
        required
      />
      <span className="popup__error" id="avatar-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
