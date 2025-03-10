import { SVGProps } from "react";
import { icons, IconName } from "./icons";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  name: IconName;
  size?: number | string;
  color?: string;
  title?: string;
}

export const Icon = ({
  name,
  size = 24,
  width,
  height,
  color = "currentColor",
  title,
  role = "img",
  "aria-label": ariaLabel,
  ...props
}: IconProps) => {
  const computedSize = typeof size === 'number' ? `${size}px` : size;
  const content = title ? `<title>${title}</title>${icons[name]}` : icons[name];

  return (
    <svg
      width={width || computedSize}
      height={height || computedSize}
      viewBox="0 0 24 24"
      role={role}
      aria-label={ariaLabel || title}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  );
};

export default Icon;