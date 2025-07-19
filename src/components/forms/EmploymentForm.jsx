import Input from "../Input";

export default function EmploymentForm({ employment, onChange }) {
  return (
    <section aria-labelledby="employmentDetailsHeading">
      <h2 id="employmentnDetailsHeading">Employment</h2>

      <fieldset className="organization">
        <legend className="sr-only">Employment</legend>

        <Input
          name={`position-${employment.id}`}
          value={employment.position}
          onChange={onChange}
          htmlFor={`position-${employment.id}`}
          label={"Position"}
          autoComplete="organization-title"
        />
        <Input
          name={`employer-${employment.id}`}
          value={employment.employer}
          onChange={onChange}
          htmlFor={`employer-${employment.id}`}
          label={"Employer"}
          autoComplete={"organization"}
        />
        <Input
          name={`city-${employment.id}`}
          value={employment.city}
          onChange={onChange}
          htmlFor={`city-${employment.id}`}
          label={"City"}
          autoComplete={"address-level2"}
        />
      </fieldset>

      <fieldset>
        <legend className="sr-only">Employment Period</legend>
        <Input
          name={`start-${employment.id}`}
          value={employment.start}
          onChange={onChange}
          htmlFor={`start-${employment.id}`}
          label={"Start Date"}
          autoComplete={"date"}
        />
        <Input
          name={`end-${employment.id}`}
          value={employment.end}
          onChange={onChange}
          htmlFor={`end-${employment.id}`}
          label={"End Date"}
          autoComplete={"date"}
        />
        {/* if no end date => start date - present (e.g. 07/2022 - present) */}
      </fieldset>

      <fieldset>
        <legend className="sr-only">Description</legend>
        <textarea
          name={`description-${employment.id}`}
          value={employment.description}
          onChange={onChange}
          id={`description-${employment.id}`}
        />
      </fieldset>
    </section>
  );
}
