import { useForm } from "react-hook-form";
import { FormInput } from "../FormInput";
import { Modal } from "../Modal";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import styles from "./style.module.scss";

export function AddTechModal() {
    const { register, handleSubmit } = useForm();
    const { setIsAddTechOpen, addTech } = useContext(TechContext);

    function submit(formData) {
        addTech(formData);
    }

    return (
        <Modal
            title="Cadastrar Tecnologia"
            setIsOpen={setIsAddTechOpen}
            value={false}
        >
            <form className={styles.addForm} onSubmit={handleSubmit(submit)}>
                <FormInput
                    label="Nome"
                    name="title"
                    type="text"
                    placeholder="Insira o nome da tecnologia"
                    register={register}
                />
                <div>
                    <label className="label" htmlFor="status">
                        Selecionar status
                    </label>
                    <select
                        name="status"
                        defaultValue={"Iniciante"}
                        {...register("status")}
                    >
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </div>
                <button type="submit">Cadastrar tecnologia</button>
            </form>
        </Modal>
    );
}