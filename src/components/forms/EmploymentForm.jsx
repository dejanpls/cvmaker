import Input from "../Input";

export default function EmploymentForm({ employment, onChange }) {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-8">
      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Employment</legend>

        <div className="space-y-4">
          <Input
            name="position"
            value={employment.position}
            onChange={onChange}
            htmlFor={`position-${employment.id}`}
            label="Position"
            autoComplete="organization-title"
          />
          <Input
            name="employer"
            value={employment.employer}
            onChange={onChange}
            htmlFor={`employer-${employment.id}`}
            label="Employer"
            autoComplete="organization"
          />
          <Input
            name="city"
            value={employment.city}
            onChange={onChange}
            htmlFor={`city-${employment.id}`}
            label="City"
            autoComplete="address-level2"
          />
        </div>
      </fieldset>

      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Employment Period</legend>

        <div className="space-y-4">
          <Input
            name="start"
            value={employment.start}
            onChange={onChange}
            htmlFor={`start-${employment.id}`}
            label="Start Date"
            autoComplete="date"
          />
          <Input
            name="end"
            value={employment.end}
            onChange={onChange}
            htmlFor={`end-${employment.id}`}
            label="End Date"
            autoComplete="date"
          />
        </div>
      </fieldset>

      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Description</legend>

        <label
          htmlFor={`description-${employment.id}`}
          className="block mb-1 text-gray-700 font-medium"
        >
          Description
        </label>
        <textarea
          name="description"
          value={employment.description}
          onChange={onChange}
          id={`description-${employment.id}`}
          rows={5}
          className="w-full rounded-md border border-gray-300 p-3
                     text-gray-700 resize-y
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 transition"
          placeholder="Describe your role and responsibilities"
        />
      </fieldset>
    </div>
  );
}
