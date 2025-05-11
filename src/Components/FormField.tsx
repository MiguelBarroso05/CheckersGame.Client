type FormFieldProps = {
    label: string;
    name: string;
    type?: string;
  };
  
  const FormField = ({ label, name, type = "text" }: FormFieldProps) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-lg font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="border rounded-xl p-2 text-base w-lg"
      />
    </div>
  );
  
  export default FormField;
  