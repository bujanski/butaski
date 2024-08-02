import styles from './RightTitle.module.css'

const RightTitle = () => {
    return (
      <div className={styles.right_side}>
        <div className={styles.letters}>
          {'butaski'.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </div>
    );
  };
  
  export default RightTitle;