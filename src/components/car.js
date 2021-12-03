import s from './car.module.scss'
import {useState, useEffect} from 'react'
import {Layout, Row, Collapse,Typography} from "antd";
import cars from '../fixtures/cars.json'

const { Header, Footer, Content } = Layout;
const { Panel } = Collapse;
const { Paragraph } = Typography;

const Car = (props) => {
    const [year, setYear] = useState(25);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1)
        }, 1500);

        return () => {
            clearTimeout(id);
        }
    }, [])

    console.log(cars)


    return (
        <Layout>
            {/*<Layout>*/}
            {/*    <Header>Header</Header>*/}
            {/*    <Content>Content</Content>*/}
            {/*    <Footer>Footer</Footer>*/}
            {/*</Layout>*/}

            {/*<button className={s.nice} onClick={() => setYear(40)}>Change year</button>*/}
            {/*<button onClick={() => props.onChange(year)}>Change year to parent</button>*/}

            <Layout>
                <Row>Count: {count}</Row>
                <Collapse>
                {cars.list.map(carItem => (
                    <Panel key={carItem.id} header={carItem.model}>
                        <Paragraph>Возраст: {carItem.age}</Paragraph>
                        <Paragraph>Коробка: {carItem.transmission}</Paragraph>
                        <Paragraph>Цвет: {carItem.color}</Paragraph>
                        <Paragraph>Двигатель: {carItem.litre}</Paragraph>
                    </Panel>
                ))}
                </Collapse>
            </Layout>
        </Layout>
    )
}

export default Car
