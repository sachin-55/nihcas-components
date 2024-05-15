import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

type Props = {
  files?: any;
  setFiles: Function;
};
const accept = 'image/jpg, image/png, image/jpeg, image/gif';

const ImageBrowser = ({ files, setFiles }: Props) => {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target;
    if (!inputElement || !inputElement.files) {
      return;
    }

    const newFiles: File[] = Array.from(inputElement.files);

    setFiles((prev: any) =>
      Array.isArray(prev) ? [...prev, ...newFiles] : newFiles,
    );
  };

  return (
    <BrowseButtonWrapperStyled>
      <BrowseButtonStyled htmlFor="file-upload">
        <FontAwesomeIcon icon="plus" className="icon" />
      </BrowseButtonStyled>
      <FileInput
        type="file"
        onChange={_onChange}
        accept={accept}
        multiple={true}
        id="file-upload"
      />
    </BrowseButtonWrapperStyled>
  );
};

export default ImageBrowser;
const FileInput = styled.input`
  display: none;
`;

const BrowseButtonStyled = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .icon {
    height: 30px;
    width: 30px;
    color: #808080;
  }
`;
const BrowseButtonWrapperStyled = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin: 10px;

  position: relative;
`;
