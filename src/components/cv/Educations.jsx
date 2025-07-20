export default function Educations({ educations }) {
  return (
    <div className="educations">
      {educations.map((education) => (
        <article className="education" key={education.id}>
          <h2 className="education-education">{education.education}</h2>

          <div className="education-meta">
            <p className="education-location">
              <strong>{education.school}</strong>, {education.city}
            </p>
            <p className="education-dates">
              {education.start} – {education.end}
            </p>
          </div>

          <p className="education-description">{education.description}</p>
        </article>
      ))}
    </div>
  );
}
