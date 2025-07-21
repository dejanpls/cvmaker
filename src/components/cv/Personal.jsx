import { getDisplayName, getAddress } from "./CVHelper";

export default function Personal({ personal }) {
  return (
    <section className="personal">
      <div className="about">
        <h1 className="fullName">{getDisplayName(personal)}</h1>
        <p className="desired-position">{personal.position}</p>
      </div>

      <div className="contact">
        <p className="email">{personal.email}</p>
        <p className="tel">{personal.tel}</p>
      </div>

      <address className="location">
        <p className="address">{getAddress(personal)}</p>
      </address>
    </section>
  );
}
