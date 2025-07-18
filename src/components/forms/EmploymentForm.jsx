import Input from "./Input";

export default function EmploymentForm() {
  return (
    <section aria-labelledby="employmentDetailsHeading">
      <h2 id="employmentnDetailsHeading">Employment</h2>

      <fieldset className="organization">
        <legend className="sr-only">Employment</legend>

        <Input
          htmlFor={"emp-position"}
          name={"organization-title"}
          label={"Position"}
        />
        <Input
          htmlFor={"emp-employer"}
          name={"organization"}
          label={"Employer"}
        />
        <Input htmlFor={"emp-city"} name={"address-level2"} label={"City"} />
      </fieldset>

      <fieldset>
        <legend className="sr-only">Start Date</legend>
        <Input
          htmlFor={"emp-start-month"}
          name={"date"}
          label={"Start Month"}
        />
        <Input htmlFor={"emp-start-year"} name={"date"} label={"Start Year"} />
      </fieldset>

      <fieldset>
        <legend className="sr-only">End Date</legend>
        <Input htmlFor={"emp-end-month"} name={"date"} label={"End Month"} />
        <Input htmlFor={"emp-end-year"} name={"date"} label={"End Year"} />
        <Input
          htmlFor={"emp-present"}
          name={"date"}
          label={"Present"}
          type="checkbox"
        />
      </fieldset>

      <fieldset className="description">
        <legend className="sr-only">Description</legend>
        <textarea id="emp-description" name="description" />
      </fieldset>
    </section>
  );
}
