"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";


export type User = {
  id:number;
  name:string;
  email:string;
  role:string;
  avatar:string | null;
  phone:string | null;
  address:string | null;
  memberSince:string | null;
};



type AuthContextType = {

  user:User | null;

  login:
  (
    user:User
  )=>void;


  logout:
  ()=>void;


  isLoggedIn:boolean;

};



const AuthContext =
createContext<AuthContextType | null>(null);





export function AuthProvider({
children
}:{
children:ReactNode;
}){


const [user,setUser] =
useState<User | null>(null);





useEffect(()=>{


const saved =
localStorage.getItem(
"user"
);



if(saved){

setUser(
JSON.parse(saved)
);

}


},[]);






function login(
user:User
){


localStorage.setItem(
"user",
JSON.stringify(user)
);


setUser(user);


}







function logout(){


localStorage.removeItem(
"user"
);


setUser(null);



}





return (

<AuthContext.Provider

value={{

user,

login,

logout,

isLoggedIn:!!user

}}

>


{children}


</AuthContext.Provider>


);


}








export function useAuth(){


const context =
useContext(AuthContext);



if(!context){

throw new Error(
"useAuth must be used inside AuthProvider"
);

}



return context;


}