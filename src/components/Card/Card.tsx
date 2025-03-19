import React from "react";
import Button, { ButtonProps } from "../Button/Button";
import "./style.css";
import clsx from "clsx";

export interface CardProps {
  /** 宽度 */
  width?: string;
  /** 高度 */
  height?: string;
  /** class */
  className?: string;
  /** 标题 */
  title?: string;
  /** 子标题 */
  subTitle?: string;
  /** 右上角内容区域 */
  rightContent?: React.ReactNode;
  /** 子组件 */
  children?: React.ReactNode;
  /** 变体样式 */
  variant?: "default" | "no-shadow";
}

const CardComponent: React.FC<CardProps> = ({
  width = "570px",
  height,
  className,
  title = "测试标题",
  subTitle = "测试小标题",
  rightContent,
  children = "内容区域",
  variant = "default",
}) => {
  return (
    <div
      className={clsx(className, "card-component")}
      data-variant={variant}
      style={{ width: width, height: height }}
    >
      <div className="heading">
        <div className="div">{title}</div>

        {rightContent ? (
          rightContent
        ) : (
          <Button href="" size="default" text="测试按钮" variant="default" />
        )}
      </div>

      <p className="p">{subTitle}</p>

      {children}
    </div>
  );
};

export default CardComponent;
