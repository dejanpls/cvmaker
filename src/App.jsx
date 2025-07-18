import { useState } from "react";
import PersonalForm from "./components/forms/PersonalForm";
import { getPersonalObjects } from "./utils/stateObjects";

function App() {
  const [personal, setPersonal] = useState(getPersonalObjects());

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
