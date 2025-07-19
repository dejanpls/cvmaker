import EducationForm from "../forms/EducationForm";

export default function RenderEducationSection({
  educations,
  handleEducationChange,
  handleAddEducation,
  handleDeleteEducation,
}) {
  return (
    <section aria-labelledby="educationDetailsHeading">
      <h2 id="educationDetailsHeading">Education</h2>
      <div className="education-forms">
        {educations.map((education) => (
          <div key={education.id} className="education-forms-wrapper">
            <EducationForm
              key={education.id}
              education={education}
              onChange={handleEducationChange(education.id)}
            />
            {educations.length > 1 && (
              <button
                type="button"
                onClick={() => handleDeleteEducation(education.id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleAddEducation}>Add Education</button>
    </section>
  );
}
