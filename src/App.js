import './App.css';
import Car from './components/car'
import {useState} from 'react'

function App() {
    const [name, setName] = useState('Veronika')

    return (
        <div className="App">
            {/*children*/}
            <Car name='Mercedes' className='nice' onChange={setName}>
                <div>Inner</div>
            </Car>
            {/*<div>{name}</div>*/}
        </div>
    );
}

export default App;
