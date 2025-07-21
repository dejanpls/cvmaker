export default function Profile({ profile }) {
  if (!profile?.profile) return null;

  return (
    <section className="profile">
      <h2 className="profile-heading">Profile</h2>
      <p>{profile.profile}</p>
    </section>
  );
}
