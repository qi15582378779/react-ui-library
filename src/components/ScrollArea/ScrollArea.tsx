import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./style.css";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 容器宽度 */
  width?: string | number;
  /** 容器高度 */
  height?: string | number;
  /** 容器最大高度 */
  maxHeight?: string | number;
  /** 是否自动隐藏滚动条 */
  autoHide?: boolean;
  /** 滚动条隐藏延迟时间(ms) */
  autoHideDelay?: number;
  /** 子元素 */
  children?: React.ReactNode;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  width,
  height,
  maxHeight,
  autoHide = false,
  children,
  style,
  className,
  ...rest
}) => {
  return (
    <SimpleBar
      style={{
        width,
        height,
        maxHeight,
        ...style,
      }}
      className={`scrollarea ${className || ""}`}
      autoHide={autoHide}
      {...rest}
    >
      {children}
    </SimpleBar>
  );
};

export default ScrollArea;
