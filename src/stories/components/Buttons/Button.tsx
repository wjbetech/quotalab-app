"use client"

import React from 'react'
import { vars } from "@quotalab/qds-token"
import { Button as _Button } from "@quotalab/qds"
import { css } from "@emotion/css"

interface ButtonProps {
    primary?: boolean;
    label?: string;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    backgroundColor?: string;
}

export const Button = ({
    primary = false,
    label,
    size,
    backgroundColor,
    onClick,
    ...props
  }: ButtonProps) => {
    return (
      <_Button
        type="button"
        className={css`
          width: 100px;
          border-radius: 24px;
          padding: 10px;
          font-size: ${vars.fontSize.bodyLarge};
          background-color: ${vars.color.scaleGreen300};
        `}
        {...props}
      >
        {label}
      </_Button>
    );
  };