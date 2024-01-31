"use client"

// import React from 'react'
// import { vars } from "@quotalab/qds-token"
// import { Button as _Button } from "@quotalab/qds"
// import { css } from "@emotion/css"

// interface ButtonProps {
//     primary?: boolean;
//     label?: string;
//     size?: "small" | "medium" | "large";
//     onClick?: () => void;
//     backgroundColor?: string;
// }

// export const Button = ({
//     primary = false,
//     label,
//     size,
//     onClick,
//     ...props
//   }: ButtonProps) => {
//     return (
//       <_Button
//         type="button"
//         className={css`
//           width: 100px;
//           border-radius: 24px;
//           padding: 10px;
//           font-size: ${vars.fontSize.bodyLarge};
//           background-color: ${vars.color.scaleGreen300};
//         `}
//         {...props}
//       >
//         {label}
//       </_Button>
//     );
//   };

import React from 'react'
import { vars } from "@quotalab/qds-token"
import { Button as _Button, ButtonProps } from "@quotalab/qds"
import { css } from "@emotion/css"

export const Button = ({
  label,
  onClick,
  ...ButtonProps
}: ButtonProps<typeof _Button>) => {
  return (
    <_Button
      type="button"
      className={css`
        background-color: ${ButtonProps.backgroundColor};
        border: ${ButtonProps.border || "none"};
        color: ${ButtonProps.color || "white"};
        border-radius: 24px;
        padding: 12px 16px;
        font-size: ${vars.fontSize.bodyLarge};
        cursor: pointer;
        box-shadow: ${vars.boxShadow.medium};
      `}
      {...ButtonProps}
    >
      {label}
    </_Button>
  );
}