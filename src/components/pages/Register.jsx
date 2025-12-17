import { useNavigate } from "react-router-dom";
import AuthLayout from "../templates/AuthLayout";
import TextField from "../atoms/TextField";
import Button from "../atoms/Button";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");  
  };

  return (
    <AuthLayout title="Daftar" subtitle="Selamat datang!">
      <form onSubmit={handleSubmit} className="space-y-4"> 
        <TextField
          label="Username"
          id="username"
          placeholder="Masukkan username"
        />
        <TextField
          label="Password"
          id="password"
          type="password"
          placeholder="Masukkan kata sandi"
        />
        <TextField
          label="Konfirmasi Kata Sandi"
          id="confirm-password"
          type="password"
          placeholder="Masukkan ulang kata sandi"
        />
        <Button type="submit">Daftar</Button>
      </form>

      <p className="text-xs text-center mt-3 sm:mt-4 opacity-80">
        Sudah punya akun?{" "}
        <button
          onClick={() => navigate("/")}
          className="font-semibold hover:underline"
        >
          Masuk
        </button>
      </p>
    </AuthLayout>
  );
}