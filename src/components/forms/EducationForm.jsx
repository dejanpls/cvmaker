import Input from "../Input";

export default function EducationForm({ education, onChange }) {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-8">
      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Education</legend>

        <div className="space-y-4">
          <Input
            name="education"
            value={education.education}
            onChange={onChange}
            htmlFor={`education-${education.id}`}
            label="Education"
            autoComplete="organization-title"
          />
          <Input
            name="school"
            value={education.school}
            onChange={onChange}
            htmlFor={`school-${education.id}`}
            label="School"
            autoComplete="organization"
          />
          <Input
            name="city"
            value={education.city}
            onChange={onChange}
            htmlFor={`city-${education.id}`}
            label="City"
            autoComplete="address-level2"
          />
        </div>
      </fieldset>

      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Education Period</legend>

        <div className="space-y-4">
          <Input
            name="start"
            value={education.start}
            onChange={onChange}
            htmlFor={`start-${education.id}`}
            label="Start Date"
            autoComplete="date"
          />
          <Input
            name="end"
            value={education.end}
            onChange={onChange}
            htmlFor={`end-${education.id}`}
            label="End Date"
            autoComplete="date"
          />
          {/* You could add a note about 'Present' for ongoing educations here if desired */}
        </div>
      </fieldset>

      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Description</legend>

        <label
          htmlFor="edu-description"
          className="block mb-1 text-gray-700 font-medium"
        >
          Description
        </label>
        <textarea
          name="description"
          value={education.description}
          onChange={onChange}
          id="edu-description"
          rows={5}
          className="w-full rounded-md border border-gray-300 p-3
                     text-gray-700 resize-y
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 transition"
          placeholder="Describe your education or relevant coursework"
        />
      </fieldset>
    </div>
  );
}
