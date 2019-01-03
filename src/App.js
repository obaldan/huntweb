import React from 'react';

import './styles.css'; 

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
  
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>test</h1>
//       </div>
//     );
//   }
// }

export default App;
