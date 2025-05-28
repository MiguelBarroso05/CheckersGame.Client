import { Link, useNavigate } from "react-router-dom";
import FormField from "./FormField";
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

 const navigate = useNavigate();
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
        'http://localhost:5296/api/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        console.log('Registro com sucesso:', response.data);
        navigate('/login')
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="name" name="name" value={formData.name}  onChange={handleChange}/>
      <FormField label="Email" name="email" type="email" value={formData.email}  onChange={handleChange}/>
      <FormField label="Password" name="password" type="password" value={formData.password} onChange={handleChange}/>

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
    </form>
  );
};

export default RegisterForm;
