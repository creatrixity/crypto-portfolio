import React from "react";
import { Link } from "react-router-dom";
import styles from "./Steps.module.scss";

import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function Steps({ steps }) {
  const activeIdx = steps.reduce((acc, curr, idx) => curr.active ? idx: acc, 0)

  return (
    <div className={styles.Steps__Wrapper}>
      <ol className={styles.Steps}>
        {steps.map(({ label, path, active }, idx) => {
          const isLastStep = idx === steps.length - 1;
          const completed = idx < activeIdx
          const stepWidth = 100 / (steps.length);

          let stepClasses = cx({
            Step: true,
            Step__Last: isLastStep,
            Step__Current: active,
            Step__Completed: completed
          });

          const checkmarkClass = completed ? 'checkmark-primary': 'checkmark-default'

          return (
            <li className={stepClasses} style={{ left: `${stepWidth/2}%` }} key={idx}>
              <Link to={path} className={styles.Step__Milestone}>
                <i className={`checkmark ${checkmarkClass}`} />
              </Link>
              {active ? (
                <span className={styles.Step__Label}>{label}</span>
              ) : (
                <Link to={path} className={styles.Step__Label}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

Steps.defaultProps = {
  steps: [],
};

export default Steps;