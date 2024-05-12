import React from "react";

import CloseSVG from "../../assets/icons/cross.svg?react";
import { ThemeType } from "../../theme";
import { Button } from "../Button";
import { AlertStyled } from "./style";
import Typography, { ITypographyProps } from "../Typography";

interface AlertPropsType {
  style?: React.CSSProperties;
  text: string;
  type?: "success" | "warning" | "info" | "error";
  actions?: {
    label: string;
    action: () => void;
  };
  onClose?: () => void;
  className?: string;
  textProps?: ITypographyProps;
}

const Alert = ({
  style = {},
  actions = undefined,
  onClose = undefined,
  text,
  type = "info",
  className = "",
  textProps = {},
}: AlertPropsType) => {
  const getbgColor = (t: typeof type): keyof ThemeType["colors"] => {
    if (t === "error") {
      return "barnRed";
    }
    if (t === "info") {
      return "duskBlue";
    }
    if (t === "warning") {
      return "hayYellow";
    }
    if (t === "success") {
      return "grassGreen";
    }
    return "duskBlue";
  };
  return (
    <AlertStyled className={`${className} ${type || "info"}`} style={style}>
      <Typography color="cloudWhite" {...textProps}>
        {text}
      </Typography>
      <div className="alert-action-wrapper">
        {!!actions && (
          <Button
            variant="solid"
            onClick={actions?.action}
            style={{
              padding: "0px 6px",
              flexShrink: 0,
              background: "rgba(0,0,0,0.2)",
            }}
            bgColor={getbgColor(type)}
            size="xsm"
            width="fit-content"
          >
            {actions?.label}
          </Button>
        )}
        {onClose && (
          <Button
            onClick={onClose}
            hoverBgColor="hex_B3"
            hoverColor="whiteSmoke"
            size="xsm"
            variant="no-style"
            padding="3px 5px"
            width="34px"
          >
            <CloseSVG className="close-icon" />
          </Button>
        )}
      </div>
    </AlertStyled>
  );
};

export default Alert;
