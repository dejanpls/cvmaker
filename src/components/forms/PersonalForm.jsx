import Input from "../Input";

export default function PersonalForm({ personal, handleChange }) {
  return (
    <section
      aria-labelledby="personalDetailsHeading"
      className="max-w-xl mx-auto p-4"
    >
      <h2
        id="personalDetailsHeading"
        className="text-2xl font-semibold mb-6 text-gray-800"
      >
        Personal Details
      </h2>

      <fieldset className="mb-6 border border-gray-300 rounded-md p-4">
        <legend className="sr-only">About</legend>

        <div className="space-y-4">
          <Input
            name="firstName"
            value={personal.firstName}
            onChange={handleChange}
            htmlFor="personal-first-name"
            label="First Name"
            autoComplete="given-name"
          />
          <Input
            name="lastName"
            value={personal.lastName}
            onChange={handleChange}
            htmlFor="personal-last-name"
            label="Last Name"
            autoComplete="family-name"
          />
          <Input
            name="position"
            value={personal.position}
            onChange={handleChange}
            htmlFor="personal-desired-position"
            label="Desired job position"
            autoComplete="organization"
          />
        </div>
      </fieldset>

      <fieldset className="mb-6 border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Contact</legend>

        <div className="space-y-4">
          <Input
            name="email"
            value={personal.email}
            onChange={handleChange}
            htmlFor="personal-email"
            label="Email"
            autoComplete="email"
          />
          <Input
            name="tel"
            value={personal.tel}
            onChange={handleChange}
            htmlFor="personal-tel"
            label="Phone"
            autoComplete="tel"
          />
        </div>
      </fieldset>

      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="sr-only">Location</legend>

        <div className="space-y-4">
          <Input
            name="address"
            value={personal.address}
            onChange={handleChange}
            htmlFor="personal-address"
            label="Address"
            autoComplete="address-line1"
          />
          <Input
            name="zip"
            value={personal.zip}
            onChange={handleChange}
            htmlFor="personal-post-code"
            label="Post Code"
            autoComplete="postal-code"
          />
          <Input
            name="city"
            value={personal.city}
            onChange={handleChange}
            htmlFor="personal-city"
            label="City"
            autoComplete="address-level2"
          />
          <Input
            name="country"
            value={personal.country}
            onChange={handleChange}
            htmlFor="personal-country"
            label="Country"
            autoComplete="country-name"
          />
        </div>
      </fieldset>
    </section>
  );
}
