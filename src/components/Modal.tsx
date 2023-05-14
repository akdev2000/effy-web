interface Props {
  modalId: string;
  title: string;
  children: React.ReactElement;
}

export default function Modal({ children, title, modalId }: Props) {
  return (
    <div id={`${modalId}_root`}>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-lg">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
