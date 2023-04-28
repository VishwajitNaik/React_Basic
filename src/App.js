import './App.css';
import BasicOfForm from './Components/BasicOfForm/BasicOfForm';
import BindingEventHandler from './Components/ClassComponents/BindingEventHandlers/BindingEventHandler';
import IfElse from './Components/ClassComponents/ConditionalRandering/AllConRandering';
import Person from './Components/ClassComponents/List Randering/MapWithKey/Person';
import UsingMAPNaameList from './Components/ClassComponents/List Randering/UsingMAPNaameList';
import PassDataParentToChild from './Components/ClassComponents/PassDataParentToChild/PassDataParentToChild';
import PropsWithoutPropsInClass from './Components/ClassComponents/PropsWithoutPropsInClass';
import RefWithClassComp from './Components/ClassComponents/RefWithClassComp/RefWithClassComp';
import UseState from './Components/ClassComponents/RefWithClassComp/UseState';
import DestructuringState from './Components/ClassComponents/state/DestructuringState';
import ComponentA from './Components/ContextInReact/ComponentA';
import { UserProvider } from './Components/ContextInReact/UserContext';
import EventHandling from './Components/FunctionComponents/EventHandling';
import RefsWithFunc from './Components/FunctionComponents/RefsWithFunction/RefsWithFunc';
import { PropsWithoutpropsKye } from './Components/FunctionComponents/props/PropsWithoutpropsKye';
import HigherOrderFunc from './Components/HigherOrderFunc/HigherOrderFunc';
import Mounting from './Components/LifeC/Mounting';
import ParentComp from './Components/PureComponent/ParentComp';
import Adddata from './Components/ReactAndHTTP/Adddata';
import ReactAndHTTP from './Components/ReactAndHTTP/ReactAndHTTP';
// import StateWithClass from './Components/ClassComponents/state/StateWithClass';
// import CounterWithsetState from './Components/ClassComponents/state/CounterWithsetState';
// import Example from "./Components/FunctionComponents/Example";
// import ExampleArrow from "./Components/FunctionComponents/ExampleArrow";
// import ClassComponents from "./Components/ClassComponents/Example"
// import PropswithFunction from './Components/FunctionComponents/props/PropswithFunction';
// import PropsWithArrow from './Components/FunctionComponents/props/PropsWithArrow';
// import PropswithClass from './Components/ClassComponents/props/PropswithClass';

function App() {
  return (
    <>
      {/* <Example />
      <ExampleArrow />
      <ClassComponents /> */}

      {/* <PropswithFunction name = "Vishwajit" age = "25" />
      <PropsWithArrow name ="vishwajit naik" age = "23" />
      <PropswithClass name  = "vishwajit Pratap Naik" age = "22" /> */}

      {/* <StateWithClass />
      <CounterWithsetState /> */}

      {/* <PropsWithoutpropsKye name = "Vishwajit Naik" age="24" fev="KGF" />
      <PropsWithoutPropsInClass name = "Vaibhav" age="26" fev="Pushpa" />
      <DestructuringState />
      <EventHandling />
      <BindingEventHandler />
      <PassDataParentToChild />
      <IfElse /> */}

      {/* <UsingMAPNaameList /> */}
{/* 
      <Person />

      <BasicOfForm />
      <Mounting /> */}

      {/* <ParentComp /> */}

      {/* <RefsWithFunc />
      <UseState /> */}

      <HigherOrderFunc />

      {/* <UserProvider value={"Vishwa"}> */}
      <ComponentA />
      {/* </UserProvider> */}

      <ReactAndHTTP />

      <Adddata />

    </>
  );
}

export default App;
