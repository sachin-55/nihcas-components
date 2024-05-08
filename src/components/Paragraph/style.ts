import styled, { css } from "styled-components";

import { multipleLineTextEllipse } from "../../style/reusableStyle";
import Typography from "../Typography";

export const ParagraphStyled = styled(Typography)<{
  $numberOfVisibleLines?: number;
  $showAll: boolean;
}>`
  width: 100%;
  line-height: 1.5;
  white-space: break-spaces;
  overflow-wrap: break-word;
  ${({ $numberOfVisibleLines, $showAll }) =>
    $showAll ? css`` : multipleLineTextEllipse($numberOfVisibleLines || 3)}
`;
