import React from "react";

export default function FormCheckBox({ name, optlabel, correct, setCorrect }) {
  const handleChange = (e) => {
    setCorrect({
      ...correct,
      [e.target.name]: e.target.checked,
      totalCorrect: e.target.checked
        ? correct.totalCorrect + 1
        : correct.totalCorrect - 1,
    });
  };

  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={`customCheck1-${name}`}
        checked={correct[name]}
        name={name}
        onChange={handleChange}
      />
      <label className="custom-control-label" htmlFor={`customCheck1-${name}`}>
        {optlabel}
      </label>
    </div>
  );
}
