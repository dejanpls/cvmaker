import Input from "../Input";

export default function EmploymentForm({ education, onChange }) {
  return (
    <section aria-labelledby="educationDetailsHeading">
      <h2 id="educationnDetailsHeading">Education</h2>

      <fieldset className="organization">
        <legend className="sr-only">Education</legend>

        <Input
          name={"education"}
          value={education.education}
          onChange={onChange}
          htmlFor={"edu-education"}
          label={"Education"}
          autoComplete="organization-title"
        />
        <Input
          name={"school"}
          value={education.school}
          onChange={onChange}
          htmlFor={"edu-school"}
          label={"School"}
          autoComplete={"organization"}
        />
        <Input
          name={"city"}
          value={education.city}
          onChange={onChange}
          htmlFor={"edu-city"}
          label={"City"}
          autoComplete={"address-level2"}
        />
      </fieldset>

      <fieldset>
        <legend className="sr-only">Education Period</legend>
        <Input
          name={"start"}
          value={education.start}
          onChange={onChange}
          htmlFor={"edu-start-date"}
          label={"Start Date"}
          autoComplete={"date"}
        />
        <Input
          name={"end"}
          value={education.end}
          onChange={onChange}
          htmlFor={"edu-end-date"}
          label={"End Date"}
          autoComplete={"date"}
        />
        {/* if no end date => start date - present (e.g. 07/2022 - present) */}
      </fieldset>

      <fieldset>
        <legend className="sr-only">Description</legend>
        <textarea
          name="description"
          value={education.description}
          onChange={onChange}
          id="edu-description"
        />
      </fieldset>
    </section>
  );
}
