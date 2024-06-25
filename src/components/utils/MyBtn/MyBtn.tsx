import React from 'react'; // Ensure React is imported
import styles from './MyBtn.module.scss';

// Update the MyBtnProps type to include an onClick property
type MyBtnProps = {
  children: React.ReactNode;
  onClick?: () => void; // Add this line
  type?: 'button' | 'submit' | 'reset'; // Add this line
  disabled?: boolean; // Add this line
};

const MyBtn: React.FC<MyBtnProps> = ({ children, onClick ,type, disabled }) => {
  return (
    <button disabled={disabled} type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyBtn;