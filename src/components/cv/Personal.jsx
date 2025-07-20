export default function Personal({ personal }) {
  return (
    <section className="personal">
      <div className="about">
        <h1 className="fullName">
          {personal.firstName} {personal.lastName}
        </h1>
        <p className="desired-position">{personal.position}</p>
      </div>

      <div className="contact">
        <p className="email">{personal.email}</p>
        <p className="tel">{personal.tel}</p>
      </div>

      <address className="location">
        <p className="address">{personal.address}</p>
        <p className="zip">{personal.zip}</p>
        <p className="city">{personal.city}</p>
        <p className="country">{personal.country}</p>
      </address>
    </section>
  );
}
