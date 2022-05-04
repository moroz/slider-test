import styles from "./Slider.module.sass";
import ReactSlider from "react-slider";

export default () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <ReactSlider
        className={styles.slider}
        min={0}
        max={10}
        markClassName={styles.mark}
        marks
        trackClassName={styles.track}
        thumbClassName={styles.thumb}
        renderMark={(props) => (
          <span {...props}>
            <span className={styles.label}>{Number(props.key) + 1}屆</span>
          </span>
        )}
      />
    </div>
  </div>
);
