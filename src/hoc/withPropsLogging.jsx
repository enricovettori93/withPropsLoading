const withPropsLogging = (Component) => {
    const hoc = props => {
        console.log(`Component was given with props ${Object.keys(props).length > 0 ? JSON.stringify(props) : undefined}`)
        return <Component {...props}/>
    }
    return hoc;
}


export default withPropsLogging;