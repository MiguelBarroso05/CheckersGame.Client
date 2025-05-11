import { Form, Link } from "react-router-dom";
import FormField from "./FormField";

const RegisterForm = () => {
  return (
    <Form method="post" action="/login" className="flex flex-col gap-4">
      <FormField label="Username" name="username" />
      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded-xl"
      >
        Register
      </button>

      <p className="text-center text-base mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </Form>
  );
};

export default RegisterForm;
