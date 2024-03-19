import { useMemo } from "react";
import styles from "./TypePrimarySizeMediumSta.module.css";

const TypePrimarySizeMediumSta = ({
  buttonText,
  iconId,
  typePrimarySizeMediumStaBackgroundColor,
  labelLineHeight,
  labelFontWeight,
}) => {
  const typePrimarySizeMediumStaStyle = useMemo(() => {
    return {
      backgroundColor: typePrimarySizeMediumStaBackgroundColor,
    };
  }, [typePrimarySizeMediumStaBackgroundColor]);

  const labelStyle = useMemo(() => {
    return {
      lineHeight: labelLineHeight,
      fontWeight: labelFontWeight,
    };
  }, [labelLineHeight, labelFontWeight]);

  return (
    <div
      className={styles.typeprimarySizemediumSta}
      style={typePrimarySizeMediumStaStyle}
    >
      <div className={styles.label} style={labelStyle}>
        {buttonText}
      </div>
      <img className={styles.arrowsDirectionsright} alt="" src={iconId} />
    </div>
  );
};

export default TypePrimarySizeMediumSta;
