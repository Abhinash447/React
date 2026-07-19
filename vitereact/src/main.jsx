// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// const newLocal = 'a'
// function MyApp() {
//   return(
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// const ReactElement = {
//     type: newLocal,
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a', 
//   {href:'https://google.com', target:"_blank"}, 
//   'click me to visit'
// )

const anotherUser = "Avi&vashu"

createRoot(document.getElementById('root')).render(
  anotherUser
  // <StrictMode>
  //   < App />
  // </StrictMode>
)
