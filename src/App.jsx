import { useState } from "react";
import PersonalForm from "./components/forms/PersonalForm";
import ProfileForm from "./components/forms/ProfileForm";
import {
  getPersonalObjects,
  getEmploymentObjects,
  getEducationObjects,
} from "./utils/stateObjects";
import RenderEmploymentSection from "./components/sections/RenderEmploymentSection";
import RenderEducationSection from "./components/sections/RenderEducationSection";

function App() {
  const [personal, setPersonal] = useState(getPersonalObjects());

  const [profile, setProfile] = useState({
    profile: "",
  });

  const [employments, setEmployments] = useState([getEmploymentObjects()]);

  const [educations, setEducations] = useState([getEducationObjects()]);

  const handleAddForm = (setter, getObjects) => () => {
    setter((prev) => [...prev, getObjects()]);
  };

  const handleChanges = (setter) => (id) => (e) => {
    const { name, value } = e.target;
    setter((prev) =>
      prev.map((form) => (form.id === id ? { ...form, [name]: value } : form))
    );
  };

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

      <RenderEmploymentSection
        employments={employments}
        handleEmploymentChange={handleChanges(setEmployments)}
        handleAddEmployment={handleAddForm(
          setEmployments,
          getEmploymentObjects
        )}
      />

      <RenderEducationSection
        educations={educations}
        handleEducationtChange={handleChanges(setEducations)}
        handleAddEducation={handleAddForm(setEducations, getEducationObjects)}
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

      {employments.map((employment) =>
        console.log(
          "Employment:",
          employment.position,
          employment.employer,
          employment.city,
          employment.start,
          employment.end,
          employment.description
        )
      )}

      {educations.map((education) =>
        console.log(
          "Educations:",
          education.education,
          education.school,
          education.city,
          education.start,
          education.end,
          education.description
        )
      )}
    </>
  );
}

export default App;
