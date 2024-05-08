import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import styled from "styled-components";

import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import Flex from "../Flex";
import Input from "../Input";
import Typography from "../Typography";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect?: (values: string) => void;
  options?: { label: string; value: string }[];
  value: string;
  name?: string;
  noDataText?: string;
  placeholder?: string;
  [key: string]: any;
};

const AutoCompleteInput = ({
  onChange,
  value,
  onSelect,
  options,
  name,
  noDataText = "No Data Found",
  placeholder = "Enter text",
  ...restProps
}: Props) => {
  const containerRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectOutsideClick(
    containerRef,
    false
  );

  const closeOptions = () => setIsDropdownOpen(false);

  const filteredOptions = value
    ? options?.filter((opt) =>
        opt.label.toLowerCase().includes(value.toLowerCase())
      )
    : options;

  return (
    <AutoCompleteContainerStyled ref={containerRef}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        onClick={() => setIsDropdownOpen(true)}
        autoComplete="false"
        {...restProps}
      />
      {isDropdownOpen && (
        <AutoCompleteOptionsStyled>
          {filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((option) => {
              const isSelected = option.value === value;
              return (
                <OptionStyled
                  key={option.label}
                  onClick={() => {
                    if (onSelect) {
                      onSelect(option.value);
                      closeOptions();
                    }
                  }}
                >
                  {option.label}
                  {isSelected && (
                    <FaCheck
                      color="green"
                      size={14}
                      style={{ marginLeft: "14px" }}
                    />
                  )}
                </OptionStyled>
              );
            })
          ) : (
            <Flex direction="column">
              <Typography variant="caption">{noDataText} </Typography>
              <OptionStyled>
                <Typography
                  variant="normal"
                  onClick={() => {
                    if (onSelect) {
                      onSelect(value);
                      closeOptions();
                    }
                  }}
                >
                  {value}
                </Typography>
              </OptionStyled>
            </Flex>
          )}
        </AutoCompleteOptionsStyled>
      )}
    </AutoCompleteContainerStyled>
  );
};

export default AutoCompleteInput;

const AutoCompleteContainerStyled = styled.div`
  position: relative;
`;

const AutoCompleteOptionsStyled = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 100;

  right: 0;
  padding: 20px 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const OptionStyled = styled.div`
  padding: 10px 6px;
  margin-bottom: 3px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #8f91c1;
    color: white;
  }
`;
