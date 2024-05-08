import React, { useRef } from 'react';

import { ReactComponent as GreenCheckSVG } from '../../assets/icons/check-green.svg';
import { ReactComponent as CrossSVG } from '../../assets/icons/cross.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/downChevron.svg';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Typography from '../Typography';
import {
  MultipleSelectedValueWrapper,
  MultiSelectChip,
  OptionsContainerStyled,
  OptionStyled,
  SelectDropDownContainer,
  SelectStyled,
} from './style';

type OptionsType = { label: React.ReactNode; value: string; record?: any };

type Props = {
  options: Array<OptionsType>;
  placeholder?: string;
  error?: boolean;
  recordValueMappingKey?: string;
  icons?: React.ReactNode;
  name?: string;
} & (
  | {
      multiple?: false;
      selected: string;
      onSelect: (value: string, record?: any) => void;
    }
  | {
      multiple?: true;
      selected: Array<string>;
      onSelect: (value: Array<string>, record?: Array<any>) => void;
    }
);

const SelectDropDown = ({
  onSelect,
  options,
  selected,
  error,
  multiple = false,
  placeholder = 'Select',
  recordValueMappingKey = 'id',
  icons,
}: Props) => {
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useDetectOutsideClick(
    selectContainerRef,
    false
  );

  const handleRemoveFromSelect = (value: string) => {
    if (Array.isArray(selected)) {
      const valueToUpdate: any = selected.filter((x) => x !== value);

      const records = options.filter(
        (y) => y.record[recordValueMappingKey] === value
      );
      onSelect(valueToUpdate, records);
    }
  };

  const getSelectedData = () => {
    if (typeof selected === 'string' && selected) {
      const selectedRecord = options.find((x) => x.value === selected);
      return <Typography variant="normal">{selectedRecord?.label}</Typography>;
    }
    if (Array.isArray(selected) && selected.length > 0) {
      const selectedRecord = options.filter((x) => selected.includes(x.value));

      return (
        <MultipleSelectedValueWrapper>
          {selectedRecord.map((val, idx) => (
            <MultiSelectChip key={`${val.label}-${idx}`}>
              {val.label}
              <CrossSVG
                className="close"
                onClick={() => {
                  handleRemoveFromSelect(val.value);
                }}
              />
            </MultiSelectChip>
          ))}
        </MultipleSelectedValueWrapper>
      );
    }

    return (
      <Typography variant="normal" className="placeholder">
        {placeholder}
      </Typography>
    );
  };
  const classNames = [error ? 'error' : '', isFocused ? 'focus' : ''].join(' ');

  const closeDropDown = () => {
    if (typeof setIsFocused !== 'boolean') {
      setIsFocused(false);
    }
  };

  const isOptionSelected = (val: string) => {
    if (multiple && Array.isArray(selected)) {
      if (selected.includes(val)) {
        return <GreenCheckSVG width={20} height={20} />;
      }
    }
    if (selected === val) {
      return <GreenCheckSVG width={20} height={20} />;
    }
    return null;
  };

  const onOptionSelect = (value: any, record: any) => {
    closeDropDown();
    if (!multiple) {
      onSelect(value, record);
      return;
    }
    if (Array.isArray(selected)) {
      const dataAlreadySelected = selected.includes(value);
      const valueToUpdate: any = dataAlreadySelected
        ? selected.filter((x) => x !== value)
        : [value, ...selected];
      const records = options.filter(
        (y) => y.record[recordValueMappingKey] === value
      );
      onSelect(valueToUpdate, records);
    }
  };

  return (
    <SelectDropDownContainer
      ref={selectContainerRef}
      onClick={() => {
        if (typeof setIsFocused !== 'boolean') {
          setIsFocused(true);
        }
      }}
      className="custom-select-container"
    >
      <SelectStyled
        className={`${classNames} custom-select`}
        $isVisible={typeof isFocused === 'boolean' ? isFocused : false}
      >
        {icons && icons}
        {getSelectedData()}

        <ChevronIcon className="chevron-icon" />
      </SelectStyled>
      <OptionsContainerStyled
        $isVisible={typeof isFocused === 'boolean' ? isFocused : false}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="custom-options-container"
      >
        {options.map((opt, idx) => (
          <OptionStyled
            key={`${opt.value}-${idx}`}
            onClick={(e) => {
              e.stopPropagation();
              onOptionSelect(opt.value, opt.record);
            }}
            className="custom-option"
          >
            {opt.label}

            {isOptionSelected(opt?.value)}
          </OptionStyled>
        ))}
      </OptionsContainerStyled>
    </SelectDropDownContainer>
  );
};

export default SelectDropDown;
