import styles from './button.module.css'

interface Props {
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button:React.FC<Props> = ({isDisabled, isLoading, children, onClick}) => {
  const className = [
    styles.container,
    isDisabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');
  
  return (
    <button 
      className={className} 
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
     {children}
     {isLoading && <span className={styles.spinner} />}
    </button>
  );
}