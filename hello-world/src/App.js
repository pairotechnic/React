import logo from "./logo.svg";
import "./App.css";
// import Greet from './components/Greet';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import React from "react";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import KandasamyClick from "./components/KandasamyClick";

function App() {
  return (
    <div className="App">
      <KandasamyClick />
      {/* <UserProvider value="Vishwas">
        <ComponentC />
      </UserProvider> */}
      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */}
      {/* <HoverCounterTwo /> */}
      {/* <ClickCounterTwo /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter name="Vishwas" /> */}
      {/* <ErrorBoundary> */}
      {/* <Hero heroName="Batman" /> */}
      {/* </ErrorBoundary> */}
      {/* <ErrorBoundary> */}
      {/* <Hero heroName="Superman" /> */}
      {/* </ErrorBoundary> */}
      {/* <ErrorBoundary> */}
      {/* <Hero heroName="Joker" /> */}
      {/* </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheets primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clarke" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonderwoman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Clarke" heroName="Superman" /> */}
      {/* <Welcome name="Diana" heroName="Wonderwoman" /> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
