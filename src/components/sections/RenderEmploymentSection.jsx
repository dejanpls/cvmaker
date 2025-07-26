import EmploymentForm from "../forms/EmploymentForm";

export default function RenderEmploymentSection({
  toggleEmployment,
  isEmploymentVisible,
  employments,
  handleEmploymentChange,
  handleAddEmployment,
  handleDeleteEmployment,
}) {
  return (
    <section
      aria-labelledby="employmentDetailsHeading"
      className="max-w-xl mx-auto p-4"
    >
      <h2
        id="employmentDetailsHeading"
        className="text-3xl font-semibold text-gray-800 border border-gray-300 rounded-md p-2"
        role="button"
        tabIndex={0}
        onClick={toggleEmployment}
      >
        Employment
      </h2>

      {isEmploymentVisible && (
        <>
          <div className="space-y-8 mt-4 mb-6">
            {employments.map((employment) => (
              <div
                key={employment.id}
                className="employment-form-wrapper border border-gray-300 rounded-md pb-8 relative"
              >
                <EmploymentForm
                  employment={employment}
                  onChange={handleEmploymentChange(employment.id)}
                />

                {employments.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteEmployment(employment.id)}
                    className="absolute bottom-2 right-2 text-red-600 hover:text-red-800
                            font-semibold focus:outline-none focus:ring-2 focus:ring-red-400
                            rounded px-2 py-1 transition"
                    aria-label="Delete employment entry"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleAddEmployment}
            className="bg-blue-600 text-white px-4 py-2 rounded-md
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                    font-semibold transition"
            type="button"
          >
            Add Employment
          </button>
        </>
      )}
    </section>
  );
}
