import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import Button from '../Button';
import { ITypographyProps } from '../Typography';
import { ParagraphStyled } from './style';

interface Props extends ITypographyProps {
  text?: string;
  numberOfLines?: number;
  children?: string;
  [key: string]: unknown;
}

const Paragraph = ({
  text,
  numberOfLines = 4,
  children,
  ...restProps
}: Props) => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const computedStyle = window.getComputedStyle(
        paragraphRef.current.children[0]
      );
      const lineHeightValue = computedStyle.getPropertyValue('line-height');
      const lineHeight = parseFloat(lineHeightValue) || 24;

      const maxShowingHeight = lineHeight * numberOfLines;
      const containerHeight = paragraphRef.current.clientHeight;

      setShowButton(maxShowingHeight <= containerHeight);
    }
  }, [text, children]);

  const handleToggleShowAllText = () => setShowAll((prev) => !prev);

  return (
    <div>
      <div ref={paragraphRef}>
        <ParagraphStyled
          $numberOfVisibleLines={numberOfLines}
          $showAll={showAll}
          {...restProps}
        >
          {children || text}
        </ParagraphStyled>
      </div>
      {showButton && (
        <Button
          variant="nostyle"
          onClick={handleToggleShowAllText}
          style={{ color: theme.colors.border, marginTop: '8px' }}
        >
          {showAll ? 'See Less' : 'See All'}
        </Button>
      )}
    </div>
  );
};

export default Paragraph;
