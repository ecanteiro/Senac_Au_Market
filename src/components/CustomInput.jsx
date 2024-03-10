import PropTypes from 'prop-types';
import {IMaskInput} from "react-imask";
import {useRef} from "react";
import InputLabel from "./InputLabel.jsx";

function CustomInput({label, name, placeholder, value, onChange, mask = '', type = "text", required = true}) {

  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <>
      <div className="field">
        <InputLabel labelTitle={label}/>
        <div className="control">
          <IMaskInput
            mask={mask}
            className="input"
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onAccept={onChange}
            required={required}
            ref={ref}
            inputRef={inputRef}
          />
        </div>
      </div>
    </>
  )
}

CustomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  mask: PropTypes.string,
};

export default CustomInput;
