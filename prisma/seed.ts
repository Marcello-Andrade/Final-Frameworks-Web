import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();



async function main() {


console.log("🧹 Cleaning database...");


await prisma.loan.deleteMany();
await prisma.book.deleteMany();
await prisma.user.deleteMany();



console.log("👥 Creating users...");



const password =
await bcrypt.hash(
"123456",
10
);



const admin =
await prisma.user.create({

data:{

name:"Admin",

email:"admin@bookshelf.com",

password,

role:"admin",

avatar:
"https://i.pravatar.cc/150?img=1",

phone:"1111-1111",

address:"Admin Street",

memberSince:"2026"

}

});



const john =
await prisma.user.create({

data:{

name:"John Doe",

email:"john@test.com",

password,

role:"customer",

avatar:
"https://i.pravatar.cc/150?img=12",

phone:"2222-2222",

address:"Main Street",

memberSince:"2026"

}

});



const maria =
await prisma.user.create({

data:{

name:"Maria Silva",

email:"maria@test.com",

password,

role:"customer",

avatar:
"https://i.pravatar.cc/150?img=5",

phone:"3333-3333",

address:"Green Avenue",

memberSince:"2026"

}

});



const carlos =
await prisma.user.create({

data:{

name:"Carlos Souza",

email:"carlos@test.com",

password,

role:"customer",

avatar:
"https://i.pravatar.cc/150?img=8",

phone:"4444-4444",

address:"Central Road",

memberSince:"2026"

}

});



console.log("📚 Creating books...");



const books = await prisma.book.createMany({

data:[

{
title:"Clean Code",
author:"Robert C. Martin",
isbn:"9780132350884",
price:89.90,
category:"Programming",
description:"Software craftsmanship and clean coding.",
image:"https://covers.openlibrary.org/b/id/8579103-L.jpg",
available:false
},


{
title:"Design Patterns",
author:"Gang of Four",
isbn:"9780201633610",
price:119.90,
category:"Software Engineering",
description:"Reusable object oriented patterns.",
image:"https://covers.openlibrary.org/b/id/8291576-L.jpg",
available:false
},


{
title:"The Pragmatic Programmer",
author:"Andrew Hunt",
isbn:"9780135957059",
price:99.90,
category:"Programming",
description:"Professional programming techniques.",
image:"https://covers.openlibrary.org/b/id/11153216-L.jpg",
available:true
},


{
title:"Clean Architecture",
author:"Robert C. Martin",
isbn:"9780134494166",
price:109.90,
category:"Architecture",
description:"Building maintainable systems.",
image:"https://covers.openlibrary.org/b/id/9150154-L.jpg",
available:true
},


{
title:"Domain Driven Design",
author:"Eric Evans",
isbn:"9780321125217",
price:139.90,
category:"Architecture",
description:"Complex software design.",
image:"https://covers.openlibrary.org/b/id/8231856-L.jpg",
available:true
},


{
title:"Introduction to Algorithms",
author:"Cormen",
isbn:"9780262033848",
price:199.90,
category:"Algorithms",
description:"Classic algorithms book.",
image:"https://covers.openlibrary.org/b/id/10521270-L.jpg",
available:true
},


{
title:"You Don't Know JS",
author:"Kyle Simpson",
isbn:"9781491904244",
price:79.90,
category:"Javascript",
description:"Deep JavaScript concepts.",
image:"https://covers.openlibrary.org/b/id/10222487-L.jpg",
available:true
},


{
title:"Effective TypeScript",
author:"Dan Vanderkam",
isbn:"9781492053743",
price:95.90,
category:"TypeScript",
description:"Advanced TypeScript.",
image:"https://covers.openlibrary.org/b/id/10443585-L.jpg",
available:true
},


{
title:"React Up And Running",
author:"Stoyan Stefanov",
isbn:"9781491931820",
price:85.90,
category:"Frontend",
description:"React development guide.",
image:"https://covers.openlibrary.org/b/id/9251921-L.jpg",
available:true
},


{
title:"Database System Concepts",
author:"Silberschatz",
isbn:"9780078022159",
price:150,
category:"Database",
description:"Database fundamentals.",
image:"https://covers.openlibrary.org/b/id/11178945-L.jpg",
available:true
},


{
title:"Computer Networks",
author:"Tanenbaum",
isbn:"9780132126953",
price:130,
category:"Networks",
description:"Networking fundamentals.",
image:"https://covers.openlibrary.org/b/id/11180472-L.jpg",
available:true
},


{
title:"Operating System Concepts",
author:"Silberschatz",
isbn:"9781118063330",
price:140,
category:"Operating Systems",
description:"Operating systems.",
image:"https://covers.openlibrary.org/b/id/10523302-L.jpg",
available:true
},


{
title:"Artificial Intelligence",
author:"Russell",
isbn:"9780136042594",
price:180,
category:"AI",
description:"AI fundamentals.",
image:"https://covers.openlibrary.org/b/id/9875216-L.jpg",
available:true
},


{
title:"Software Engineering",
author:"Ian Sommerville",
isbn:"9780133943030",
price:160,
category:"Engineering",
description:"Software engineering.",
image:"https://covers.openlibrary.org/b/id/9254356-L.jpg",
available:true
},


{
title:"Computer Science Distilled",
author:"Wladston Ferreira",
isbn:"9780997316027",
price:70,
category:"Computer Science",
description:"CS concepts.",
image:"https://covers.openlibrary.org/b/id/10276552-L.jpg",
available:true
}


]

});



console.log("📖 Creating loans...");



const cleanCode =
await prisma.book.findUnique({
where:{
isbn:"9780132350884"
}
});


await prisma.loan.create({

data:{

userId:john.id,

bookId:cleanCode!.id

}

});




const patterns =
await prisma.book.findUnique({

where:{
isbn:"9780201633610"
}

});


await prisma.loan.create({

data:{

userId:maria.id,

bookId:patterns!.id

}

});




const pragmatic =
await prisma.book.findUnique({

where:{
isbn:"9780135957059"
}

});


await prisma.loan.create({

data:{

userId:carlos.id,

bookId:pragmatic!.id,

returnedAt:new Date()

}

});




console.log("✅ Seed complete");

console.log({

admin:
admin.email,

loginPassword:
"123456",

users:4,

books:15,

activeLoans:2,

returnedLoans:1

});


}



main()

.catch(console.error)

.finally(async()=>{

await prisma.$disconnect();

});