import './FormTextarea.css';
const FormTextarea = ({ placeholder, ...props }) => {
    return <textarea
        placeholder={placeholder}
        className="form-textarea"
        rows="2"
        {...props} />
}

export default FormTextarea