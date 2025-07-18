import Input from "../Input";

export default function PersonalForm({ personal, handleChange }) {
  return (
    <section aria-labelledby="personalDetailsHeading">
      <h2 id="personalDetailsHeading">Personal Details</h2>

      <fieldset className="about">
        <legend className="sr-only">About</legend>

        <Input
          name={"firstName"}
          value={personal.firstName}
          onChange={handleChange}
          htmlFor={"personal-first-name"}
          label={"First Name"}
          autoComplete="given-name"
        />
        <Input
          name={"lastName"}
          value={personal.lastName}
          onChange={handleChange}
          htmlFor={"personal-last-name"}
          label={"Last Name"}
          autoComplete="family-name"
        />
        <Input
          name={"position"}
          value={personal.position}
          onChange={handleChange}
          htmlFor={"personal-desired-position"}
          label={"Desired job position"}
          autoComplete="organization"
        />
      </fieldset>

      <fieldset className="contact">
        <legend className="sr-only">Contact</legend>

        <Input
          name={"email"}
          value={personal.email}
          onChange={handleChange}
          htmlFor={"personal-email"}
          label={"Email"}
          autoComplete="email"
        />
        <Input
          name={"tel"}
          value={personal.tel}
          onChange={handleChange}
          htmlFor={"personal-tel"}
          label={"Phone"}
          autoComplete="tel"
        />
      </fieldset>

      <fieldset className="location">
        <legend className="sr-only">Location</legend>

        <Input
          name={"address"}
          value={personal.address}
          onChange={handleChange}
          htmlFor={"personal-address"}
          label={"Address"}
          autoComplete="address-line1"
        />
        <Input
          name={"zip"}
          value={personal.zip}
          onChange={handleChange}
          htmlFor={"personal-post-code"}
          label={"Post Code"}
          autoComplete="postal-code"
        />
        <Input
          name={"city"}
          value={personal.city}
          onChange={handleChange}
          htmlFor={"personal-city"}
          label={"City"}
          autoComplete="address-line2"
        />
        <Input
          name={"country"}
          value={personal.country}
          onChange={handleChange}
          htmlFor={"personal-country"}
          label={"Country"}
          autoComplete="country"
        />
      </fieldset>
    </section>
  );
}
