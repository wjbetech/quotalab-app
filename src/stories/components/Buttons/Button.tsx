"use client"

import React from 'react'
import { vars } from "@quotalab/qds-token"
import { Button as _Button, ButtonProps } from "@quotalab/qds"
import { css } from "@emotion/css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const Button = ({
  label,
  onClick,
  ...ButtonProps
}: ButtonProps<typeof _Button>) => {

  const buttonStyles = css`
    @font-face {
      font-family: ${inter.className};
    }
    background-color: ${ButtonProps.variant === "primary" ? "#3582c4" : ButtonProps.variant === "secondary" ? "#00a32a" : ButtonProps.variant === "danger" ? "#e65064" : ButtonProps.variant === "ghost" ? "#f0f0f1" : "transparent"};
    border: ${ButtonProps.border || "none"};
    color: ${ButtonProps.color || "white"};
    font-size: ${ButtonProps.size === "xsmall" ? "0.75rem" : ButtonProps.size === "small" ? "1rem" : ButtonProps.size === "medium" ? "1.25rem" : "1.5rem"};
    box-shadow: ${vars.boxShadow.medium};
    padding: ${ButtonProps.size === "xsmall" ? "0.25rem 0.5rem" : ButtonProps.size === "small" ? "0.5rem 1rem" : ButtonProps.size === "medium" ? "1rem 1.5rem" : "1.5rem 2rem"};
  `

  return (
    <_Button
      type="button"
      className={buttonStyles}
      {...ButtonProps}
    >
      {label}
    </_Button>
  );
}