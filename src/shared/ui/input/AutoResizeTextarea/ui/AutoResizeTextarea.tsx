import React, {
  TextareaHTMLAttributes,
  useRef,
  useEffect,
  forwardRef,
} from 'react';
import styles from './autoresize.module.css';

type AutoResizeTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> & {
  value: string;
  onChange: (value: string) => void;
};

export const AutoResizeTextarea = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>(({ className, onChange, value, ...props }, ref) => {
  const internalRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

  const handleResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <textarea
      {...props}
      ref={(el) => {
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
        if (internalRef) internalRef.current = el;
      }}
      value={value}  
      onChange={(e) => onChange(e.target.value)}
      className={`${styles.textarea} ${className}`}
      rows={1}
      onInput={(e) => {
        handleResize();
        props.onInput?.(e);
      }}
    />
  );
});