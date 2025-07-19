import Input from "../Input";

export default function EducationForm({ education, onChange }) {
  return (
    <div className="education-form">
      <fieldset className="organization">
        <legend className="sr-only">Education</legend>

        <Input
          name={"education"}
          value={education.education}
          onChange={onChange}
          htmlFor={`education-${education.id}`}
          label={"Education"}
          autoComplete="organization-title"
        />
        <Input
          name={"school"}
          value={education.school}
          onChange={onChange}
          htmlFor={`school-${education.id}`}
          label={"School"}
          autoComplete={"organization"}
        />
        <Input
          name={"city"}
          value={education.city}
          onChange={onChange}
          htmlFor={`city-${education.id}`}
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
          htmlFor={`start-${education.id}`}
          label={"Start Date"}
          autoComplete={"date"}
        />
        <Input
          name={"end"}
          value={education.end}
          onChange={onChange}
          htmlFor={`end-${education.id}`}
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
    </div>
  );
}
