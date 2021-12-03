import './App.css';
import Car from './components/car'
import {useState} from 'react'
import {Typography} from "antd";

const { Title } = Typography

function App() {
    const [name, setName] = useState('Veronika')

    return (
        <div className="App">
            <Title>App component</Title>
            {/*<Car onChange={setName} wheels='winter' />*/}
            {name !== 'hideMe' && <Car name='Mercedes' className='nice' onChange={setName}>
                <div>Inner</div>
            </Car>}
        </div>
    );
}

export default App;
