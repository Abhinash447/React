import "./App.css";
import Card1 from "./components/Card1";

function App() {
  const myObj = {
    username: "Avi", 
    age: 19
  }

  const newArr = [1, 2, 3]
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-6">
      <h1 className="bg-green-400 text-black p-4 rounded-2xl">
        Tailwind Test
      </h1>

      <Card1 username="lifesync" btnText="Click me"/>
      <Card1 username="vashu" btnText="visit here"/>
      <Card1 username="avi" btnText="Go on the page"/>
    </div>
  );
}

export default App;