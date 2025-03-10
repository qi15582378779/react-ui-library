import React from "react";
import "./Button.css";

// 定义按钮的变体类型
type ButtonVariant = "primary" | "secondary" | "tertiary";

// 定义按钮的大小类型
type ButtonSize = "small" | "medium" | "large";

// 定义按钮的颜色类型
type ButtonColor = "red" | "green" | "blue";

// 定义按钮组件的 props 类型
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  color = "red",
  className = "",
  children,
  onClick,
}) => {
  // 直接使用类名，不需要通过 styles 对象
  const buttonClasses = [
    "elegant-button",
    `elegant-${variant}`,
    `elegant-${size}`,
    `elegant-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
