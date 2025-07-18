import { useState } from "react";
import PersonalForm from "./components/forms/PersonalForm";

function App() {
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    tel: "",
    address: "",
    zip: "",
    city: "",
    country: "",
  });

  const handlePersonalInput = (e) => {
    const { name, value } = e.target; // get name and value from e.target

    setPersonal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <PersonalForm personal={personal} handleChange={handlePersonalInput} />
      {console.log(
        personal.firstName,
        personal.lastName,
        personal.position,
        personal.email,
        personal.tel,
        personal.address,
        personal.zip,
        personal.city,
        personal.country
      )}
    </>
  );
}

export default App;
