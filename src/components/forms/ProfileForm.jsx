export default function ProfileForm({
  toggleProfile,
  isProfileVisible,
  profile,
  onChange,
}) {
  return (
    <section aria-labelledby="profileHeading" className="max-w-xl mx-auto p-4">
      <h2
        id="profileHeading"
        className="text-3xl font-semibold text-gray-800 border border-gray-300 rounded-md p-2"
        role="button"
        tabIndex={0}
        onClick={toggleProfile}
      >
        Profile
      </h2>
      {isProfileVisible && (
        <fieldset className="border mt-4 border-gray-300 rounded-md p-4">
          <legend className="sr-only">Profile</legend>

          <textarea
            value={profile.profile}
            onChange={onChange}
            id="profile"
            name="profile"
            rows={6}
            className="w-full rounded-md border border-gray-300 p-3
                     text-gray-700 resize-y
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 transition"
            placeholder="Write a brief summary about yourself..."
          />
        </fieldset>
      )}
    </section>
  );
}
