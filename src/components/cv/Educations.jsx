export default function Educations({ educations }) {
  const validEdu = educations.filter(
    (edu) => edu.education || edu.school || edu.city || edu.description
  );

  if (validEdu.length === 0) return null;

  return (
    <div className="educations">
      {validEdu.map((education) => (
        <article className="education" key={education.id}>
          <div className="education-meta">
            {education.education && (
              <h2 className="education-education">{education.education}</h2>
            )}
            {(education.start || education.end) && (
              <p className="education-dates">
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
            <p className="education-location">
              {education.school && <strong>{education.school}</strong>}
              {education.school && education.city && ", "}
              {education.city}
            </p>
          )}

          {education.description && (
            <p className="education-description">{education.description}</p>
          )}
        </article>
      ))}
    </div>
  );
}
