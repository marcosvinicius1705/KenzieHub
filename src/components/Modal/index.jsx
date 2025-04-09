import { IoClose } from "react-icons/io5";
import { useOutclickModal } from "../../hooks/useOutclickModal";
import { useKeydownModal } from "../../hooks/useKeydownModal";
import styles from "./style.module.scss";

export function Modal({ children, title, setIsOpen, value }) {
    let modalRef = useOutclickModal(() => {
        setIsOpen(false);
    });

    let buttonRef = useKeydownModal("Escape", (element) => {
        setIsOpen(false);
    });

    return (
        <div role="dialog" className={styles.modalOverlay}>
            <div ref={modalRef} className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h3 className="title three">{title}</h3>
                    <button ref={buttonRef} onClick={() => setIsOpen(value)}>
                        <IoClose size={20} />
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}