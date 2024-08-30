import PopupWithForm from "./PopupWithForm";

export default function ConfirmationPopup({
  isOpen,
  onClose,
  onConfirmationSubmit,
}) {
  const handleConfirmationSubmit = (e) => {
    e.preventDefault();
    onConfirmationSubmit();
  };

  return (
    <PopupWithForm
      title="Tem certeza?"
      name="confirmation"
      buttonText="Sim"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleConfirmationSubmit}
    />
  );
}
