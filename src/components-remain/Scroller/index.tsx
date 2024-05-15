import React, {
  CSSProperties,
  ReactNode,
  RefObject,
  useEffect,
  useState,
} from "react";
import Button from "../Button";
import styled from "styled-components";

type Props = {
  wrapperRef: RefObject<HTMLDivElement>;
  children: ReactNode;
  buttonTopOffSet?: CSSProperties["top"];
};

const Scroller = ({ wrapperRef, children, buttonTopOffSet }: Props) => {
  const [showScroller, setShowScroller] = useState({
    left: false,
    right: false,
  });
  useEffect(() => {
    if (wrapperRef.current) {
      const wrapper = wrapperRef.current;
      let scrollWidth = wrapper.scrollWidth;
      let containerWidth = wrapper.clientWidth;
      if (
        !showScroller.left &&
        !showScroller.right &&
        scrollWidth > containerWidth
      ) {
        setShowScroller({
          left: false,
          right: true,
        });
      }
      const handleScroll = () => {
        scrollWidth = wrapper.scrollWidth;
        containerWidth = wrapper.clientWidth;

        if (scrollWidth !== containerWidth) {
          const showLeftArrow = wrapper.scrollLeft > 10;
          const showRightArrow =
            wrapper.scrollLeft !== scrollWidth - containerWidth;
          setShowScroller({
            left: showLeftArrow,
            right: showRightArrow,
          });
        } else {
          setShowScroller({
            left: false,
            right: false,
          });
        }
      };

      wrapper.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        wrapper.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, []);

  const handleScroll = (key: "left" | "right") => {
    if (wrapperRef.current) {
      const wrapper = wrapperRef.current;
      if (key === "left") {
        wrapper.scrollBy({ behavior: "smooth", left: -250 });
      } else {
        wrapper.scrollBy({ behavior: "smooth", left: 250 });
      }
    }
  };

  return (
    <ProviderContainerStyled>
      {showScroller?.left && (
        <ArrowButtonContainerStyled $position="left" $top={buttonTopOffSet}>
          <Button
            variant="icon"
            style={{ transform: "rotate(180deg)" }}
            onClick={() => handleScroll("left")}
          >
            Left
          </Button>
        </ArrowButtonContainerStyled>
      )}
      {showScroller?.right && (
        <ArrowButtonContainerStyled $position="right" $top={buttonTopOffSet}>
          <Button variant="icon" onClick={() => handleScroll("right")}>
            Right
          </Button>
        </ArrowButtonContainerStyled>
      )}
      {children}
    </ProviderContainerStyled>
  );
};

export default Scroller;

const ProviderContainerStyled = styled.div`
  max-width: 100%;
  position: relative;
  overflow: hidden;
  height: 270px;
`;

const ArrowButtonContainerStyled = styled.div<{
  $position: "left" | "right";
  $top?: CSSProperties["top"];
}>`
  position: absolute;
  right: ${({ $position }) => ($position === "right" ? 0 : "auto")};
  left: ${({ $position }) => ($position === "left" ? 0 : "auto")};
  top: ${({ $top }) => $top || "66px"};
  z-index: 100;
`;
