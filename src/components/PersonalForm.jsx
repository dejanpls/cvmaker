import Input from "./Input";

export default function PersonalForm() {
  return (
    <section aria-labelledby="personalDetailsHeading">
      <h2 id="personalDetailsHeading">Personal Details</h2>

      <fieldset className="fullName">
        <legend className="sr-only">Full Name</legend>

        <Input name={"given-name"} label={"First Name"} />
        <Input name={"family-name"} label={"Last Name"} />
      </fieldset>

      <fieldset className="contact">
        <legend className="sr-only">Contact</legend>

        <Input name={"email"} label={"Email"} />
        <Input name={"tel"} label={"Phone"} />
      </fieldset>

      <fieldset className="location">
        <legend className="sr-only">Location</legend>

        <Input name={"street-address"} label={"Address"} />
        <Input name={"address-level2"} label={"City"} />
        <Input name={"country"} label={"Country"} />
      </fieldset>
    </section>
  );
}
