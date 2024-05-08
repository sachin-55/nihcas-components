import {
  MediaQueryAllQueryable,
  MediaQueryMatchers,
  useMediaQuery,
} from "react-responsive";
import { BREAKPOINTS, media } from "../styles/themes/constants";

interface ResponsiveReturnValues {
  isMobile: boolean;
  isLargeMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeScreen: boolean;
  isBigScreen: boolean;
  mobileOnly: boolean;
  tabletOnly: boolean;
  desktopOnly: boolean;
  useMediaQuery: (
    settings: Partial<MediaQueryAllQueryable & { query?: string | undefined }>,
    device?: MediaQueryMatchers,
    callback?: (matches: boolean) => void
  ) => boolean;
}

export const useResponsive = (): ResponsiveReturnValues => {
  const isMobile = useMediaQuery({ query: media.xs });
  const isLargeMobile = useMediaQuery({ query: media.sm });
  const isTablet = useMediaQuery({ query: media.md });
  const isLargeScreen = useMediaQuery({ query: media.lg });
  const isDesktop = useMediaQuery({ query: media.xl });
  const isBigScreen = useMediaQuery({ query: media.xxl });

  const mobileOnly = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS.md - 0.02}px)`,
  });

  const tabletOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${
      BREAKPOINTS.xl - 0.02
    }px)`,
  });

  const desktopOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.xl}px) and (max-width: ${
      BREAKPOINTS.xxl - 0.02
    }px)`,
  });

  return {
    isMobile,
    isLargeMobile,
    isTablet,
    isLargeScreen,
    isDesktop,
    isBigScreen,
    mobileOnly,
    tabletOnly,
    desktopOnly,
    useMediaQuery,
  };
};
