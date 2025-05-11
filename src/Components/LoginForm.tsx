import { Form, Link } from 'react-router-dom'
import FormField from './FormField'


const LoginForm = () => {
  return (
    <Form method="post" action="/login" className="flex flex-col gap-4">
    <FormField label="Email" name="email" type="email" />
    <FormField label="Password" name="password" type="password" />

    <button
      type="submit"
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-4 rounded-xl"
    >
      Login
    </button>

    <p className="text-center text-base mt-2">
      Don't have an account?{" "}
      <Link to="/register" className="text-blue-600 underline">
        Register
      </Link>
    </p>
  </Form>
  )
}

export default LoginForm