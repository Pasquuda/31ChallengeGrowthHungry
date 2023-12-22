const App = () => {
    const [buttonText, setButtonText] = React.useState('Click me')
    const [classesList, setClassesList] = React.useState ('')
    const onButtonClick = () => {
        setButtonText ('Hello from React')
        setClassesList ('green-btn')
    }


    return (
        <div className="app">
            <button className={classesList} onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot (container)
root.render(<App />)

// option 2

const App = ({initialButtonText, initialClassesList}) => {
    const [buttonText, setButtonText] = React.useState(props.initialButtonText)
    // buttonText = 'Click me', начальное значение
    // setButtonText - функция, которая меняет начальное значение
    const [classesList, setClassesList] = React.useState ('initialClassesList')
    const onButtonClick = () => {
        setButtonText ('Hello from React')
        setClassesList ('green-btn')
    }


    return (
        <div className="app">
            <button className={classesList} onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot (container)
root.render(<App initialButtonText = "Click me" initialClassesList = "" />)
