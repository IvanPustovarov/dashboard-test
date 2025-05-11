import { useRef, useState } from 'react';
import { useClickOutside } from '../../lib/hooks/useClickOutside';

import styles from './select.module.css';

type SharedSelectProps<T extends string> = {
  options: Record<T, string>;
  value: T;
  onChange: (value: T) => void;
};

export function Select<T extends string>({
  options,
  value,
  onChange,
}: SharedSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOpen(false));

  const handleOptionClick = (option: T) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {options[value]}
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {Object.entries(options).map(([key, label]) => {
            const isSelected = key === value;
            return (
              <div
                key={key}
                className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                onClick={() => handleOptionClick(key as T)}
              >
                <span>{label as React.ReactNode}</span>
                {isSelected && <span className={styles.check}>✓</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
