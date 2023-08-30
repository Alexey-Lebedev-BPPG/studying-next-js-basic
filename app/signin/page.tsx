import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

// делаем кастомную страницу входа в приложение
const Signin = () => {
  return (
    <div className="stack">
      <h1>Sign In</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
};

export default Signin;
