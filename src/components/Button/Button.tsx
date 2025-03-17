import React from "react";
import { Icon } from "../Icon/Icon";
import { IconName } from "../Icon/name";
import "./style.css";
import clsx from "clsx";
import type { IconProps } from "../Icon/Icon";

export interface ButtonProps extends IconProps {
  /** 按钮文本 */
  text?: string;
  /** 按钮大小 */
  size?: "sm" | "icon" | "lg" | "default";
  /** 按钮变体样式 */
  variant?: "neutral" | "no-shadow" | "default";
  /** 自定义类名 */
  buttonClassName?: string;
  /** 链接地址 */
  href?: string;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 新窗口打开链接 */
  openInNewTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text = "Button",
  size = "default",
  variant = "default",
  buttonClassName = "",
  href,
  iconName,
  iconSrc,
  onClick,
  disabled = false,
  openInNewTab = true,
  iconSize = 24,
  iconColor = "currentColor",
}) => {
  const buttonClass = clsx(
    "button",
    size,
    variant,
    {
      disabled,
      "size-icon-variant": size === "icon" && (variant === "default" || variant === "neutral"),
      "size-icon-variant-no": size === "icon" && variant === "no-shadow"
    },
    buttonClassName
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const content = size === "icon" && iconName ? (
    <Icon
      iconName={iconName as IconName}
      iconSize={iconSize}
      iconSrc={iconSrc}
      iconColor={iconColor}
    />
  ) : (
    text
  );

  const buttonContent = href ? (
    <a
      className="text-wrapper"
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      onClick={e => disabled && e.preventDefault()}
    >
      {content}
    </a>
  ) : (
    <div className="text-wrapper">
      {content}
    </div>
  );

  return (
    <div 
      className={buttonClass}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      {buttonContent}
    </div>
  );
};

export default Button;