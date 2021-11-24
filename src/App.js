import logo from './logo.svg';
import './App.css';
import Title from './components/title/Title.js'
import Divider from './components/divider/Divider.js'
import TextBlock from './components/textblock/TextBlock.js'

const App = () => {
  return (
    <div className="App">
      <Title />
      <Divider />
      <TextBlock headingText="Welcome" splitColumn={true}>
        Hello, and welcome to my humble corner of the internet.
        The title of this site bears my name. I live in the Dayton, Ohio area
        with my wife, Alison, and my son, Ambrose. I am a software engineer by
        trade. See the links above to inquire more about my work. 

        <br/>
        
        When I am not writing code, I enjoy a variety of pursuits. I like to 
        try my hand at the arts - drawing, needle felting, sculpting, and 
        playing music. Occasionally you can find me playing the fiddle in an 
        Old Time music jam. I also read whenever I get the chance and sometimes
        play hockey.
      </TextBlock>
    </div>
  );
}

export default App;
