import React, { useRef, useEffect, useState } from "react";
import { styled } from "styled-components";
import { devices } from "utils/theme";

interface SliderProps {
  gap: number;
  wrapperHeight?: number;
  overflowHide?: boolean;
  $wrapperHeight?: number;
  $overflowHide?: boolean;
}

const SliderStyled = styled.div<SliderProps>`
  height: ${({ $wrapperHeight }) =>
    $wrapperHeight ? $wrapperHeight + "px" : "50px"};
  cursor: pointer;

  & .slider-container {
    max-width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 0px 10px;

    @media ${devices.mobileXS} {
      padding: 0 5px;
    }

    & .content-wrapper {
      height: ${({ $wrapperHeight }) =>
        $wrapperHeight ? $wrapperHeight + "px" : "50px"};
      display: flex;
      align-items: center;
      gap: ${({ gap }) => (gap ? gap + "px" : "10px")};
    }

    &::-webkit-scrollbar {
      height: 0px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #3e3c3c;
      outline: 1px solid #3e3c3c;
      border-radius: 6px;
    }
  }
`;

interface ISliderProps extends React.ComponentProps<"div"> {
  style?: React.CSSProperties;
  gap?: number;
  wrapperHeight?: number;
  overflowHide?: boolean;
  $overflowHide?: boolean;
}

const Slider: React.FC<React.PropsWithChildren<ISliderProps>> = ({
  style = {},
  children,
  gap = 20,
  wrapperHeight = 42,
  overflowHide = true,
  ...restProps
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isWheel, setIsWheel] = useState(false);
  useEffect(() => {
    let SliderContainer = sliderRef?.current;
    if (typeof window != "undefined" && window.document && sliderRef?.current) {
      const container = sliderRef?.current;
      SliderContainer = container;
      if (container) {
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;
        const handleMouseDownEvent = (e: MouseEvent) => {
          isDown = true;
          startX = e.pageX - container.offsetLeft;
          scrollLeft = container.scrollLeft;
        };

        const handleMouseLeaveEvent = (e: MouseEvent) => {
          isDown = false;
        };

        const handleMouseMoveEvent = (e: MouseEvent) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - container.offsetLeft;
          const walk = (x - startX) * 4; //scroll-fast
          container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener("wheel", handleMouseWheelEvent);
        container.addEventListener("mousedown", handleMouseDownEvent);
        container.addEventListener("mouseleave", handleMouseLeaveEvent);
        container.addEventListener("mouseup", handleMouseLeaveEvent);
        container.addEventListener("mousemove", handleMouseMoveEvent);
      }
    }
    return () => {
      if (typeof window != "undefined" && window.document && SliderContainer) {
        // const container = document.getElementById("custom-horizontal-scroller");
        const container = SliderContainer;

        if (container) {
          let isDown = false;
          let startX = 0;
          let scrollLeft = 0;
          const handleMouseDownEvent = (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
          };

          const handleMouseLeaveEvent = (e: MouseEvent) => {
            isDown = false;
          };

          const handleMouseMoveEvent = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 4; //scroll-fast
            container.scrollLeft = scrollLeft - walk;
          };

          container.removeEventListener("wheel", handleMouseWheelEvent);
          container.removeEventListener("mousedown", handleMouseDownEvent);
          container.removeEventListener("mouseleave", handleMouseLeaveEvent);
          container.removeEventListener("mouseup", handleMouseLeaveEvent);
          container.removeEventListener("mousemove", handleMouseMoveEvent);
        }
      }
    };
  }, [sliderRef]);

  const handleMouseWheelEvent = (e: WheelEvent) => {
    const container = sliderRef?.current;

    if (container) {
      if (Math.abs(e.deltaX) === 0) {
        if (e.deltaY > 0) {
          container.scrollLeft += 200;
          // e.preventDefault();
        } else {
          container.scrollLeft -= 200;

          // e.preventDefault();
        }
      } else {
        if (e.deltaX > 0 || e.deltaX > 5) {
          container.scrollLeft += 300;
          // e.preventDefault();
        } else {
          container.scrollLeft -= 300;
          // e.preventDefault();
        }
      }
    }
  };

  return (
    <SliderStyled
      gap={gap}
      $wrapperHeight={wrapperHeight}
      style={style}
      $overflowHide={overflowHide}
      {...restProps}
    >
      <div className="slider-container" ref={sliderRef}>
        <div className="content-wrapper">
          {/* Pass sliderRef to children */}
          {children &&
            React.Children.map(
              children,
              (child) =>
                child &&
                React.cloneElement(child as React.ReactElement, {
                  sliderref: sliderRef,
                })
            )}
        </div>
      </div>
    </SliderStyled>
  );
};

export default Slider;
