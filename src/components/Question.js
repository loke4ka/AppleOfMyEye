import { useMemo } from "react";
import styles from "./Question.module.css";

const Question = ({ howDoesTheAppleOfMyEyeApp, propMinHeight }) => {
  const plus01IconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className={styles.question}>
      <div className={styles.processExplanation}>
        <b className={styles.howDoesThe}>{howDoesTheAppleOfMyEyeApp}</b>
      </div>
      <img
        className={styles.plus01Icon}
        alt=""
        src="/plus011.svg"
        style={plus01IconStyle}
      />
    </div>
  );
};

export default Question;
