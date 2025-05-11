import RegisterForm from "../Components/RegisterForm";

const Register = () => {
  return (
    <div className="max-w-max mx-auto mt-10 p-6 border rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
