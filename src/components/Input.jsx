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
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="mb-1 text-gray-700 font-medium">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={htmlFor}
        name={name}
        autoComplete={autoComplete}
        className="rounded-md border border-gray-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
      />
    </div>
  );
}
