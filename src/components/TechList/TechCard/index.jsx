import { ImPencil } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export function TechCard({ tech }) {
    const { deleteTech, setIsEditTechOpen, setEditTech } =
        useContext(TechContext);
    return (
        <li className={styles.techCard}>
            <h3 className="title three">{tech.title}</h3>
            <div>
                <p className="paragraph">{tech.status}</p>
                <div className={styles.techBtn}>
                    <button
                        onClick={() => {
                            setEditTech(tech);
                            setIsEditTechOpen(true);
                        }}
                    >
                        <ImPencil size={16} />
                    </button>
                    <button onClick={() => deleteTech(tech.id)}>
                        <FaRegTrashAlt size={16} />
                    </button>
                </div>
            </div>
        </li>
    );
}