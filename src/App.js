import './App.css';
import Car from './components/car'
import {useState} from 'react'
import {Button, Typography} from "antd";
import Modal from "./components/modal/modal";

const {Title} = Typography

function App() {
    const [name, setName] = useState('Veronika')
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="App">
            <Title>App component</Title>
            {/*<Car onChange={setName} wheels='winter' />*/}
            {name === 'hideMe' && <Car name='Mercedes' className='nice' onChange={setName}>
                <div>Inner</div>
            </Car>}

            <Button onClick={() => setIsVisible(true)}>Показать модалку</Button>

            {isVisible && <Modal onClose={() => setIsVisible(false)}/>}

        </div>
    );
}

export default App;
