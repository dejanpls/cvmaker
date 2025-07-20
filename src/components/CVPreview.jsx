import Educations from "./cv/Educations";
import Employments from "./cv/Employments";
import Personal from "./cv/Personal";
import Profile from "./cv/Profile";
import "../styles/cv.css";

export default function CVPreview({
  personal,
  profile,
  employments,
  educations,
}) {
  return (
    <section className="cv">
      <Personal personal={personal} />
      <Profile profile={profile} />
      <Employments employments={employments} />
      <Educations educations={educations} />
    </section>
  );
}
