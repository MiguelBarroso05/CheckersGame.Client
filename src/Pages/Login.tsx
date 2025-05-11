import LoginForm from '../Components/LoginForm'


const Login = () => {
  return (
    <div className="max-w-max mx-auto mt-10 p-6 border rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login