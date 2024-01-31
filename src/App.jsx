import './App.css'
import ConditionalRendering from './Components/ConditionalRendering'
// import MyProfile from './Components/MyProfile';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

function App() {


  return (
    <>
      <ConditionalRendering></ConditionalRendering>
      {/* <MyProfile user={user}></MyProfile> */}
    </>
  )
}

export default App

