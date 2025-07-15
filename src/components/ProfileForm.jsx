export default function ProfileForm() {
  return (
    <section aria-labelledby="profileHeading">
      <h2 id="profileHeading">Profile</h2>

      <fieldset className="profile">
        <legend className="sr-only">Profile</legend>
        <textarea id="profile" name="profile" />
      </fieldset>
    </section>
  );
}
