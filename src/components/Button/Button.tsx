import React from "react";
import { Icon } from "../Icon/Icon";
// import { IconName } from "../Icon/icons";
import "./style.css";
import clsx from "clsx";

export interface ButtonProps {
  /** 按钮文本 */
  text?: string;
  /** 按钮大小 */
  size?: "sm" | "icon" | "lg" | "default";
  /** 按钮变体样式 */
  variant?: "neutral" | "no-shadow" | "default";
  /** 自定义类名 */
  className?: string;
  /** 链接地址 */
  href?: string;
  /** 图标名称 */
  iconName?: string;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 新窗口打开链接 */
  openInNewTab?: boolean;
  /** 图标大小 */
  iconSize?: number;
  /** 图标颜色 */
  iconColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "Button",
  size = "default",
  variant = "default",
  className = "",
  href,
  iconName = 'user',
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
    className
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const content = size === "icon" && iconName ? (
    // <Icon
    //   name={iconName}
    //   size={iconSize}
    //   color={iconColor}
    // />
    1
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