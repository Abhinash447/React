import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmanopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%&*_";

    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  // passwordGenerator();
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">
          Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex overflow-hidden rounded-xl border border-gray-600 bg-white shadow-md">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            className="flex-1 px-4 py-3 text-gray-800 outline-none"
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className="bg-orange-500 hover:bg-orange-600 px-5 text-white font-medium transition duration-200">
            Copy
          </button>
        </div>

        {/* Settings */}
        <div className="mt-8 space-y-5 text-white">
          {/* Password Length */}
          <div className="flex items-center justify-between">
            <label className="font-medium">
              Length:
              <span className="ml-2 text-orange-400 font-bold">
                {length}
              </span>
            </label>

            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-48 cursor-pointer accent-orange-500"
            />
          </div>

          {/* Numbers */}
          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="font-medium">
              Include Numbers
            </label>

            <input
              id="numberInput"
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-5 w-5 accent-orange-500 cursor-pointer"
            />
          </div>

          {/* Special Characters */}
          <div className="flex items-center justify-between">
            <label htmlFor="charInput" className="font-medium">
              Include Special Characters
            </label>

            <input
              id="charInput"
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="h-5 w-5 accent-orange-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;