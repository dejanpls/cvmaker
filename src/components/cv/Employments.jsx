export default function Employments({ employments }) {
  return (
    <div className="employments">
      {employments.map((employment) => (
        <article className="employment" key={employment.id}>
          <h2 className="employment-position">{employment.position}</h2>

          <div className="employment-meta">
            <p className="employment-location">
              <strong>{employment.employer}</strong>, {employment.city}
            </p>
            <p className="employment-dates">
              {employment.start} – {employment.end}
            </p>
          </div>

          <p className="employment-description">{employment.description}</p>
        </article>
      ))}
    </div>
  );
}
