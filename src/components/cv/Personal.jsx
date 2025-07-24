import { getDisplayName, getAddress } from "./CVHelper";

export default function Personal({ personal }) {
  return (
    <section className="personal mb-12">
      <div className="about mb-4">
        <h1 className="fullName text-4xl font-extrabold text-gray-900">
          {getDisplayName(personal)}
        </h1>
        <p className="desired-position text-lg text-gray-600 mt-1">
          {personal.position}
        </p>
      </div>

      <div className="contact mb-4 space-y-1 text-gray-700">
        <p className="email">
          <a href={`mailto:${personal.email}`} className="hover:underline">
            {personal.email}
          </a>
        </p>
        <p className="tel">{personal.tel}</p>
      </div>

      <address className="location not-italic text-gray-600">
        <p className="address">{getAddress(personal)}</p>
      </address>
    </section>
  );
}
