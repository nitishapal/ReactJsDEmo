import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyled.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureClassComponent from './components/PureClassComponent';
import Parentcompo from './components/Parentcompo';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Greet name='first person' heroName='hero1'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Second person' heroName='hero2'>
        <button>Action</button>
      </Greet>
      <Greet name='Third person' heroName='hero3'/>
      <Welcome name='first person' heroName='hero1'/>
      <Welcome name='Second person' heroName='hero2'/>
      <Welcome name='Third person' heroName='hero3'/>
      <Message />
      <Counter></Counter>
      <FunctionClick />
      <ClassClick></ClassClick>
      <EventBind></EventBind>
      <ParentComponent />
      <UserGreeting />
      <NameList></NameList>
      {/* <Hello /> */}
     <Stylesheet primary={true}></Stylesheet>
     <Inline></Inline>
     <Form></Form>
     <LifecycleA></LifecycleA>
     {/* <LifecycleB></LifecycleB> */}
     <FragmentDemo></FragmentDemo>
     <Table></Table>
     <Parentcompo></Parentcompo>
     <RefsDemo></RefsDemo>
     <FocusInput></FocusInput>
     <FRParentInput></FRParentInput>
     <PortalDemo></PortalDemo>
    </div>
  );
}

export default App;
