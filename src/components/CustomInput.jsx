import PropTypes from 'prop-types';

function CustomInput({label, name, placeholder, value, onChange, type = "text", required = true}) {

  return (
    <>
      <div className="field">
        <label className="label"
          style={
            {color: '#777777'}
          }>
          {label}
        </label>
        <div className="control">
          <input
            className="input"
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
          />

        </div>
      </div>
    </>
  )
}

CustomInput.propTypes = {
  label: PropTypes.label,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool
};

export default CustomInput;
