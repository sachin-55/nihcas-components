import { useNavigate } from "react-router-dom";
import Flex from "../../components/Flex";
import Typography from "../Typography";
import { CSSProperties, Fragment } from "react";
import { useTheme } from "styled-components";

type Props = {
  breadcrumbs: { label: string; link: string }[];
  style?: CSSProperties;
};

const BreadCrumbs = ({ breadcrumbs, style }: Props) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleNavigation = (link: string) =>
    link ? navigate(link) : navigate(-1);

  return (
    <Flex inline style={style} alignItems="baseline">
      {Array.isArray(breadcrumbs) &&
        breadcrumbs.map((crumb, index) => {
          const isLastCrumb = breadcrumbs.length === index + 1;
          return (
            <Fragment key={crumb.label}>
              <div
                onClick={() => handleNavigation(crumb.link)}
                style={{ display: "inline" }}
              >
                <Typography
                  color={
                    isLastCrumb ? theme.colors.secondary : theme.colors.gray61
                  }
                  size={!isLastCrumb ? "xs" : "sm"}
                  fontWeight="medium"
                >
                  {crumb.label}
                </Typography>
              </div>
              {!isLastCrumb && (
                <Typography
                  style={{ margin: "0px 5px" }}
                  size="xs"
                  color={theme.colors.gray61}
                >
                  /
                </Typography>
              )}
            </Fragment>
          );
        })}
    </Flex>
  );
};

export default BreadCrumbs;
