import { useContext } from "react";
import { TechCard } from "./TechCard";
import { UserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";

export function TechList() {
    const { userTechs } = useContext(UserContext);
    return (
        <ul className={styles.techList}>
            {userTechs.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
            ))}
        </ul>
    );
}