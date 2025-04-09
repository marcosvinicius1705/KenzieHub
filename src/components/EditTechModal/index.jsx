import { useContext } from "react";
import { Modal } from "../Modal";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { FormInput } from "../FormInput";
import styles from "./style.module.scss";

export function EditTechModal() {
    const { setIsEditTechOpen, editTech, updateTech } = useContext(TechContext);
    const { register, handleSubmit } = useForm({
        values: {
            title: editTech.title,
            status: editTech.status,
        },
    });

    function submit(formData) {
        updateTech(formData);
    }

    return (
        <Modal
            title="Tecnologia Detalhes"
            setIsOpen={setIsEditTechOpen}
            value={false}
        >
            <form className={styles.editForm} onSubmit={handleSubmit(submit)}>
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