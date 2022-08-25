import { Nav, SignupCard } from "../../components";

export default function SignupPage() {
  return (
    <>
      <div className="signupPage-wrapper">
        <Nav />
        <div className="signup-card-wrapper">
          <SignupCard />
        </div>
      </div>
    </>
  );
}
