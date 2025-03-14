import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { IconName } from "./name";

// 批量导入本地 `src/assets/icons/` 目录下的所有 SVG 图标
const icons = import.meta.glob("/src/assets/icons/*.svg", {
  eager: true,
}) as Record<string, { default: string }>;

export interface IconProps {
  name?: IconName;
  size?: number | string;
  color?: string;
  className?: string;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className,
  fallback,
  onError,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    const iconPath = icons[`/src/assets/icons/${name}.svg`]?.default;
    if (!iconPath) {
      console.error(`Icon "${name}" not found in assets/icons.`);
      return;
    }

    fetch(iconPath)
      .then((response) => response.text())
      .then((svg) => {
        console.log("Original SVG:", name, svg);

        // const finalSize = typeof size === "number" ? `${size}px` : size;

        // 替换 width、height 和颜色
        const updatedSvg = svg
          .replace(
            /<svg([^>]*?)width=["'][^"']*["']/g,
            `<svg$1width="${finalSize}"`
          )
          .replace(
            /<svg([^>]*?)height=["'][^"']*["']/g,
            `<svg$1height="${finalSize}"`
          )
          .replace(/stroke=["']([^"']+)["']/g, `stroke="${color}"`)
          .replace(/fill=["'](?!none)([^"']+)["']/g, `fill="${color}"`);

        console.log("Updated SVG:", name, updatedSvg);
        setSvgContent(updatedSvg);
      })
      .catch((error) => {
        console.error(`Failed to load icon: ${name}`, error);
        onError?.(error);
      });
  }, [name, color, size]);

  const finalSize = typeof size === "number" ? `${size}px` : size;

  if (!svgContent) {
    return (
      <div
        className={clsx("icon", className)}
        style={{ width: finalSize, height: finalSize }}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={clsx("icon", className)}
      style={{ width: finalSize, height: finalSize }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export type { IconName };
