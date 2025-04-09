import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import styles from "./style.module.scss";
import { useState } from "react";

export function FormPassword({ label, name, placeholder, register }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label className="label" htmlFor={name}>
                {label}
            </label>
            <div className={styles.inputBox}>
                <input
                    type={showPassword ? "text" : "password"}
                    name={name}
                    placeholder={placeholder}
                    {...register(`${name}`)}
                    required
                />
               
            </div>
        </div>
    );
}