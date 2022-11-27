import React from "react";
import { ButtonHTMLAttributes, ReactNode, useRef } from "react";
import { forwardRef } from "react";
import classNames from "classnames";
import styles from "./ButtonBase.m.scss";

export const ButtonBase = forwardRef(
	(
		{
			className,
			startIcon = null,
			endIcon = null,
			animationDuration = 500,
			children,
			...props
		},
		ref
	) => {
		// const buttonRef = useRef(null);
		// const commonRef = ref || buttonRef;

		// /* @ts-ignore */
		// useRipple(commonRef, {
		// 	disabled: !ripple,
		// 	animationLength: animationDuration,
		// });

		return (
			<button
				className={classNames(styles.btn, className)}
				// ref={commonRef}
				{...props}
			>
				{startIcon && <span className={styles.startIcon}>{startIcon}</span>}
				{children}
				{endIcon && <span className={styles.endIcon}>{endIcon}</span>}
			</button>
		);
	}
);

ButtonBase.displayName = "ButtonBase";
