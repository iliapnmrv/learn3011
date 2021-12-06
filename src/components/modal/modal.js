import s from "./modal.module.scss";
import { Button, Layout } from "antd";
import { useEffect } from "react";

const { Header } = Layout;

const Modal = ({ onClose }) => {
  const handleClose = (e) => {
    if (e.target.className === s.content) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div className={s.content}>
      <div className={s.inner}>
        <Button onClick={() => onClose()}>Закрыть</Button>
        <Layout>
          <Header />
          Hi, I am Modal
        </Layout>
      </div>
    </div>
  );
};

export default Modal;
