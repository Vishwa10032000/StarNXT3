import './FormInput.css';
const FormInput = ({type, placeholder, ...props}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="form-input"
      {...props}
    />
  )
}

export default FormInput