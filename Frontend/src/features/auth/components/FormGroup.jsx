const FormGroup = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{name}</label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormGroup;
