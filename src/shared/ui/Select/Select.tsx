import { useRef, useState } from 'react';
import { useClickOutside } from '../../lib/hooks/useClickOutside';

import styles from './select.module.css';

type SharedSelectProps<T extends string> = {
  options: Record<T, { title: string; value: number }>;
  value: T;
  onChange: (value: T) => void;
   renderTrigger?: (props: {
    isOpen: boolean;
    selectedLabel: string;
    selectedKey: T;
    toggleOpen: () => void;
  }) => React.ReactNode;
};

export function Select<T extends string>({
  options,
  value,
  onChange,
  renderTrigger,
}: SharedSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOpen(false));
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: T) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectedLabel = options[value].title;

  return (
    <div className={styles.wrapper} ref={ref}>
      {renderTrigger ? (
        renderTrigger({ isOpen, selectedLabel, selectedKey: value, toggleOpen })
      ) : (
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {options[value].title}
      </button>
      )}
      {isOpen && (
        <div className={styles.dropdown}>
          {(Object.entries(options) as [T, { title: string; value: number }][]).map(([key, option]) => {
            const isSelected = key === value;
            return (
              <div
                key={key}
                className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                onClick={() => handleOptionClick(key as T)}
              >
                <span>{option.title}</span>
                {isSelected && <span className={styles.check}>✓</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
