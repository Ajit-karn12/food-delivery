import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material";
import "./App.css";
import { useEffect } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";

function App() {

useEffect(() => {
 const menuLi = document.querySelectorAll("#menu li");
 
 function setMenuActive(){
   menuLi.forEach((n) => n.classList.remove("active"));
   this.classList.add("active");
 }

 menuLi.forEach(n =>n.addEventListener('click', setMenuActive))
}, [])

  return (
    <div className="App">
      {/* header section */}

      <Header />

      {/* main container */}

      <main>
        <div className="mainContainer">
        {/*banner */}
          <div className="banner"></div>
        </div>
        <div className="rightMenu"></div>
      </main>

      {/* bottom menu section */}

      <div className="bottomMenu">
        <ul id="menu">
          {/*prettier ignore */}
          <MenuContainer link={"#"} icon={<HomeRounded/>}/>
           {/*prettier ignore */}
           <MenuContainer link={"#"} icon={<Chat/>}/>
            {/*prettier ignore */}
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded/>}/>
           {/*prettier ignore */}
           <MenuContainer link={"#"} icon={<Favorite/>}/>
            {/*prettier ignore */}
          <MenuContainer link={"#"} icon={<SummarizeRounded/>}/>
           {/*prettier ignore */}
           <MenuContainer link={"#"} icon={<Settings/>}/>

           <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
