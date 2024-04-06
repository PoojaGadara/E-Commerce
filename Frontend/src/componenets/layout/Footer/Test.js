class Car extends React.Component {
    render() {
        return <h2>Hi I Love My Self</h2>
    }
}
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Car color="red"/>)

class Car extends React.Component {
    constructor(props){
        super(props)
        this.state = {color : "Red"}
    }
    render(){
        return <h2>{this.props.color}</h2>
    }
}


class Car extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            brand : "Ford",
            color : "Red"
        }
    }
    onChangeColor = () => {
        this.setState({color : "blue"})
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <button type = "button" onClick = {this.onChangeColor}></button>
            </div>
            
        )
    }
}

