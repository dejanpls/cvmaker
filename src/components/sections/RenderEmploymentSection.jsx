import EmploymentForm from "../forms/EmploymentForm";

export default function RenderEmploymentSection({
  employments,
  handleEmploymentChange,
  handleAddEmployment,
}) {
  return (
    <div>
      <section aria-labelledby="employmentDetailsHeading">
        <h2 id="employmentnDetailsHeading">Employment</h2>
        {employments.map((employment) => (
          <EmploymentForm
            key={employment.id} // For now, index is okay; consider unique IDs for reorder/delete later
            employment={employment}
            onChange={handleEmploymentChange(employment.id)}
          />
        ))}
      </section>
      <button onClick={handleAddEmployment}>Add Employment</button>
    </div>
  );
}
