import React, { useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import { IconName } from "./name";

// 批量导入本地 `src/assets/icons/` 目录下的所有 SVG 图标
const icons = import.meta.glob("/src/assets/icons/*.svg", {
  eager: true,
}) as Record<string, { default: string }>;

export interface IconProps {
  name?: IconName;
  src?: string;
  size?: number | string | [number, number]; // ✅ 支持 [width, height]
  color?: string;
  className?: string;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

export const Icon: React.FC<IconProps> = ({
  name,
  src,
  size = 24,
  color = "currentColor",
  className,
  fallback,
  onError,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  // ✅ 计算最终的宽高
  const finalSize = useMemo(() => {
    if (Array.isArray(size) && size.length === 2) {
      return { width: `${size[0]}px`, height: `${size[1]}px` };
    }
    const sizeStr = typeof size === "number" ? `${size}px` : size;
    return { width: sizeStr, height: sizeStr };
  }, [size]);

  useEffect(() => {
    let svgPath =
      src || (name ? icons[`/src/assets/icons/${name}.svg`]?.default : null);
    if (!svgPath) {
      console.error(`Icon "${name}" not found.`);
      return;
    }

    // ✅ 处理用户传入的 `src`
    if (src) {
      if (src.startsWith("http") || src.startsWith("data:image/svg+xml")) {
        // ✅ 外部 HTTP URL 或 Base64 SVG
        svgPath = src;
      } else if (src.startsWith("/")) {
        // ✅ 绝对路径 `/icons/edit.svg`
        svgPath = `${window.location.origin}${src}`;
      } else if (src.startsWith("./") || src.startsWith("../")) {
        // ✅ 处理相对路径 `./icons/edit.svg`
        const baseUrl = window.location.href;
        svgPath = new URL(src, baseUrl).href;
      }
    }

    fetch(svgPath)
      .then((response) => response.text())
      .then((svg) => {
        console.log("Original SVG:", name || src, svg);

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
          .replace(/stroke=["']([^"']+)["']/g, `stroke="${color}"`) // 修改 stroke
          .replace(/fill=["'](?!none|url\(#)([^"']+)["']/g, `fill="${color}"`); // ✅ 只替换普通颜色，不替换 `url(#...)`

        console.log("Updated SVG:", name || src, updatedSvg);
        setSvgContent(updatedSvg);
      })
      .catch((error) => {
        console.error(`Failed to load icon: ${name || src}`, error);
        onError?.(error);
      });
  }, [name, src, color, finalSize]);

  if (!svgContent) {
    return <div className={clsx("icon", className)}>{fallback}</div>;
  }

  return (
    <div
      className={clsx("icon", className)}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export type { IconName };
