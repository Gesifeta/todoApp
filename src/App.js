import React,{useState,useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Notes from "./components/notes";
import Card from "./components/card";
function App() {
  const [user, setUser]=useState("")
 
  useEffect(()=>{
    fetch('https://randomuser.me/api/',{credentials: 'omit'}).then((response)=>response.json()).then((data)=>{
    setUser(data)
    }
      )
  },[])
    

  return (
    <>
      <Header/>
     <Notes/>
      {user?.results?.map(data=>(
<Card key={data.login.uuid} title={data.name.title}
firstName={data.name.first}
lastName={data.name.last}
nationality={data.nat}
age={data.dob.age}
gender={data.gender}
  email={data.email}
  location={data.location}
  profileImage={data.picture.large}
  telephone={data.phone}
/>
      ))}
 
      <Footer/>
    </>
  );
}

export default App;
