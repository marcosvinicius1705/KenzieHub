import { useForm } from "react-hook-form";
import { FormInput } from "../FormInput";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";
import { FormPassword } from "../FormPassword";

export function LoginForm() {
    const { register, handleSubmit } = useForm();
    const { userLogin } = useContext(UserContext);

    function submit(formData) {
        userLogin(formData);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FormInput
                label="E-mail"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                register={register}
            />
            <FormPassword
                label="Senha"
                name="password"
                placeholder="Digite sua senha"
                register={register}
            />
            <button className={styles.loginBtn} type="submit">Entrar</button>
        </form>
    );
}