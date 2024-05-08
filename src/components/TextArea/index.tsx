import { useEffect, useRef } from 'react';

import Typography from '../Typography';
import { InputArea } from './style';

const MAX_ROW = 4;

interface FormInputComponentProps extends React.ComponentProps<'textarea'> {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string | undefined;
  name?: string;
  value?: string;
  maxRow?: number;
  showCount?: boolean;
  maxLength?: number | undefined;
  style?: React.CSSProperties;
  styleTextArea?: React.CSSProperties;
}

const FormInput = ({
  onChange,
  error,
  name,
  value,
  maxRow = MAX_ROW,
  className,
  showCount,
  maxLength,
  style,
  styleTextArea,
  ...restProps
}: FormInputComponentProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const isScrollable = (el: HTMLTextAreaElement) => {
      return (
        el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight
      );
    };

    const handleInput = (e: Event) => {
      const el = e.target as HTMLTextAreaElement;
      if (isScrollable(el) && maxRow > el.rows) {
        el.rows = el.rows + 1;
      }

      if (!el.value) {
        el.rows = 1;
      }
    };

    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.addEventListener('input', handleInput);

      return () => {
        textarea.removeEventListener('input', handleInput);
      };
    }
  }, [maxRow]);

  return (
    <div style={{ width: '100%', ...style }}>
      <InputArea
        ref={textareaRef}
        name={name}
        onChange={onChange}
        rows={1}
        value={value}
        className={`${className} ${error ? 'error' : ''}`}
        maxLength={maxLength}
        style={{ ...styleTextArea }}
        {...restProps}
      />
      {showCount && maxLength ? (
        <Typography style={{ textAlign: 'right' }}>{`${
          (value || '').length
        } / ${maxLength}`}</Typography>
      ) : null}
    </div>
  );
};

export default FormInput;
