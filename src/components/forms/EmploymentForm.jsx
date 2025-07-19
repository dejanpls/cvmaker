import Input from "../Input";

export default function EmploymentForm({ employment, onChange }) {
  return (
    <>
      <fieldset className="organization">
        <legend className="sr-only">Employment</legend>

        <Input
          name="position"
          value={employment.position}
          onChange={onChange}
          htmlFor={`position-${employment.id}`}
          label={"Position"}
          autoComplete="organization-title"
        />
        <Input
          name="employer"
          value={employment.employer}
          onChange={onChange}
          htmlFor={`employer-${employment.id}`}
          label={"Employer"}
          autoComplete="organization"
        />
        <Input
          name="city"
          value={employment.city}
          onChange={onChange}
          htmlFor={`city-${employment.id}`}
          label={"City"}
          autoComplete="address-level2"
        />
      </fieldset>

      <fieldset>
        <legend className="sr-only">Employment Period</legend>
        <Input
          name="start"
          value={employment.start}
          onChange={onChange}
          htmlFor={`start-${employment.id}`}
          label={"Start Date"}
          autoComplete="date"
        />
        <Input
          name="end"
          value={employment.end}
          onChange={onChange}
          htmlFor={`end-${employment.id}`}
          label={"End Date"}
          autoComplete="date"
        />
      </fieldset>

      <fieldset>
        <legend className="sr-only">Description</legend>
        <textarea
          name="description"
          value={employment.description}
          onChange={onChange}
          id={`description-${employment.id}`}
        />
      </fieldset>
    </>
  );
}
