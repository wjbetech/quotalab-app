"use client"

import React from 'react'
import { vars } from "@quotalab/qds-token"
import { Flex, Input, Popover, Radio } from "@quotalab/qds"
import { css } from "@emotion/css"
import { Icon } from '@quotalab/icons'

interface ButtonProps {
    primary?: boolean;
    label?: string;
    size?: "small" | "medium" | "large";
}

export const Button = ({
    primary = false,
    label,
    size,gi
    ...props
  }: ButtonProps) => {
    const mode = primary? "storybook-button--primary" : "storybook-button--secondary";
    return (
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        {...props}
      >
        {label}
        {/* define background-color and color CSS */}
        <style jsx>{`

        `}</style>
      </button>
    );
  };