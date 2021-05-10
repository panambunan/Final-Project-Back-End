import { Component } from "react";
import "./App.css";
import ListStudent from "./components/ListStudent";
import Welcome from "./components/Welcome";

// const App = () => {

//   const student1 = "John Doe";
  
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <h3>Welcome {student1} </h3>
//       <h3>Welcome {student1} </h3>
//       <h3>Welcome {student1} </h3>
//     </div>
//   )
// }



class App extends Component{
  state = {
    isShow: true,
  };

  toggleButton = () =>{
    this.setState({isShow: !this.state.isShow});
  }
  render() {
    const backend = [
      {
        name: "John",
        address: "Manado",
      },
      {
        name: "Jane",
        address: "Airmadidi",
      },
      {
        name: "Bob",
        address: "Tondano",
      },
    ];

    const webProgramming = [
      {
        name: "Smith",
        address: "Manado",
      },
      {
       name: "Peter",
        address: "Manado",
      },
      {
        name: "Mayra",
        address: "Manado",
      },
    ]; 
    
    
    return (
      <>
      {this.state.isShow && <ListStudent title="Back-end Programming Class" students={backend} />
      }
      
      {/* <ListStudent title="Web Programming Class" students={webProgramming}/> */}
      <button onClick={this.toggleButton}>Toggle List Student </button>
      </>
    );
  }
}

export default App;