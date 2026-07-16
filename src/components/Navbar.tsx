"use client";

import Link from "next/link";
import {
  ShoppingCart,
  ChevronDown,
  User,
  LogOut,
  BookOpen,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

import AuthModal from "./AuthModal";
import Image from "next/image";


export default function Navbar() {


  const { cart } = useCart();


  const {
    user,
    logout,
    isLoggedIn,
  } = useAuth();



  const [open,setOpen] =
  useState(false);


  const [menuOpen,setMenuOpen] =
  useState(false);




  async function handleLogout(){


    await fetch(
      "/api/auth/logout",
      {
        method:"POST"
      }
    );


    logout();

    setMenuOpen(false);

  }





return (

<>


<AuthModal
open={open}
onClose={()=>setOpen(false)}
/>



<nav
className="
sticky
top-5
z-40
mx-auto
mb-8
flex
max-w-6xl
items-center
justify-between
rounded-2xl
border
border-gray-200
bg-white/90
px-6
py-4
shadow-lg
backdrop-blur
"
>



<Link
href="/"
className="
group
flex
items-center
gap-3
text-2xl
font-black
transition
hover:scale-105
"
>

<span
className="
rounded-xl
bg-black
p-2
text-white
transition
group-hover:rotate-6
"
>
<BookOpen size={24}/>
</span>


Bookshelf

</Link>





<div
className="
flex
items-center
gap-4
"
>




<Link
href="/cart"
className="
relative
flex
items-center
gap-2
rounded-xl
bg-black
px-5
py-3
font-medium
text-white
transition
hover:-translate-y-1
hover:shadow-lg
"
>

<ShoppingCart size={20}/>


Cart


{
cart.length > 0 && (

<span
className="
absolute
-right-2
-top-2
flex
h-6
w-6
items-center
justify-center
rounded-full
bg-red-600
text-xs
font-bold
"
>

{cart.length}

</span>

)

}


</Link>





{
!isLoggedIn ? (


<button

onClick={()=>setOpen(true)}

className="
rounded-xl
border
border-gray-300
px-6
py-3
font-medium
transition
hover:bg-gray-100
"

>

Login

</button>


)

:

(


<div
className="
relative
"
>


<button

onClick={()=>
setMenuOpen(!menuOpen)
}

className="
flex
items-center
gap-3
rounded-full
border
bg-white
px-3
py-2
transition
hover:bg-gray-100
"

>


<Image

src={user!.avatar || '' }
width={10}
height={10}

alt={user!.name}

className="
h-10
w-10
rounded-full
object-cover
"

/>



<div
className="
hidden
text-left
sm:block
"
>

<p
className="
text-sm
font-bold
"
>

{user!.name}

</p>


<p
className="
text-xs
text-gray-500
"
>

{user!.role}

</p>


</div>


<ChevronDown
size={18}
className={
menuOpen
?
"rotate-180 transition"
:
"transition"
}
/>


</button>






{
menuOpen && (

<div

className="
absolute
right-0
mt-3
w-72
overflow-hidden
rounded-2xl
border
bg-white
shadow-2xl
animate-in
fade-in
zoom-in
"

>


<div
className="
bg-black
p-6
text-center
text-white
"
>


<Image

src={user!.avatar || ''}
width={20}
height={20}
alt={''}

className="
mx-auto
mb-3
h-20
w-20
rounded-full
border-4
border-white
object-cover
"

/>


<h2
className="
font-bold
"
>

{user!.name}

</h2>


<p
className="
text-sm
text-gray-300
"
>

{user!.email}

</p>


</div>






<Link

href="/profile"

onClick={()=>
setMenuOpen(false)
}

className="
flex
items-center
gap-3
px-6
py-4
transition
hover:bg-gray-100
"

>

<User size={18}/>

My Profile

</Link>






<button

onClick={handleLogout}

className="
flex
w-full
items-center
gap-3
px-6
py-4
text-left
text-red-600
transition
hover:bg-red-50
"

>

<LogOut size={18}/>

Logout

</button>




</div>


)

}



</div>


)

}



</div>


</nav>


</>

);

}