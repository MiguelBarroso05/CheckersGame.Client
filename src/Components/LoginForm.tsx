import { useState } from 'react'
import { Link,  useNavigate} from 'react-router-dom'
import FormField from './FormField'
import axios from 'axios'
import { useAuth } from '../Helpers/useAuth';

const LoginForm = () => {
  

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const {login} = useAuth();

  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    try {
      const response = await axios.post(
        'http://localhost:5296/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        console.log('Login com sucesso:', response.data);
        const token  = response.data.token
        login(token)
        navigate('/profile')
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

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
    </form>
  );
};

export default LoginForm;
