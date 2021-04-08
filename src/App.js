// import React from "react";
import React, {Component, useEffect, useState} from "react";
import './App.css';
import Comp from "./components/comp/Comp";

const url = 'https://jsonplaceholder.typicode.com/todos';

const App = () => {
    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    const incCounter = () => {
        setCounter(counter + 1);
    }

    const fetchTodos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTodos(data);
        console.log(data);
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <>
            <h1 onClick={incCounter}>HELLO react {counter}</h1>
            {!!todos.length && (
                <>
                    <hr/>
                    <h3>{todos[0].title} - {todos[0].completed.toString()}</h3>
                    <hr/>
                </>
            )}
        </>
    )
}


// 1 class
// class App extends Component {
//     state = {
//         counter: 0
//     }
//
//     componentDidMount() {
//         console.log('component Did Mount');
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log('component Did Update', {prevProps, prevState});
//     }
//
//     incCounter = () => {
//         this.setState({counter: this.state.counter + 1})
//     }
//
//     render() {
//         console.log('parent rerender');
//         // this.state.counter > 5 && this.setState({counter: 0});
//         // this.state.counter > 5 && this.setState({counter: this.state.counter+2});//вічний цикл, у рендер стейт не міняти!
//         return (
//             <>
//                 <h1 onClick={this.incCounter}>HELLO react {this.state.counter}</h1>
//                 {!!(this.state.counter % 2) && <Comp/>}
//             </>
//         )
//     }
// }

// 2 function
// const App = () => {
//     const [counter, setCounter] = React.useState(0);
//
//     const incCounter = () => {
//         setCounter(counter + 1);
//     }
//
//
//     React.useEffect(() => {
//         console.log('did mount parent');
//     }, []);
//
//     React.useEffect(() => {
//         //2
//         console.log('did update parent');
//
//         //1
//         return () => console.log('parent unmount');
//     }, [counter]);
//
//     return (
//         <>
//             <h1 onClick={incCounter}>HELLO react {counter}</h1>
//             {!!(counter % 2) && <Comp/>}
//         </>
//
//     )
// }

// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }

export default App;
