import './App.css'
import MyApp1 from './Components/MyApp1'
//import ConditionalRendering from './Components/ConditionalRendering'
//import RenderingLists from './Components/RenderingLists'
import RespondingToEvents from './Components/RespondingToEvents'
// import MyProfile from './Components/MyProfile';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

function App() {


  return (
    <>
      <MyApp1></MyApp1>
      <RespondingToEvents></RespondingToEvents>
      {/* <RenderingLists></RenderingLists> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <MyProfile user={user}></MyProfile> */}
    </>
  )
}

export default App

