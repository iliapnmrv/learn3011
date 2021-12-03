import s from './car.module.scss'
import {useState, useEffect} from 'react'
import {Layout, Row, Collapse,Typography} from "antd";
import cars from '../fixtures/cars.json'
import useInputValue from "../customHooks/useInputValue"

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const Car = (props) => {
    const [year, setYear] = useState(25);
    const [count, setCount] = useState(0);

    if (5 === 7){
        // const [count2, setCount2] = useState(0);
    }

    // const getValue = () => {
        // const [count3, setCount3] = useState(0);
    // }

    useEffect (()=> {
        setCount(20)
    },[count, year, props])

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1)
        }, 15);

        return () => {
            console.log('unmount')
            clearTimeout(id);
        }
    }, [])

    const handleClick = () => {
        console.log('handle click info---=')
    }

    useEffect(()=>{
        window.addEventListener('click', handleClick)

        return () => {
            console.log('Запускаем уборку мусора... Задача выполнена!')
            window.removeEventListener('click', handleClick)
        }
    },[])


    const [value,handleChange] = useInputValue('maprrt')
    const [value2,handleChange2] = useInputValue()

    return (
        <Layout>
            <Title>{count}</Title>

            <input name='ds' onChange={(e) => handleChange(e)} value={value} />
            <input name='ss' onChange={(e) => handleChange2(e)} value={value2} />

            <Title>{value}</Title>
            Wheels: {props.wheels}

            <button onClick={() => setCount(count+1)}>set Count</button>
            <button onClick={() => setYear(count+1)}>set Year</button>
            <button onClick={() => props.onChange('hideMe')}>hideMe</button>

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
