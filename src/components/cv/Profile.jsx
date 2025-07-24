export default function Profile({ profile }) {
  if (!profile?.profile) return null;

  return (
    <section className="profile mb-12">
      <h2 className="profile-heading text-2xl font-semibold text-gray-900 mb-4">
        Profile
      </h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {profile.profile}
      </p>
    </section>
  );
}
