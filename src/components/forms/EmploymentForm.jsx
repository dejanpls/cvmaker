import Input from "../Input";

export default function EmploymentForm({ employment, onChange }) {
  return (
    <section aria-labelledby="employmentDetailsHeading">
      <h2 id="employmentnDetailsHeading">Employment</h2>

      <fieldset className="organization">
        <legend className="sr-only">Employment</legend>

        <Input
          name={"position"}
          value={employment.position}
          onChange={onChange}
          htmlFor={"emp-position"}
          label={"Position"}
          autoComplete="organization-title"
        />
        <Input
          name={"employer"}
          value={employment.employer}
          onChange={onChange}
          htmlFor={"emp-employer"}
          label={"Employer"}
          autoComplete={"organization"}
        />
        <Input
          name={"city"}
          value={employment.city}
          onChange={onChange}
          htmlFor={"emp-city"}
          label={"City"}
          autoComplete={"address-level2"}
        />
      </fieldset>

      <fieldset>
        <legend className="sr-only">Employment Period</legend>
        <Input
          name={"start"}
          value={employment.start}
          onChange={onChange}
          htmlFor={"emp-start-date"}
          label={"Start Date"}
          autoComplete={"date"}
        />
        <Input
          name={"end"}
          value={employment.end}
          onChange={onChange}
          htmlFor={"emp-end-date"}
          label={"End Date"}
          autoComplete={"date"}
        />
        {/* if no end date => start date - present (e.g. 07/2022 - present) */}
      </fieldset>

      <fieldset>
        <legend className="sr-only">Description</legend>
        <textarea
          name="description"
          value={employment.description}
          onChange={onChange}
          id="emp-description"
        />
      </fieldset>
    </section>
  );
}
