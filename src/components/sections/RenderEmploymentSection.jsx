import EmploymentForm from "../forms/EmploymentForm";

export default function RenderEmploymentSection({
  employments,
  handleEmploymentChange,
  handleAddEmployment,
  handleDeleteEmployment,
}) {
  return (
    <section aria-labelledby="employmentDetailsHeading">
      <h2 id="employmentDetailsHeading">Employment</h2>
      <div className="employment-forms">
        {employments.map((employment) => (
          <div key={employment.id} className="employment-form-wrapper">
            <EmploymentForm
              key={employment.id}
              employment={employment}
              onChange={handleEmploymentChange(employment.id)}
            />
            {employments.length > 1 && (
              <button
                type="button"
                onClick={() => handleDeleteEmployment(employment.id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

      <button onClick={handleAddEmployment}>Add Employment</button>
    </section>
  );
}
