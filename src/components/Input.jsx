export default function Input({ name, label, type = "text" }) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} autoComplete={name} />
    </div>
  );
}
