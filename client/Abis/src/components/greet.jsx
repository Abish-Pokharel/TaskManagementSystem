export const Greet = (props) =>{
    console.log(props['user'])
    return(
        <div>
            <h1>Hello </h1>
            hello {props['user']} vai
            {/* {props.user} */}
        </div>
    )
}
