import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 }
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
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.propTypes= {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
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