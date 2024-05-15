import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Viewer from 'react-viewer';
import styled from 'styled-components';
import ImageWithFallBack from '../ImageWithFallBack';

const SmallImageViewer = ({
  files,
  setFiles,
  isLoading,
  imagesURL,
  onRemove,
  isDeletingIds,
  callbackAfterDeletion,
  enableRemoveImage = true,
}: {
  files?: any;
  setFiles?: Function;
  isLoading?: boolean;
  imagesURL?: { URL: string; id: number }[];
  onRemove?: (id: number) => void;
  isDeletingIds?: number[];
  callbackAfterDeletion?: () => void;
  enableRemoveImage?: boolean;
}) => {
  const [showFullImageViewer, setShowFullImageViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const onRemoveFilesFromArray = (index: number) => {
    files.splice(index, 1);
    setFiles && setFiles([...files]);
  };

  const handleRemoveImages = (id: number) => {
    onRemove && onRemove(id);
    callbackAfterDeletion && callbackAfterDeletion();
  };
  if (
    Array.isArray(files) &&
    files.length === 0 &&
    Array.isArray(imagesURL) &&
    imagesURL.length === 0
  ) {
    return null;
  }
  return (
    <>
      <ImagesWrapperStyled>
        {Array.isArray(imagesURL) &&
          imagesURL.length > 0 &&
          imagesURL.map((img, idx) => (
            <div className="image-wrapper">
              {Array.isArray(isDeletingIds) &&
                !isDeletingIds?.includes(img.id) &&
                enableRemoveImage && (
                  <CloseIcon
                    icon="times-circle"
                    onClick={() => {
                      handleRemoveImages(img.id);
                    }}
                  />
                )}
              <ImageWithFallBack
                src={img?.URL}
                alt="Image already uploaded."
                onClick={() => {
                  setSelectedImageIndex(idx);
                  setShowFullImageViewer(true);
                }}
                className="cursor-pointer"
              />
              {Array.isArray(isDeletingIds) &&
                isDeletingIds?.includes(img.id) && (
                  <div className="loader">
                    <FontAwesomeIcon icon="circle-notch" spin size="2x" />
                  </div>
                )}
            </div>
          ))}
      </ImagesWrapperStyled>
      <ImagesWrapperStyled>
        {Array.isArray(files) &&
          files.length > 0 &&
          files.map((img, idx) => (
            <div className="image-wrapper">
              {!isLoading && (
                <CloseIcon
                  icon="times-circle"
                  onClick={() => {
                    onRemoveFilesFromArray(idx);
                  }}
                />
              )}
              <ImageWithFallBack
                src={URL.createObjectURL(img)}
                alt="Image not uploaded yet."
              />
              {isLoading && (
                <div className="loader">
                  <FontAwesomeIcon icon="circle-notch" spin size="2x" />
                </div>
              )}
            </div>
          ))}
      </ImagesWrapperStyled>
      <Viewer
        visible={showFullImageViewer}
        onClose={() => {
          setShowFullImageViewer(false);
          setSelectedImageIndex(0);
        }}
        onMaskClick={() => {
          setShowFullImageViewer(false);
          setSelectedImageIndex(0);
        }}
        images={
          (Array.isArray(imagesURL) &&
            imagesURL.map((image, index) => ({
              src: image?.URL,
              alt: `image-${index}`,
            }))) ||
          []
        }
        activeIndex={selectedImageIndex}
        zIndex={9999999}
      />
    </>
  );
};

export default SmallImageViewer;

const CloseIcon = styled(FontAwesomeIcon)`
  color: red;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
`;

const ImagesWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin: 20px 0px;

  & .image-wrapper {
    position: relative;
    & img {
      border: 1px solid #dbdbdb;
      border-radius: 10px;
      height: 100px;
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
  }

  & .cursor-pointer {
    cursor: pointer;
  }
`;
