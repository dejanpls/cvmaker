export default function Input({ htmlFor, name, label, type = "text" }) {
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={htmlFor} name={name} autoComplete={name} />
    </div>
  );
}
