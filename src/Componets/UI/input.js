import "./styles.css";

const InputText = ({
  label,
  value,
  type,
  placehoder,
  required,
  bg,
  onChange,
  rot,
  tr,
  ttr,
}) => {
  console.log(rot);
  return (
    <label className="label" style={{ backgroundImage: `url(${bg})` }}>
      <div
        className="inputBox"
        style={{ transform: `rotate(${rot}) translateX(${tr})` }}
      >
        <div
          className="labelText"
          style={{ transform: `translateX(${ttr})` }}
        >
          {label}
        </div>
        <input
          type={type ?? "text"}
          value={value ?? " "}
          required={required}
          onChange={onChange}
        />
      </div>
    </label>
  );
};

export default InputText;
