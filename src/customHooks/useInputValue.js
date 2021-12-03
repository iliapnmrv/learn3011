import {useState} from "react";

const useInputValue = (props) =>{
    const [value, setValue] = useState(props || "")

    const handleChange = (e) => {
        setValue (e.target.value)
    }
    return [value, handleChange]
}

export default useInputValue;
