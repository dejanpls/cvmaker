import EducationForm from "../forms/EducationForm";

export default function RenderEducationSection({
  educations,
  handleEducationChange,
  handleAddEducation,
  handleDeleteEducation,
}) {
  return (
    <section
      aria-labelledby="educationDetailsHeading"
      className="max-w-xl mx-auto p-4"
    >
      <h2
        id="educationDetailsHeading"
        className="text-3xl font-semibold mb-6 text-gray-800"
      >
        Education
      </h2>

      <div className="space-y-8 mb-6">
        {educations.map((education) => (
          <div
            key={education.id}
            className="education-forms-wrapper border border-gray-300 rounded-md p-4 pb-8 relative"
          >
            <EducationForm
              education={education}
              onChange={handleEducationChange(education.id)}
            />

            {educations.length > 1 && (
              <button
                type="button"
                onClick={() => handleDeleteEducation(education.id)}
                className="absolute bottom-2 right-1 text-red-600 hover:text-red-800
                           font-semibold focus:outline-none focus:ring-2 focus:ring-red-400
                           rounded px-2 py-1 transition"
                aria-label="Delete education entry"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleAddEducation}
        type="button"
        className="bg-blue-600 text-white px-4 py-2 rounded-md
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                   font-semibold transition"
      >
        Add Education
      </button>
    </section>
  );
}
