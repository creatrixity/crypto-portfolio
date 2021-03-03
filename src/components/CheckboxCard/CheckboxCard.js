import React from "react";
import CheckboxRound from "components/CheckboxRound";
import styles from "./CheckboxCard.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const CheckboxCard = ({ children, onChange, label, ...props }) => {
  return (
    <div
      className={cx({
        CheckboxCard: true,
        CheckboxCard__checked: props.checked,
      })}
      onClick={onChange}
    >
      <section className="d-flex justify-content-end py-2 px-3">
        <CheckboxRound onChange={onChange} {...props} />
      </section>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {children}
        <p>{label}</p>
      </div>
    </div>
  );
};

CheckboxCard.defaultProps = {};

export default CheckboxCard;