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

  const handleAddEmploymentForm = () => {
    setEmployments((prev) => [...prev, getEmploymentObjects()]);
  };

  const handleAddEducationForm = () => {
    setEducations((prev) => [...prev, getEducationObjects()]);
  };

  const handleDeleteEmployment = (id) => {
    setEmployments((prev) => prev.filter((employment) => employment.id !== id));
  };

  const handleDeleteEducation = (id) => {
    setEducations((prev) => prev.filter((education) => education.id !== id));
  };

  const handleEmploymentChanges = (id) => (e) => {
    const { name, value } = e.target;
    setEmployments((prev) =>
      prev.map((form) => (form.id === id ? { ...form, [name]: value } : form))
    );
  };

  const handleEducationChanges = (id) => (e) => {
    const { name, value } = e.target;
    setEducations((prev) =>
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
        handleEmploymentChange={handleEmploymentChanges}
        handleAddEmployment={handleAddEmploymentForm}
        handleDeleteEmployment={handleDeleteEmployment}
      />

      <RenderEducationSection
        educations={educations}
        handleEducationChange={handleEducationChanges}
        handleAddEducation={handleAddEducationForm}
        handleDeleteEducation={handleDeleteEducation}
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
