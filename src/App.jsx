import { useState } from "react";
import PersonalForm from "./components/forms/PersonalForm";
import ProfileForm from "./components/forms/ProfileForm";
import { getPersonalObjects } from "./utils/stateObjects";

function App() {
  const [personal, setPersonal] = useState(getPersonalObjects());

  const [profile, setProfile] = useState({
    profile: "",
  });

  const handleChange = (setter) => (e) => {
    // curried function — a function that returns another function:
    const { name, value } = e.target;
    setter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <PersonalForm
        personal={personal}
        handleChange={handleChange(setPersonal)}
      />
      <ProfileForm
        value={profile.profile}
        onChange={handleChange(setProfile)}
      />

      {console.log(
        "Personal:",
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

      {console.log("Profile:", profile.profile)}
    </>
  );
}

export default App;
