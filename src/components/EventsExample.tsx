import React, {FC, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
        console.log("Drop")
    }

    const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(true)
    }
    return (
        <div>
            <input type={"text"} onChange={changeHandler} value={value}/>
            <button onClick={clickHandler}> клик</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    border: isDrag ? '2px solid red' : '5px dashed red',
                    marginTop: 15,
                    transition: 'border 0.3s ease',
                    boxSizing: 'border-box'
                }}></div>

        </div>
    );
};

export default EventsExample;