import { useForm } from "react-hook-form";
import { FormInput } from "../FormInput";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";
import { toast } from "react-toastify";
import { FormPassword } from "../FormPassword";

export function RegisterForm() {
    const { register, handleSubmit } = useForm();
    const { userRegister } = useContext(UserContext);

    function submit(formData) {
        if (formData.password == formData.password2) {
            delete formData["password2"];
            userRegister(formData);
        } else {
            toast.error("As senhas não correspondem!");
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FormInput
                label="Nome"
                type="text"
                name="name"
                placeholder="Digite aqui seu nome"
                register={register}
            />
            <FormInput
                label="E-mail"
                type="email"
                name="email"
                placeholder="Digite aqui seu email"
                register={register}
            />
            <FormPassword
                label="Senha"
                name="password"
                placeholder="Digite aqui sua senha"
                register={register}
            />
            <FormPassword
                label="Confirmar Senha"
                name="password2"
                placeholder="Digite novamente sua senha"
                register={register}
            />
            <FormInput
                label="Bio"
                type="text"
                name="bio"
                placeholder="Fale sobre você"
                register={register}
            />
            <FormInput
                label="Contato"
                type="text"
                name="contact"
                placeholder="Opção de contato"
                register={register}
            />
            <div>
                <label className="label" htmlFor="course_module">
                    {" "}
                    Selecionar Módulo
                </label>
                <select
                    name="course_module"
                    defaultValue={"Primeiro módulo (Introdução ao Frontend)"}
                    {...register("course_module")}
                >
                    <option value="Primeiro módulo (Introdução ao Frontend)">
                        Primeiro módulo (Introdução ao Frontend)
                    </option>
                    <option value="Segundo módulo (Frontend Avançado)">
                        Segundo módulo (Frontend Avançado)
                    </option>
                    <option value="Terceiro módulo (Introdução ao Backend)">
                        Terceiro módulo (Introdução ao Backend)
                    </option>
                    <option value="Quarto módulo (Backend Avançado)">
                        Quarto módulo (Backend Avançado)
                    </option>
                </select>
            </div>

            <button className={styles.registerBtn} type="submit">
                Cadastrar
            </button>
        </form>
    );
}