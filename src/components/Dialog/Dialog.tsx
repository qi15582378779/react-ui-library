import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import "./Dialog.css";

export interface DialogProps {
  // 对话框是否可见
  visible: boolean;
  // 对话框宽度
  width?: string;
  // 对话框标题
  title?: string | ReactNode | ReactNode[];
  // 对话框内容
  children?: ReactNode;
  // 对话框底部内容
  footer?: ReactNode | ReactNode[];
  // 点击遮罩层是否可关闭
  maskClosable?: boolean;
  // 关闭对话框回调
  onClose?: () => void;
  // 确认按钮回调
  onOk?: () => void;
  // 取消按钮回调
  onCancel?: () => void;
}

const Dialog: FC<DialogProps> = ({
  visible = false,
  width = "570px",
  title,
  children = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  maskClosable = true,
  footer,
  onClose,
  onOk,
  onCancel,
}) => {
  if (!visible) return null;

  const handleMaskClick = () => {
    if (maskClosable) {
      onClose?.();
    }
  };

  const handleOk = () => {
    onOk?.();
    onClose?.();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };

  const dialog = (
    <div className="dialog-container">
      <div className="dialog-mask" onClick={handleMaskClick}></div>
      <div className="dialog-content" style={{ width }}>
        <div className="dialog-header">{title ? title : "Are you absolutely sure?"}</div>
        <div className="dialog-body">{children}</div>

        <div className="dialog-footer">
          {footer ? (
            footer
          ) : (
            <div className="dialog-footer-btn">
              <Button
                text="Cancel"
                variant="neutral"
                onClick={handleCancel}
                buttonClassName="dialog-btn cancel"
              />
              <Button
                text="Continue"
                onClick={handleOk}
                buttonClassName="dialog-btn confirm"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
};

export default Dialog;
