
const App = () => {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </>
  )
}

const Cat = () => {
  return <div>Miow</div>
}

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world"
//     );
//   }
// }
export default App;