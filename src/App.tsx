import { Button, Card, Checkbox } from "@nextui-org/react";
import React from "react";
import { io } from "socket.io-client";
// import { socket } from "./components/socket";



function App() {
  const makeConnection = ()=>{
      const socket = io("http://localhost:3002")
      try {
        console.log("object connected")
        socket.on("connect", ()=>{
          alert("Connection established")
        });
        socket.on("error", (error)=>alert(error))
        
      } catch (error) {
        alert(error)
      }
  }
  const [cobus,setCobus] = React.useState(false)
  const [xn,setXn] = React.useState(false)
  const [cs,setCs] = React.useState(false)
 
  return (
   <div>
    <nav className="flex justify-between items-center bg-[#262662]">
      <div className="flex justify-center items-center">

      <img src="/Diabots.png" alt="Diabots logo"  className="h-14 w-14 m-4"/>
      <h1 className="text-white font-serif font-bold text-3xl">Diabots</h1>
      </div>
      <div className="p-4">
      <Button color="primary" variant="shadow" size="lg" onClick={makeConnection}>Verbinden</Button>
      </div>
    </nav>
    {/* <div className="bg-gray-300 flex justify-end items-center p-4"> */}
      {/* <span className="text-white">Robot Connect</span> */}
      {/* <div className="text-black font-serif">Robot Mode:  </div> */}
    {/* </div> */}
    <div className="bg-[#262662]">
      <div className="flex justify-evenly p-4">

        <Button color="primary" variant="solid">clear error</Button>
        <Button color="primary" variant="solid">Roboter starten</Button>
        <Button color="primary" variant="solid">Roboter stoppen</Button>
        <Button color="primary" variant="solid"> reset Archive</Button>
      
      </div>
    </div>
    <div className="flex justify-evenly bg-[#262662]">

    <Card className="flex flex-col p-8 m-4 justify-between">
      <div className="text-center p-2">Robot Mode:  </div>
      

      {xn ?<><Button color="primary" variant="ghost" className="m-1">Home pos</Button>
      <Button color="primary" variant="ghost" className="m-1" >Drag Mode</Button>
      <Button color="primary" variant="ghost" className="m-1" >Robot Mod</Button></>:<><Button color="primary" variant="ghost" className="m-1" isDisabled>Home pos</Button>
      <Button color="primary" variant="ghost" className="m-1" isDisabled>Drag Mode</Button>
      <Button color="primary" variant="ghost" className="m-1" isDisabled>Robot Mode</Button></>}
      <div className="p-4"><Checkbox size="lg" onChange={e=>setXn(e.target.checked)}/>XN 1000</div>

    </Card>
    <Card className="flex flex-col p-8 m-4 justify-between">
      <div className="text-center p-2">Robot Mode:  </div>
      

      {cs ?<><Button color="primary" variant="ghost" className="m-1">Home pos</Button>
      <Button color="primary" variant="ghost" className="m-1" >Drag Mode</Button>
      <Button color="primary" variant="ghost" className="m-1" >Robot Mod</Button></>:<><Button color="primary" variant="ghost" className="m-1" isDisabled>Home pos</Button>
      <Button color="primary" variant="ghost" className="m-1" isDisabled>Drag Mode</Button>
      <Button color="primary" variant="ghost" className="m-1" isDisabled>Robot Mode</Button></>}
      <div className="p-4"><Checkbox size="lg" onChange={e=>setCs(e.target.checked)}/>BCS 2500</div>


    </Card>
    <Card className="flex flex-col p-8 m-4 justify-between">
      <div className="text-center p-2">Robot Mode:  </div>
      

      {cobus ?<><Button color="primary" variant="ghost" className="m-1">Home pos</Button>
      <Button color="primary" variant="ghost" className="m-1" >Drag Mode</Button>
      <Button color="primary" variant="ghost" className="m-1" >Robot Mod</Button></>:<><Button color="primary" variant="ghost" className="m-1" isDisabled>Home pos</Button>
      <Button color="primary" variant="ghost" className="m-1" isDisabled>Drag Mode</Button>
      <Button color="primary" variant="ghost" className="m-1" isDisabled>Robot Mode</Button></>}

      <div className="p-4"><Checkbox size="lg" onChange={e=>setCobus(e.target.checked)}/>Cobus pure</div>


    </Card>
    </div>
    <div className="">
    <div className="w-1/2 h-64 bg-[#262662]">
      
    </div>
    </div>
   </div>
  );
}

export default App;
