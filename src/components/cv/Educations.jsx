export default function Educations({ educations }) {
  const validEdu = educations.filter(
    (edu) => edu.education || edu.school || edu.city || edu.description
  );

  if (validEdu.length === 0) return null;

  return (
    <section className="educations mb-12">
      <h2 className="title text-2xl font-semibold text-gray-900 mb-6">
        Education
      </h2>
      {validEdu.map((education) => (
        <article
          className="education mb-8 last:mb-0 border-b border-gray-200 pb-6"
          key={education.id}
        >
          <div className="education-meta flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <p className="education-education text-lg font-semibold text-gray-800">
              {education.education}
            </p>

            {(education.start || education.end) && (
              <p className="education-dates text-sm text-gray-500 mt-1 sm:mt-0">
                {education.start}
                {education.end
                  ? ` – ${education.end}`
                  : education.start
                  ? " – Present"
                  : ""}
              </p>
            )}
          </div>

          {(education.school || education.city) && (
            <p className="education-location text-gray-700 mb-2">
              {education.school && <strong>{education.school}</strong>}
              {education.school && education.city && ", "}
              {education.city}
            </p>
          )}

          {education.description && (
            <p className="education-description text-gray-600 leading-relaxed whitespace-pre-line">
              {education.description}
            </p>
          )}
        </article>
      ))}
    </section>
  );
}
