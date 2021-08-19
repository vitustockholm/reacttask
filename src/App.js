import './App.css';
import Nav from './Conditionrendering/Nav';
// import Users from './Lists/Users';
// import Greeting from './StateInClass/Greeting';
import Counter1 from './LifeCycleInClassComp/Counter1';

function App() {
  return (
    <>
      <header>
        <div id='logo'>LOGO</div>
        <Nav /> {/* Conditional Rendering*/}
      </header>
      <main>
        {/* <Users /> */}
        {/* <Greeting /> */}
        <Counter1 />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
