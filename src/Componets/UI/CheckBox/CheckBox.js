import "./CheckBox.css";

const CheckBox = ({ value, onChange }) => {
  return (
    <label className="CheckBox__Container">
      <input
        className="CheckBox"
        type="checkbox"
        name=""
        id=""
        onChange={onChange}
      />
      {value}
    </label>
  );
};

export default CheckBox;
