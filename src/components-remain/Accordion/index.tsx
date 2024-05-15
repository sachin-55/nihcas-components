import React, { ReactNode, useState } from "react";

import { ReactComponent as ChevronIcon } from "../../assets/icons/downChevron.svg";
import Typography from "../Typography";
import { FontColorType, VariantType } from "../Typography/type";
import {
  AccordionContainerStyled,
  AccordionContent,
  AccordionStyled,
  AccordionTitle,
} from "./style";

type Props = {
  items: Array<{
    content: ReactNode;
    title: ReactNode;
    titleFontVariant?: VariantType;
    icon?: ReactNode;
    fontColor?: FontColorType;
    key: string;
  }>;
  onClick?: (key: string, e: React.MouseEvent) => void;
  maxVhContentHeight?: string;
};

const Accordion = ({
  items,
  maxVhContentHeight = "calc(100vh - 140px)",
}: Props) => {
  const [openAccordion, setOpenAccordion] = useState("");

  return (
    <AccordionContainerStyled>
      {items.map((item, idx) => (
        <AccordionStyled className="accordion" key={`${item.key}-${idx}`}>
          <AccordionTitle
            className="accordion-title"
            onClick={() =>
              setOpenAccordion((prev) => (prev === item.key ? "" : item.key))
            }
            $isOpen={openAccordion === item.key}
          >
            <div className="title-icon-wrapper">
              {item?.icon && item?.icon}
              {typeof item?.title === "string" ? (
                <Typography
                  variant={item.titleFontVariant}
                  fontColor={item.fontColor}
                  strong
                >
                  {item.title}
                </Typography>
              ) : (
                item?.title
              )}
            </div>
            <ChevronIcon className="chevron-icon" />
          </AccordionTitle>
          {/* {item.key === openAccordion && ( */}
          <AccordionContent
            className="accordion-content"
            $isOpen={openAccordion === item.key}
            $maxHeight={maxVhContentHeight}
          >
            {item.content}
          </AccordionContent>
          {/* )} */}
        </AccordionStyled>
      ))}
    </AccordionContainerStyled>
  );
};

export default Accordion;
