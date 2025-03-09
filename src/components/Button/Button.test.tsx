import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("应该使用默认props正确渲染按钮", () => {
    const { getByRole } = render(<Button>点击我</Button>);
    const button = getByRole("button");
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("点击我");
    expect(button.className).toContain("text-base"); // 默认 medium 尺寸
    expect(button.className).toContain("bg-red-500"); // 默认 red 颜色
  });

  it("应该正确处理自定义props", () => {
    const { getByRole } = render(
      <Button variant="secondary" size="large" color="blue">
        自定义按钮
      </Button>
    );
    const button = getByRole("button");

    expect(button.className).toContain("bg-gray-300"); // secondary 变体
    expect(button.className).toContain("text-lg"); // large 尺寸
    expect(button.className).toContain("bg-blue-500"); // blue 颜色
  });

  it("应该正确响应点击事件", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>点击测试</Button>
    );
    
    const button = getByRole("button");
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});