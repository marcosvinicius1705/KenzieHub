import { useContext, useState } from "react";
import Logo from "../../assets/Logo.png";
import { TechList } from "../../components/TechList";
import { IoMdAdd } from "react-icons/io";
import { UserContext } from "../../providers/UserContext";
import { AddTechModal } from "../../components/AddTechModal";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../../components/EditTechModal";
import styles from "./style.module.scss";

export function MainPage() {
    const { user, userLogout } = useContext(UserContext);
    const { isAddTechOpen, setIsAddTechOpen, isEditTechOpen } =
        useContext(TechContext);

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <img src={Logo} alt="KenzieHub Logo" />
                    <button onClick={() => userLogout()}>Sair</button>
                </div>
            </header>
            <main>
                <section className={styles.userSection}>
                    <div className="container">
                        <h1 className="title one">Olá, {user?.name}</h1>
                        <p className="paragraph">{user?.course_module}</p>
                    </div>
                </section>
                <section className={styles.techSection}>
                    <div className="container">
                        <div>
                            <h2 className="title two">Tecnologias</h2>
                            <button onClick={() => setIsAddTechOpen(true)}>
                                <IoMdAdd size={20} />
                            </button>
                        </div>
                        <TechList />

                        {isAddTechOpen ? <AddTechModal /> : null}
                        {isEditTechOpen ? <EditTechModal /> : null}
                    </div>
                </section>
            </main>
        </>
    );
}