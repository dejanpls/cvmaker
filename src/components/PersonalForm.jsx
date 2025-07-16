import Input from "./Input";

export default function PersonalForm() {
  return (
    <section aria-labelledby="personalDetailsHeading">
      <h2 id="personalDetailsHeading">Personal Details</h2>

      <fieldset className="about">
        <legend className="sr-only">About</legend>

        <Input
          htmlFor={"personal-first-name"}
          name={"given-name"}
          label={"First Name"}
        />
        <Input
          htmlFor={"personal-last-name"}
          name={"family-name"}
          label={"Last Name"}
        />
        <Input
          htmlFor={"personal-desired-position"}
          name={"organization"}
          label={"Desired job position"}
        />
      </fieldset>

      <fieldset className="contact">
        <legend className="sr-only">Contact</legend>

        <Input htmlFor={"personal-email"} name={"email"} label={"Email"} />
        <Input htmlFor={"personal-tel"} name={"tel"} label={"Phone"} />
      </fieldset>

      <fieldset className="location">
        <legend className="sr-only">Location</legend>

        <Input
          htmlFor={"personal-address"}
          name={"street-address"}
          label={"Address"}
        />
        <Input
          htmlFor={"personal-city"}
          name={"address-level2"}
          label={"City"}
        />
        <Input
          htmlFor={"personal-post-code"}
          name={"postal-code"}
          label={"Post Code"}
        />
        <Input
          htmlFor={"personal-country"}
          name={"country"}
          label={"Country"}
        />
      </fieldset>
    </section>
  );
}
