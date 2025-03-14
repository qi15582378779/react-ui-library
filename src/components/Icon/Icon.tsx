import React, { useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import { IconName } from "./name";

// 批量导入本地 `src/assets/icons/` 目录下的所有 SVG 图标
const icons = import.meta.glob("/src/assets/icons/*.svg", {
  eager: true,
}) as Record<string, { default: string }>;

export interface IconProps {
  iconName?: IconName;
  iconSrc?: string;
  iconSize?: number | string | [number, number]; // ✅ 支持 [width, height]
  iconColor?: string;
  iconClassName?: string;
  iconFallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

export const Icon: React.FC<IconProps> = ({
  iconName,
  iconSrc,
  iconSize = 24,
  iconColor = "currentColor",
  iconClassName,
  iconFallback,
  onError,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  // ✅ 计算最终的宽高
  const finalSize = useMemo(() => {
    if (Array.isArray(iconSize) && iconSize.length === 2) {
      return { width: `${iconSize[0]}px`, height: `${iconSize[1]}px` };
    }
    const sizeStr = typeof iconSize === "number" ? `${iconSize}px` : iconSize;
    return { width: sizeStr, height: sizeStr };
  }, [iconSize]);

  useEffect(() => {
    let svgPath =
      iconSrc || (iconName ? icons[`/src/assets/icons/${iconName}.svg`]?.default : null);
    if (!svgPath) {
      console.error(`Icon "${iconName}" not found.`);
      return;
    }

    // ✅ 处理用户传入的 `src`
    if (iconSrc) {
      if (iconSrc.startsWith("http") || iconSrc.startsWith("data:image/svg+xml")) {
        // ✅ 外部 HTTP URL 或 Base64 SVG
        svgPath = iconSrc;
      } else if (iconSrc.startsWith("/")) {
        // ✅ 绝对路径 `/icons/edit.svg`
        svgPath = `${window.location.origin}${iconSrc}`;
      } else if (iconSrc.startsWith("./") || iconSrc.startsWith("../")) {
        // ✅ 处理相对路径 `./icons/edit.svg`
        const baseUrl = window.location.href;
        svgPath = new URL(iconSrc, baseUrl).href;
      }
    }

    fetch(svgPath)
      .then((response) => response.text())
      .then((svg) => {
        console.log("Original SVG:", iconName || iconSrc, svg);

        const { width, height } = finalSize;

        // ✅ 替换 width、height
        let updatedSvg = svg
          .replace(
            /<svg([^>]*?)width=["'][^"']*["']/g,
            `<svg$1width="${width}"`
          )
          .replace(
            /<svg([^>]*?)height=["'][^"']*["']/g,
            `<svg$1height="${height}"`
          );

        // ✅ 处理 fill 和 stroke
        updatedSvg = updatedSvg
          .replace(/stroke=["']([^"']+)["']/g, `stroke="${iconColor}"`) // 修改 stroke
          .replace(/fill=["'](?!none|url\(#)([^"']+)["']/g, `fill="${iconColor}"`); // ✅ 只替换普通颜色，不替换 `url(#...)`

        console.log("Updated SVG:", iconName || iconSrc, updatedSvg);
        setSvgContent(updatedSvg);
      })
      .catch((error) => {
        console.error(`Failed to load icon: ${iconName || iconSrc}`, error);
        onError?.(error);
      });
  }, [iconName, iconSrc, iconColor, finalSize]);

  if (!svgContent) {
    return <div className={clsx("icon", iconClassName)}>{iconFallback}</div>;
  }

  return (
    <div
      className={clsx("icon", iconClassName)}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export type { IconName };
