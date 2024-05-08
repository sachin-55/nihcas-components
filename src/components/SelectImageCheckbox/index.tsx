import React from 'react';

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};

export default Checkbox;
