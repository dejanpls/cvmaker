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
import CVPreview from "./components/CVPreview";
import "./styles/index.css";

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

  const [isEmploymentVisible, setIsEmploymentVisible] = useState(false);

  const toggleEmployment = () => {
    setIsEmploymentVisible((prev) => !prev);
  };

  const [isEduVisible, setIsEduVisible] = useState(false);

  const toggleEdu = () => {
    setIsEduVisible((prev) => !prev);
  };

  const [isPersonalVisible, setIsPersonalVisible] = useState(false);

  const togglePersonal = () => {
    setIsPersonalVisible((prev) => !prev);
  };

  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfile = () => {
    setIsProfileVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-row justify-center items-start border border-red-600">
      <section className="w-[500px] border border-red-600">
        <PersonalForm
          togglePersonal={togglePersonal}
          isPersonalVisible={isPersonalVisible}
          personal={personal}
          handleChange={handleChange(setPersonal)}
        />
        <ProfileForm
          toggleProfile={toggleProfile}
          isProfileVisible={isProfileVisible}
          profile={profile}
          onChange={handleChange(setProfile)}
        />

        <RenderEmploymentSection
          toggleEmployment={toggleEmployment}
          isEmploymentVisible={isEmploymentVisible}
          employments={employments}
          handleEmploymentChange={handleEmploymentChanges}
          handleAddEmployment={handleAddEmploymentForm}
          handleDeleteEmployment={handleDeleteEmployment}
        />

        <RenderEducationSection
          toggleEdu={toggleEdu}
          isEduVisible={isEduVisible}
          educations={educations}
          handleEducationChange={handleEducationChanges}
          handleAddEducation={handleAddEducationForm}
          handleDeleteEducation={handleDeleteEducation}
        />
      </section>

      <CVPreview
        personal={personal}
        profile={profile}
        employments={employments}
        educations={educations}
      />
    </div>
  );
}

export default App;
