import PropTypes from "prop-types";
function RegistrationHeader({title, subtitle}) {

  const titleStyle = {
    color: "#06B3C4",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
  };

  const subtitleStyle = {
    color: "#777777",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    margin: "16px 80px",
  };

  return (
    <>
      <h1 style={titleStyle}>{title}</h1>
      {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
    </>
  );
}

RegistrationHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default RegistrationHeader;
