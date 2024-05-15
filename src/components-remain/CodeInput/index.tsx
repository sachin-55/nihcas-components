import React, { useRef } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
`;

const InputField = styled.input`
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  background-color: #ebebeb;
  /* padding: 10px 16px; */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

interface CodeInputProps {
  style?: React.CSSProperties;
  name?: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  numberOfField?: number;
}

const CodeInput: React.FC<CodeInputProps> = ({
  style,
  name,
  value,
  onChange,
  placeholder,
  numberOfField = 6,
  ...restProps
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length: numberOfField }, () => null)
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = event.target.value.replace(/\D/g, '');
    const updatedValue =
      value.substring(0, index) + newValue + value.substring(index + 1);
    onChange(updatedValue);

    if (
      newValue !== '' &&
      index < numberOfField - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
    }

    if (
      event.key === 'ArrowLeft' &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus();
    } else if (
      event.key === 'ArrowRight' &&
      index < numberOfField - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const fields = [];
  for (let i = 0; i < numberOfField; i++) {
    const fieldValue = value[i] || '';
    fields.push(
      <InputField
        key={i}
        ref={(el) => (inputRefs.current[i] = el)}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        name={`${name}_${i}`}
        value={fieldValue}
        onChange={(e) => handleInputChange(e, i)}
        onKeyDown={(e) => handleKeyDown(e, i)}
        placeholder={placeholder}
        maxLength={1}
        {...restProps}
      />
    );
  }

  return <InputContainer style={style}>{fields}</InputContainer>;
};

export default CodeInput;
