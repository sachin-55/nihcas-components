import React from 'react';
import { LuPlus } from 'react-icons/lu';

import ListImages from './ListImage';
import {
  BrowseButtonStyled,
  BrowseButtonWrapperStyled,
  FileInput,
  ImagesAndBrowserWrapper,
} from './style';

type Props = {
  files: File[];
  setFiles: (data: File[]) => void;
  accepts?: string;
  multiple?: boolean;
  isUploading?: boolean;
  showSelectFiles?: boolean;
  showFileBrowser?: boolean;
};

const defaultAccept = '.jpg, .png, .jpeg, .svg';

const index = ({
  files,
  setFiles,
  accepts = defaultAccept,
  multiple = false,
  isUploading = false,
  showSelectFiles = true,
  showFileBrowser = true,
}: Props) => {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target;
    if (!inputElement || !inputElement.files) {
      return;
    }

    const newFiles: File[] = Array.from(inputElement.files);

    setFiles(Array.isArray(files) ? [...files, ...newFiles] : newFiles);
  };

  const handleFileInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  };

  return (
    <ImagesAndBrowserWrapper>
      {showSelectFiles && (
        <ListImages
          files={files}
          setFiles={setFiles}
          noWrapper
          isLoading={isUploading}
        />
      )}

      {showFileBrowser && (
        <BrowseButtonWrapperStyled>
          <BrowseButtonStyled htmlFor="file-upload">
            <LuPlus className="icon" />
          </BrowseButtonStyled>
          <FileInput
            type="file"
            onChange={_onChange}
            onClick={handleFileInputClick}
            accept={accepts}
            multiple={multiple}
            id="file-upload"
          />
        </BrowseButtonWrapperStyled>
      )}
    </ImagesAndBrowserWrapper>
  );
};

export default index;
