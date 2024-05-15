import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

import { flexCenter } from '../../style/reusableStyle';

export const FileInput = styled.input`
  display: none;
`;

export const BrowseButtonStyled = styled.label`
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
    color: ${({ theme }) => theme.colors.darkText};
  }
`;
export const BrowseButtonWrapperStyled = styled.div`
  height: 100px;
  width: 100px;
  display: flex;

  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.disable};
  position: relative;
`;

export const ImagesAndBrowserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  & .cursor-pointer {
    cursor: pointer;
  }
`;

// List Images below styles-------------------------------------------------

export const CloseIcon = styled(IoIosClose)`
  color: ${({ theme }) => theme.colors.darkText};
  background-color: #fffa;
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 32px;
  cursor: pointer;
  z-index: 10;
`;

export const ImagesWrapperStyled = styled.div<{ $imgGap: string }>`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ $imgGap }) => ($imgGap ? $imgGap : '20px')};

  & .cursor-pointer {
    cursor: pointer;
  }
`;

export const IndividualFileImageWrapper = styled.div<{
  $imgHeight: string;
  $imgWidth: string;
}>`
  position: relative;

  & img {
    border: 1px solid #dbdbdb;
    border-radius: 0px;
    height: ${({ $imgHeight }) => ($imgHeight ? $imgHeight : '100px')};
    width: ${({ $imgWidth }) => ($imgWidth ? $imgWidth : '100%')};
    min-width: 100px;
  }

  & .loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(10, 20, 30, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      color: #fff;
    }
  }
`;

export const IndividualURLImageWrapper = styled.div<{
  $imgHeight: string;
  $imgWidth: string;
}>`
  position: relative;

  & img {
    border: 1px solid #dbdbdb;
    border-radius: 0px;
    height: ${({ $imgHeight }) => ($imgHeight ? $imgHeight : '100px')};
    width: ${({ $imgWidth }) => ($imgWidth ? $imgWidth : '100%')};
    min-width: 100px;
  }

  & .loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(10, 20, 30, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      color: #fff;
    }
  }

  & .preview-overlay {
    display: none;
  }
  &:hover {
    & .preview-overlay {
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      cursor: pointer;
      ${flexCenter(0)};
    }
  }
`;
