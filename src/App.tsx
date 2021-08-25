import React from "react";

type AppState = {
  message: string;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: "Default message",
  };

  componentDidMount(){
    fetch("http://localhost:4000/courses/").then(
      res=>res.json()
    ).then(obj => {
      this.setState({message: obj.messages})
      console.log(obj);
    }).catch(err=> console.log(err))
  }

  render() {
    return <div>
      {this.state.message}
    </div>;
  }
}

export default App;
