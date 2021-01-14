
function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}}/>;
    </>
  )
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