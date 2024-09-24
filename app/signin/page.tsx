import OTPSignIn from '../components/OTPSignIn';

export default function SignInPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign In with OTP</h1>
      <OTPSignIn />
    </div>
  );
}
