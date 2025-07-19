import EducationForm from "../forms/EducationForm";

export default function RenderEducationSection({
  educations,
  handleEducationtChange,
  handleAddEducation,
}) {
  return (
    <div>
      <section aria-labelledby="educationDetailsHeading">
        <h2 id="educationDetailsHeading">Education</h2>
        {educations.map((edu) => (
          <EducationForm
            key={edu.id} // For now, index is okay; consider unique IDs for reorder/delete later
            employment={edu}
            onChange={handleEducationtChange(edu.id)}
          />
        ))}
      </section>
      <button onClick={handleAddEducation}>Add Employment</button>
    </div>
  );
}
