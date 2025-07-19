import { useState } from "react";
import PersonalForm from "./components/forms/PersonalForm";
import ProfileForm from "./components/forms/ProfileForm";
import EmploymentForm from "./components/forms/EmploymentForm";
import { getPersonalObjects, getEmploymentObjects } from "./utils/stateObjects";

function App() {
  const [personal, setPersonal] = useState(getPersonalObjects());

  const [profile, setProfile] = useState({
    profile: "",
  });

  const [employment, setEmployment] = useState(getEmploymentObjects());

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
      <ProfileForm profile={profile} onChange={handleChange(setProfile)} />

      <EmploymentForm
        employment={employment}
        onChange={handleChange(setEmployment)}
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

      {console.log(
        "Employment:",
        employment.position,
        employment.employer,
        employment.city,
        employment.start,
        employment.end,
        employment.description
      )}
    </>
  );
}

export default App;
