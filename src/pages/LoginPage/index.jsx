import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { LoginForm } from "../../components/LoginForm";
import styles from "./style.module.scss";

export function LoginPage() {
    return (
        <section>
            <div className={styles.loginBox}>
                <div>
                    <img src={Logo} alt="KenzieHub Logo" />
                </div>
                <div className="form">
                    <div>
                        <h1 className="title one">Login</h1>
                    </div>
                    <LoginForm />
                    <div>
                        <p className="paragraph">Ainda não possui uma conta?</p>
                        <Link to="/register">Cadastre-se</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}