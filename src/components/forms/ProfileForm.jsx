export default function ProfileForm({ profile, onChange }) {
  return (
    <section aria-labelledby="profileHeading">
      <h2 id="profileHeading">Profile</h2>

      <fieldset className="profile">
        <legend className="sr-only">Profile</legend>
        <textarea
          value={profile.profile}
          onChange={onChange}
          id="profile"
          name="profile"
        />
      </fieldset>
    </section>
  );
}
