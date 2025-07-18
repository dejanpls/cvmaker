import Input from "./Input";

export default function EducationForm() {
  return (
    <section aria-labelledby="educationDetailsHeading">
      <h2 id="educationDetailsHeading">Education</h2>

      <fieldset className="organization">
        <legend className="sr-only">Education</legend>

        <Input
          htmlFor={"edu-education"}
          name={"organization-title"}
          label={"Education"}
        />
        <Input htmlFor={"edu-school"} name={"organization"} label={"School"} />
        <Input htmlFor={"edu-city"} name={"address-level2"} label={"City"} />
      </fieldset>

      <fieldset>
        <legend className="sr-only">Start Date</legend>
        <Input
          htmlFor={"edu-start-month"}
          name={"date"}
          label={"Start Month"}
        />
        <Input htmlFor={"edu-start-year"} name={"date"} label={"Start Year"} />
      </fieldset>

      <fieldset>
        <legend className="sr-only">End Date</legend>
        <Input htmlFor={"edu-end-month"} name={"date"} label={"End Month"} />
        <Input htmlFor={"edu-end-year"} name={"date"} label={"End Year"} />
        <Input
          htmlFor={"edu-present"}
          name={"date"}
          label={"Present"}
          type="checkbox"
        />
      </fieldset>

      <fieldset className="description">
        <legend className="sr-only">Description</legend>
        <textarea id="edu-description" name="description" />
      </fieldset>
    </section>
  );
}
