// lifecycle
// didmount, useEffect as mount
// fetch json placeholder example
// didupdate, useEffect as update
// fetch json placeholder example with counter
// willUnmount, useEffect as unmount


// import React from "react";
import React, {Component, useEffect, useState} from "react";
import './App.css';
import Comp from "./components/comp/Comp";

const url = 'https://jsonplaceholder.typicode.com/todos/';

const App = () => {
    const [counter, setCounter] = useState(1);
    // const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState(null);
    const [isLoadin, setIsLoading] = useState(false);

    const incCounter = () => {
        setCounter(counter + 1);
    }

    const fetchTodos = async () => {
        setIsLoading(true);
        const response = await fetch(`${url}${counter}`);
        const data = await response.json();
        // setTimeout(() => {
        // setTodos(data);
        setTodo(data);
        setIsLoading(false);
        // }, 1500);
        console.log(data);
    }

    useEffect(() => {
        fetchTodos();
        return () => {
            setTodo(null)
        }
    }, [counter])

    return (
        <>
            <h1 onClick={incCounter}>HELLO react {counter}</h1>

            {/*{!todos.length && isLoadin && (<h1>LOADING DATA...</h1>)}*/}
            {!todo && isLoadin && (<h1>LOADING DATA...</h1>)}

            {/*{!!todos.length && (*/}
            {!!todo && (
                <>
                    <hr/>
                    <h3>{todo.title} - {todo.completed.toString()} - {todo.id}</h3>
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
