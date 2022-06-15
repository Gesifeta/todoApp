import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

import TodoList from "./components/todo";
function App() {
  // const isLogedin=true;
  // console.log(isLogedin);
  // const [user, setUser]=useState("")
  // useEffect(()=>{
  //   fetch('https://randomuser.me/api/',{credentials: 'omit'}).then((response)=>response.json()).then((data)=>{
  //   setUser(data)
  //   }
  //     )
  // },[])
  
  return (
    <>
    <Header/>
      <TodoList/>
{/* {!isLogedin?<Login/>:<Home/>} */}
     {/* <Notes/>
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
 */}
      <Footer/> 
    </>
  );
}

export default App;
