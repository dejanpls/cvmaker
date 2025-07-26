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
    <div className="cv-wrapper flex justify-end pr-4 pt-4 border border-red-600">
      <div className="scale-container origin-top transition-transform duration-300">
        <section
          className="cv p-6 sm:p-8 border border-gray-300 bg-white rounded-lg shadow-lg space-y-12 text-gray-800 box-border"
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
    </div>
  );
}
