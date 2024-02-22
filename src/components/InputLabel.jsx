import PropTypes from 'prop-types';

function InputLabel({labelTitle}) {
  return (
    <>
      <label className="label"
        style={
          {color: '#777777'}}
      >
        {labelTitle}
      </label>
    </>
  )
}

InputLabel.propTypes = {
  labelTitle: PropTypes.string.isRequired,
};

export default InputLabel;
