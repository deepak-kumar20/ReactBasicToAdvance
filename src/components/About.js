import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             {/* <User name={"Deepak Kumar (functional component)"} /> */}
//             <UserClass name={"Deepak Kumar (class)"}  location={"Ghaziabad"}/>
//         </div>
//     )
// }
class About extends React.Component{
    constructor(props) {
        super(props);
        console.log(" parent constructor called");
        
    }
    componentDidMount() {
        console.log("parent didmount ");
    }
    render() {
        return (
            console.log("parent render"),
        <div>
            <h1>About Us</h1>
            {/* <User name={"Deepak Kumar (functional component)"} /> */}
            <UserClass />
        </div>
    )
    }
}
export default About;