import React, { useState } from "react";
import clsx from "clsx";
import "./style.css";
import { Icon } from "../Icon/Icon";

export interface AccordionItemProps {
  /** 标题 */
  title: string;
  /** 子组件 */
  children?: React.ReactNode;
  /** 是否默认展开 */
  defaultExpanded?: boolean;
  /** 自定义类名 */
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultExpanded = false,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={clsx("accordion-item", className)}>
      <button
        className="accordion-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="accordion-title">{title}</span>
        <span className={clsx("accordion-icon", { expanded: isExpanded })}>
          <Icon iconName="chevron-down" iconSize={[16, 16]} />
        </span>
      </button>
      <div
        className={clsx("accordion-content", { expanded: isExpanded })}
        role="region"
        aria-hidden={!isExpanded}
      >
        {children}
      </div>
    </div>
  );
};

export interface AccordionProps {
  /** 子组件（AccordionItem组件） */
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
  /** 自定义类名 */
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return (
    <div className={clsx("accordion", className)} role="presentation">
      {children}
    </div>
  );
};

export default { Accordion, AccordionItem };