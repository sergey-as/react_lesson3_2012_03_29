import React from 'react';

// let interval;

const Comp = () => {


    React.useEffect(() => {
        console.log('did mount child');
    }, []);

    React.useEffect(() => {
        return () => console.log('will Unmount child');
    }, []);

    return (
        <h1>child</h1>

    )
}


// class Comp extends Component {
//
//     componentDidMount() {
//         console.log('child component Did Mount');
//
//         interval = setInterval(() => {
//             console.log('fetching new data about airplanes');
//         }, 2000);
//     }
//
//     componentWillUnmount() {
//         console.log('child component Will Mount');
//         clearInterval(interval);
//     }
//
//     render() {
//         console.log('child rerender');
//         // this.state.counter > 5 && this.setState({counter: 0});
//         // this.state.counter > 5 && this.setState({counter: this.state.counter+2});//вічний цикл, у рендер стейт не міняти!
//         return (
//             <h1>child</h1>
//         )
//     }
// }

export default Comp;