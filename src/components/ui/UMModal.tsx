import { Button, Modal } from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
type IModalProps = {
  title: string;
  initialContent: string;
  onConfirm: any;
  confirmButtonText: string;
  cancelButtonText: string;
  triggerButtonText: string;
};
const UMModal = ({
  title = "Modal Title",
  initialContent = "Content of the modal",
  onConfirm,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  triggerButtonText = "Open Modal",
}: IModalProps) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(initialContent);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setModalText("");
    if (onConfirm) {
      try {
        await onConfirm();
      } catch (error) {
        setModalText("An error occurred. Please try again.");
      }
    }

    setConfirmLoading(false);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    setConfirmLoading(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} danger>
        {triggerButtonText}
        <DeleteOutlined />
      </Button>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText={confirmButtonText}
        cancelText={cancelButtonText}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default UMModal;
