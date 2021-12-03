import s from './modal.module.scss'
import {Button, Layout} from "antd";

const {Header} = Layout

const Modal = (props) => {

    // напишите ваш код тут для закрытия модалки по клику вне окна
    //используя знания полученные на уроке и гугл:
    // подсказка что искать: useClickOutside

    return (
        <div className={s.content}>
            <div className={s.inner}>
                <Button onClick={() => props.onClose()}>Закрыть</Button>
                <Layout>
                    <Header />
                    Hi, I am Modal
                </Layout>
            </div>
        </div>)
}

export default Modal
