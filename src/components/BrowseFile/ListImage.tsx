import { useState } from 'react';
import Viewer from 'react-viewer';

import Image from '../Image';
import Loader from '../Loader';
import Typograpgy from '../Typography';
import {
  CloseIcon,
  ImagesWrapperStyled,
  IndividualFileImageWrapper,
  IndividualURLImageWrapper,
} from './style';

const ListImages = ({
  files,
  setFiles,
  isLoading,
  imagesURL,
  onRemove,
  onRemoveFile,
  isDeletingIds = [],
  callbackAfterDeletion,
  enableRemoveImage = false,
  noWrapper = false,
  imageHeight = '100px',
  imageWidth = '100%',
  imageGap = '20px',
  enablePreview = true,
}: {
  files?: File[];
  setFiles?: Function;
  isLoading?: boolean;
  imagesURL?: { URL: string; id: string }[];
  onRemove?: (id: string) => void;
  onRemoveFile?: () => void;
  isDeletingIds?: string[];
  callbackAfterDeletion?: () => void;
  enableRemoveImage?: boolean;
  noWrapper?: boolean;
  imageHeight?: string;
  imageWidth?: string;
  imageGap?: string;
  enablePreview?: boolean;
}) => {
  const [showFullImageViewer, setShowFullImageViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const onRemoveFilesFromArray = (index: number) => {
    if (onRemoveFile) {
      onRemoveFile();
    } else {
      if (files && files?.length > 0) {
        files.splice(index, 1);
        if (setFiles) {
          setFiles([...files]);
        }
      }
    }
  };

  const handleRemoveImages = (id: string) => {
    if (onRemove) {
      onRemove(id);
    }
    if (callbackAfterDeletion) {
      callbackAfterDeletion();
    }
  };
  if (
    Array.isArray(files) &&
    files.length === 0 &&
    Array.isArray(imagesURL) &&
    imagesURL.length === 0
  ) {
    return null;
  }

  const renderImageFromFiles = () => {
    return (
      Array.isArray(files) &&
      files.length > 0 &&
      files.map((img, idx) => {
        if (
          !img.type.includes('image') &&
          !img.type.includes('application/pdf')
        ) {
          return null;
        }
        return (
          <div
            style={{ display: 'inline-block', width: 'inherit' }}
            key={`${img?.name}-${idx}`}
          >
            <IndividualFileImageWrapper
              $imgHeight={imageHeight}
              $imgWidth={imageWidth}
            >
              {!isLoading && (
                <CloseIcon
                  onClick={() => {
                    onRemoveFilesFromArray(idx);
                  }}
                />
              )}
              <Image
                src={
                  img.type.includes('image')
                    ? URL.createObjectURL(img)
                    : `https://via.placeholder.com/500?text=${img.name}`
                }
                alt="Image not uploaded yet."
              />

              {isLoading && (
                <div className="loader">
                  <Loader type="spinner" />
                </div>
              )}
            </IndividualFileImageWrapper>
            <Typograpgy
              style={{
                maxWidth: '100px',
                overflow: 'hidden',
                maxHeight: '10px',
              }}
              className="ellipsis"
              variant="smallText"
              fontColor="disableButton"
            >
              {img.name}
            </Typograpgy>
          </div>
        );
      })
    );
  };

  const renderImageFromURL = () => {
    return (
      Array.isArray(imagesURL) &&
      imagesURL.length > 0 &&
      imagesURL.map((img, idx) => (
        <IndividualURLImageWrapper
          className="image-wrapper"
          key={`${img?.id}-${idx}`}
          $imgHeight={imageHeight}
          $imgWidth={imageWidth}
        >
          {Array.isArray(isDeletingIds) &&
            !isDeletingIds?.includes(img.id) &&
            enableRemoveImage && (
              <CloseIcon
                onClick={() => {
                  handleRemoveImages(img.id);
                }}
              />
            )}
          <Image
            src={img?.URL}
            alt="Image already uploaded."
            onClick={() => {
              if (enablePreview) {
                setSelectedImageIndex(idx);
                setShowFullImageViewer(true);
              }
            }}
            className={enablePreview ? 'cursor-pointer' : ''}
          />
          {Array.isArray(isDeletingIds) && isDeletingIds?.includes(img.id) && (
            <div className="loader">
              <Loader type="spinner" />
            </div>
          )}
          {enablePreview && (
            <div
              className="preview-overlay"
              onClick={() => {
                if (enablePreview) {
                  setSelectedImageIndex(idx);
                  setShowFullImageViewer(true);
                }
              }}
            >
              Preview
            </div>
          )}
        </IndividualURLImageWrapper>
      ))
    );
  };
  return (
    <>
      {noWrapper ? (
        <>{renderImageFromURL()}</>
      ) : (
        <ImagesWrapperStyled $imgGap={imageGap}>
          {renderImageFromURL()}
        </ImagesWrapperStyled>
      )}
      {noWrapper ? (
        <>{renderImageFromFiles()}</>
      ) : (
        <ImagesWrapperStyled $imgGap={imageGap}>
          {renderImageFromFiles()}
        </ImagesWrapperStyled>
      )}
      {enablePreview && (
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
      )}
    </>
  );
};

export default ListImages;
