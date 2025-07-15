export default function PersonalForm() {
  return (
    <section aria-labelledby="personalDetailsHeading">
      <h2 id="personalDetailsHeading">Personal Details</h2>

      <fieldset className="fullName">
        <legend className="sr-only">Full Name</legend>

        <div className="input">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className="input">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
      </fieldset>

      <fieldset className="contact">
        <legend className="sr-only">Contact</legend>

        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="input">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </fieldset>

      <fieldset className="location">
        <legend className="sr-only">Location</legend>

        <div className="input">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />
        </div>

        <div className="input">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />
        </div>

        <div className="input">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" />
        </div>
      </fieldset>
    </section>
  );
}
