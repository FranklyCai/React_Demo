import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import Parent1 from './Components/Parent1';
import Child1 from './Components/Child1';
import GrandChild1 from './Components/GrandChild1';
import GrandGrandChild1 from './Components/GrandGrandChild1';
import Parent2 from './Components/Parent2';
import Child2 from './Components/Child2';
import GrandChild2 from './Components/GrandChild2';
import Parent3 from './Components/Parent3';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext(themes.light);

// function App() {
//   const [themeValue, setThemeValue] = useState('light');
//   useEffect(()=>{
//     if(themeValue == 'light') {
//       setTimeout(()=>{
//         setThemeValue('dark')
//       }, 1000)
//     } else {
//       setTimeout(()=> {
//         setThemeValue('light')
//       }, 1000)
//     }
//   }, [themeValue])
//   return (
//     <ThemeContext.Provider value={themes[themeValue]}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>
  );
}

function App() {
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setShow(!show);
  //   }, 2000);
  //   return () => clearInterval(timer);
  //   // console.log('this is useEffect');
  // }, [show]);
  return (
    <div className='App'>
      <Parent1>
        <Child1>
          <GrandChild1>
            <GrandGrandChild1></GrandGrandChild1>
          </GrandChild1>
        </Child1>
      </Parent1>
      <Parent2>
        <Child2>
          <GrandChild2></GrandChild2>
        </Child2>
      </Parent2>
      <Parent3>
      </Parent3>
      {/* {show && <span>show1</span>} */}
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
