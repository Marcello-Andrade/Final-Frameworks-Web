"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

type Props = {
  open: boolean;
  onClose: () => void;
};


export default function AuthModal({
  open,
  onClose,
}: Props) {


  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");


  const {
    login
  } = useAuth();



  if(!open) return null;



async function handleSubmit(){

try{


const res =
await fetch(
"/api/auth/login",
{
method:"POST",

credentials:"include",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

}
);



const data =
await res.json();



if(!res.ok){

alert(
data.message
);

return;

}



login(
data.data.user
);



onClose();


}
catch(error){

console.error(error);

alert(
"Login failed"
);

}


}





  return (

    <div
    className="
    fixed
    inset-0
    z-50
    flex
    items-center
    justify-center
    bg-black/40
    "
    >


      <div
      className="
      w-[420px]
      rounded-xl
      bg-white
      p-8
      shadow-xl
      "
      >


        <h2
        className="
        mb-6
        text-3xl
        font-bold
        "
        >
          Login
        </h2>




        <input

        className="
        mb-4
        w-full
        rounded
        border
        p-3
        "

        placeholder="Email"

        value={email}

        onChange={
          e=>setEmail(e.target.value)
        }

        />





        <input

        type="password"

        className="
        mb-6
        w-full
        rounded
        border
        p-3
        "

        placeholder="Password"

        value={password}

        onChange={
          e=>setPassword(e.target.value)
        }

        />





        <button

        onClick={handleSubmit}

        className="
        w-full
        rounded
        bg-black
        py-3
        text-white
        "

        >

          Login

        </button>





        <button

        onClick={onClose}

        className="
        mt-3
        w-full
        text-red-500
        "

        >

          Close

        </button>



      </div>


    </div>

  );

}