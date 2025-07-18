export default function Input({
  value,
  onChange,
  htmlFor,
  name,
  label,
  type = "text",
  autoComplete = "off",
}) {
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={htmlFor}
        name={name}
        autoComplete={autoComplete}
      />
    </div>
  );
}
