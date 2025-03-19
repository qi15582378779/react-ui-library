import React from "react";
import Button from "../Button/Button";
import "./style.css";
import clsx from "clsx";
import ScrollArea from "../ScrollArea/ScrollArea";

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
  /** 是否显示滚动 */
  scroll?: boolean;
}

interface CardContentProps extends Pick<CardProps, 'title' | 'subTitle' | 'rightContent' | 'children'> {}

const CardContent: React.FC<CardContentProps> = ({ title, subTitle, rightContent, children }) => {
  return (
    <div className="card-content">
      <div className="heading">
        <div className="div">{title}</div>
        {rightContent || <Button size="default" text="测试按钮" variant="default" />}
      </div>
      <p className="p">{subTitle}</p>
      {children}
    </div>
  );
};

const CardComponent: React.FC<CardProps> = ({
  width = "570px",
  height,
  className,
  title = "测试标题",
  subTitle = "测试小标题",
  rightContent,
  children = "内容区域",
  variant = "default",
  scroll = false,
}) => {
  const content = (
    <CardContent
      title={title}
      subTitle={subTitle}
      rightContent={rightContent}
      children={children}
    />
  );

  return (
    <div
      className={clsx(className, "card-component")}
      data-variant={variant}
      style={{ width, height }}
    >
      {scroll ? <ScrollArea height={height}>{content}</ScrollArea> : content}
    </div>
  );
};

export default CardComponent;
