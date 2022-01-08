import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material";
import "./App.css";
import { useEffect } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import BannerName from "./Components/BannerName";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";
import {MenuItems, Items} from './Components/Data';

function App() {

useEffect(() => {
 const menuLi = document.querySelectorAll("#menu li");
 
 function setMenuActive(){
   menuLi.forEach((n) => n.classList.remove("active"));
   this.classList.add("active");
 }

 menuLi.forEach(n =>n.addEventListener('click', setMenuActive))

// Menucard active toggle
const menuCards = document
.querySelector(".rowContainer")
.querySelectorAll(".rowMenuCard");

function setMenuCardActive(){
  menuCards.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}


menuCards.forEach((n) =>n.addEventListener("click",setMenuCardActive));

}, [])

  return (
    <div className="App">
      {/* header section */}

      <Header />

         {/* main container */}

      <main>
        <div className="mainContainer">

             {/*banner */}
        
          <div className="banner">
            <BannerName name={"Ajit"} discount={"20"} link={"#"}/>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337" 
              alt="delivery pic"
              className="deliverypic"
            />
          </div>
        </div>

        {/* dish container */}

          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className="rowContainer">
            {MenuItems && MenuItems.map((data) => (
              <div key= {data.id}>
                <MenuCard imgSrc={data.imgSrc}
                 name={data.name}
                 isActive={data.id === 1 ? true : false}
                 />
              </div>
            ))}
             
            </div>
            <div className="dishitemCointainer"></div>

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
