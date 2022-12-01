import PropsExample from "./src/ClassComponent"


function FuncPropExample(props){
    console.log(props)
    return{
        <div>
        <p>{this.props.framework}</p>
        <p>{this.props.year}</p>
        </div>
    }
}