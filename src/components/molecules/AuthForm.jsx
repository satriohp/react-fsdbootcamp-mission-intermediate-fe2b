import TextField from "../atoms/TextField";
import Button from "../atoms/Button";

export default function AuthForm({ buttonText, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <TextField label="Username" id="username" placeholder="Masukkan username" />
      <TextField label="Password" id="password" type="password" placeholder="Masukkan kata sandi" />
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}
