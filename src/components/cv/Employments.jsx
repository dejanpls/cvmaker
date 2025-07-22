export default function Employments({ employments }) {
  const validEmployments = employments.filter(
    (emp) => emp.position || emp.employer || emp.city || emp.description
  );

  if (validEmployments.length === 0) return null;

  return (
    <div className="employments">
      {validEmployments.map((employment) => (
        <article className="employment" key={employment.id}>
          <div className="employment-meta">
            {employment.position && (
              <h2 className="employment-position">{employment.position}</h2>
            )}
            {(employment.start || employment.end) && (
              <p className="employment-dates">
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
            <p className="employment-location">
              {employment.employer && <strong>{employment.employer}</strong>}
              {employment.employer && employment.city && ", "}
              {employment.city}
            </p>
          )}

          {employment.description && (
            <p className="employment-description">{employment.description}</p>
          )}
        </article>
      ))}
    </div>
  );
}
