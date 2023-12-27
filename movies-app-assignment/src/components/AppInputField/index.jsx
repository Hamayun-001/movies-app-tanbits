import PropTypes from "prop-types";
import "./style.scss";

/**
 *
 * @param {Object} props
 * @param {String} props.type
 * @param {String} props.placeholder
 * @param {String} props.name
 * @param {Function} props.onChange
 * @returns React.JSX.Element
 */
const AppInputField = (props) => {
  const handleChange = (e) => props.onChange(props.name, e.target.value);

  return (
    <input
      name={props.name}
      type={props.type}
      onChange={handleChange}
      className="app-inputField"
      placeholder={props.placeholder}
    />
  );
};

AppInputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AppInputField.defaultProps = {
  name: "text",
  type: "text",
  placeholder: "Enter here...",
  onChange: () => null,
};
export default AppInputField;
