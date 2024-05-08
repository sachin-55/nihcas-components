import styled from 'styled-components';

const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: blur(0px);
  animation: fadeIn 1.5s ease-in-out;
  background: #6663;

  &.noImage {
    object-fit: contain;
  }

  @keyframes fadeIn {
    from {
      filter: blur(10px);
      opacity: 0;
    }
    to {
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export default ImageStyled;
