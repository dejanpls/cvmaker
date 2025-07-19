import EmploymentForm from "../forms/EmploymentForm";

export default function RenderEmploymentSection({
  employments,
  handleEmploymentChange,
  handleAddEmployment,
}) {
  return (
    <section aria-labelledby="employmentDetailsHeading">
      <h2 id="employmentDetailsHeading">Employment</h2>
      <div className="employment-forms">
        {employments.map((employment) => (
          <EmploymentForm
            key={employment.id}
            employment={employment}
            onChange={handleEmploymentChange(employment.id)}
          />
        ))}
      </div>
      <button onClick={handleAddEmployment}>Add Employment</button>
    </section>
  );
}
