import logo from './logo.svg';
import './App.css';
import {authxlogin} from "authxveta";
function App() {
  if (window.addEventListener) {
    window.addEventListener("message", handleMessage);
  } else {
    window.attachEvent("onmessage", handleMessage);
  }
  
  /**
   * Handle a message that was sent from some window.
   *
   * @param {MessageEvent} event The MessageEvent object holding the message/data.
   */
  function handleMessage(event) {
    console.log("Received a message from " + event.origin + ".");
    var messageFromSender = event.data;
    console.log(messageFromSender);
  }
  
  return (
    <div className="App">
    <button onClick={()=>{
       window.open("https://www.authxui.vercel.app/authx/"+sc_address,"Authx","fullscreen=yes");
    }}>open authx</button>
    </div>
  );
}

export default App;
