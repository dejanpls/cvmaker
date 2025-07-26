import Educations from "./cv/Educations";
import Employments from "./cv/Employments";
import Personal from "./cv/Personal";
import Profile from "./cv/Profile";

export default function CVPreview({
  personal,
  profile,
  employments,
  educations,
}) {
  return (
    <div className="cv-wrapper flex-1 flex justify-end mr-4">
      <section
        className="cv p-6 sm:p-8 border border-red-400 bg-white rounded-lg shadow-lg space-y-12 text-gray-800 box-border"
        style={{
          width: "210mm",
          height: "297mm",
        }}
      >
        <Personal personal={personal} />
        <Profile profile={profile} />
        <Employments employments={employments} />
        <Educations educations={educations} />
      </section>
    </div>
  );
}
