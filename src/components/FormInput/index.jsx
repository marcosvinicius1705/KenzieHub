export function FormInput({ label, type, name, placeholder, register }) {
    return (
        <div>
            <label className="label" htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(`${name}`)}
                required
            />
        </div>
    );
}