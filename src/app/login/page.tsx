import LoginForm from "@/components/Loginform";

export default function LoginPage() {
  return (
    <main>
      <div
        className="h-screen flex justify-center items-center px-5"
        style={{
          backgroundImage: 'linear-gradient(to bottom, indigo 20%, black 80%)', 
        }}
      >
        <LoginForm />
      </div>
    </main>
  );
}
