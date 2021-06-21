import React, { ReactNode } from "react";
import cx from "clsx";
import { styled, Theme } from "@material-ui/core/styles";
import { SxProps } from "@material-ui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { infoClasses } from "./infoClasses";
import { useStylesCtx, AppendUseStyles } from "./Info";

export type InfoParagraphProps = {
  /**
   * className append to the root element
   */
  className?: string;

  component?: React.ElementType;

  children: ReactNode;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & Omit<JSX.IntrinsicElements["p"], "ref">;

const InfoParagraphRoot = styled("p", {
  name: "JunInfo",
  slot: "Paragraph",
  overridesResolver: (props, styles) => styles.paragraph,
})<{ styleProps: AppendUseStyles<InfoParagraphProps> }>(
  ({ theme, styleProps }) => ({
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
    fontSize: "1rem",
    margin: 0,
    ...styleProps.useStyles(theme).paragraph,
  })
);

export const InfoParagraph: OverridableComponent<InfoParagraphProps> =
  React.forwardRef<HTMLParagraphElement, InfoParagraphProps>(
    function InfoParagraph(props, ref) {
      const { children, component, className, ...other } = props;
      const useStyles = useStylesCtx();
      return (
        <InfoParagraphRoot
          ref={ref}
          {...other}
          as={component}
          className={cx(infoClasses.paragraph, className)}
          styleProps={{ ...props, useStyles }}
        >
          {children}
        </InfoParagraphRoot>
      );
    }
  );

/**
 * @deprecated use InfoSubtitle instead
 */
export const InfoSubtitle = InfoParagraph;
