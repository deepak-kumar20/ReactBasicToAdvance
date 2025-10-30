import React from "react";
//component rerendred when state or props changes
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)
    //This is the way use to create state variable in class base components
    this.state = {
      info: {
        name: "Dummy",
        location: "default",
        // avatar_url: "https://via.placeholder.com/150",
        bio: "This is a default bio",
      },

      //  count1:1,
    };
    console.log("constructor called (child)");
  }

    async componentDidMount() {
      console.log(" didmount called (child)");
    const response = await fetch("https://api.github.com/users/deepak-kumar20");
    const data = await response.json();
    //it is used to make api calls and data loading
    //bcz in react it flow like constructor -> render -> componentDidMount
    //loads->render->api calls->rerender
    this.setState({
      info: data,
    });
      console.log(data);
     
    }
    //componentDidUpdate is invoked immediately after updating occurs. This method is not called for the initial render.
    componentWillUnmount() {
        //cleanup work like invalidating timers, canceling network requests or cleaning up any subscriptions that were created in componentDidMount.
        console.log("component will unmount");
    }

  render() {
    const { name, location, bio, avatar_url } = this.state.info;

    console.log("render called (child)");
    return (
      <div className="user">
        {/* <h1>count1={count1}</h1> */}
        <img className="img" src={avatar_url} alt="" />
        <h3>Name:{name}</h3>
        <p>Bio:{bio}</p>
        <p>Contact:@deepak-kumar20</p>
        <p>Education:Btech</p>
        <p>Add:{location}</p>
      </div>
    );
  }
}
export default UserClass;
