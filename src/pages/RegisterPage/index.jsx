import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { RegisterForm } from "../../components/RegisterForm";
import styles from "./style.module.scss";

export function RegisterPage() {
    return (
        <section>
            <div className={styles.registerBox}>
                <div>
                    <img src={Logo} alt="KenzieHub Logo" />
                    <Link to="/">Voltar</Link>
                </div>
                <div className="form">
                    <div>
                        <h1 className="title one">Crie sua conta</h1>
                        <p className={`${styles.p} paragraph`}>Rapido e grátis, vamos nessa</p>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </section>
    );
}
