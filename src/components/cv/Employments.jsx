export default function Employments({ employments }) {
  const validEmployments = employments.filter(
    (emp) => emp.position || emp.employer || emp.city || emp.description
  );

  if (validEmployments.length === 0) return null;

  return (
    <section className="employments mb-12">
      <h2 className="title text-2xl font-semibold text-gray-900 mb-6">
        Employment
      </h2>
      {validEmployments.map((employment) => (
        <article
          className="employment mb-8 last:mb-0 border-b border-gray-200 pb-6"
          key={employment.id}
        >
          <div className="employment-meta flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <p className="employment-position text-lg font-semibold text-gray-800">
              {employment.position}
            </p>

            {(employment.start || employment.end) && (
              <p className="employment-dates text-sm text-gray-500 mt-1 sm:mt-0">
                {employment.start}
                {employment.end
                  ? ` – ${employment.end}`
                  : employment.start
                  ? " – Present"
                  : ""}
              </p>
            )}
          </div>

          {(employment.employer || employment.city) && (
            <p className="employment-location text-gray-700 mb-2">
              {employment.employer && <strong>{employment.employer}</strong>}
              {employment.employer && employment.city && ", "}
              {employment.city}
            </p>
          )}

          {employment.description && (
            <p className="employment-description text-gray-600 leading-relaxed whitespace-pre-line">
              {employment.description}
            </p>
          )}
        </article>
      ))}
    </section>
  );
}
