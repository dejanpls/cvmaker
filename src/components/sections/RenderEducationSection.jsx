import EducationForm from "../forms/EducationForm";

export default function RenderEducationSection({
  educations,
  handleEducationtChange,
  handleAddEducation,
}) {
  return (
    <section aria-labelledby="educationDetailsHeading">
      <h2 id="educationDetailsHeading">Education</h2>
      <div className="education-forms">
        {educations.map((education) => (
          <EducationForm
            key={education.id}
            education={education}
            onChange={handleEducationtChange(education.id)}
          />
        ))}
      </div>
      <button onClick={handleAddEducation}>Add Education</button>
    </section>
  );
}
