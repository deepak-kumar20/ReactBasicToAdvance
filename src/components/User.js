import { useState } from "react";

const User = ({ name }) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    return (
        <div className="user">
            <h1>count={count}</h1>
            <h1>count1={count1}</h1>
            <h3>Name:{name}</h3>
            <p>Contact:@deepak-kumar20</p>
            <p>Education:Btech</p>
            <p>Add:Ghaziabad</p>
        </div>
    )
}
export default User;