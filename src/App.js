
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5},
    { name: "NoName" }
  ];

  return (
    <>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </>
  )
}

const User = (props) => {
  return <div key={props.key}>Hi, I am {props.name}, and {props.age} years old</div>
}

User.defaultProps = {
  age: 1
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