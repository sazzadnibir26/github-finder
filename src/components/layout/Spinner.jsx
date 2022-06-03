import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <>
            <img
                src={spinner}
                alt="Loading..."
                style={spinnerStyle}
            />
        </>
    )
}

const spinnerStyle = {
    width: '100px',
    margin: 'auto',
    display: 'block'
}

export default Spinner
