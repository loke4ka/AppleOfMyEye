import { useMemo } from "react";
import styles from "./NationalAssociations.module.css";

const NationalAssociations = ({
  icon,
  choosingClothes,
  getHelpChoosingClothesByD,
  propPadding,
  propAlignSelf,
  propWidth,
  propWidth1,
  propAlignSelf1,
}) => {
  const nationalAssociationsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const choosingClothesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const getHelpChoosingStyle = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth1, propAlignSelf1]);

  return (
    <div
      className={styles.nationalAssociations}
      style={nationalAssociationsStyle}
    >
      <div className={styles.icon}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.icon1} loading="eager" alt="" src={icon} />
        </div>
      </div>
      <div className={styles.choosingClothesParent}>
        <h1 className={styles.choosingClothes} style={choosingClothesStyle}>
          {choosingClothes}
        </h1>
        <div className={styles.getHelpChoosing} style={getHelpChoosingStyle}>
          {getHelpChoosingClothesByD}
        </div>
      </div>
    </div>
  );
};

export default NationalAssociations;
