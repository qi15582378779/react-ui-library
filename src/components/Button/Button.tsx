import * as React from "react";

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
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  color = "red",
  children,
  onClick,
}) => {
  // 根据按钮变体设置样式
  // 根据按钮大小设置样式
  const sizeClasses: Record<ButtonSize, string> = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  // 根据按钮颜色和变体设置样式
  const getColorClass = (color: ButtonColor, variant: ButtonVariant): string => {
    if (variant === "tertiary") {
      return {
        red: "text-red-500 hover:text-red-700",
        green: "text-green-500 hover:text-green-700",
        blue: "text-blue-500 hover:text-blue-700",
      }[color];
    }
    return {
      red: "bg-red-500 hover:bg-red-700 text-white",
      green: "bg-green-500 hover:bg-green-700 text-white",
      blue: "bg-blue-500 hover:bg-blue-700 text-white",
    }[color];
  };

  // 根据按钮变体设置基础样式
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "font-bold py-2 px-4 rounded",
    secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",
    tertiary: "bg-transparent hover:bg-gray-50 font-semibold py-2 px-4 border border-gray-400 rounded",
  };

  const colorClass = getColorClass(color, variant);
  const sizeClass = sizeClasses[size];
  const variantClass = variantClasses[variant];
  const buttonClasses = `px-4 py-2 rounded-md focus:outline-none ${variantClass} ${sizeClass} ${colorClass}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
