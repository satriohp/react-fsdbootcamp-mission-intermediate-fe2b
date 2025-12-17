import { useNavigate } from "react-router-dom";
import AuthLayout from "../templates/AuthLayout";
import AuthForm from "../molecules/AuthForm";
import GoogleButton from "../organisms/GoogleButton";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home"); // dummy
  };

  return (
    <AuthLayout title="Masuk" subtitle="Selamat datang kembali!">
      <AuthForm onSubmit={handleSubmit} buttonText="Masuk" />
      <GoogleButton />
      <p className="text-xs text-center mt-4 opacity-80">
        Belum punya akun?{" "}
        <button onClick={() => navigate("/register")} className="font-semibold">
          Daftar
        </button>
      </p>
    </AuthLayout>
  );
}
