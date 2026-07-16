module.exports = [
"[project]/bookshelf-manager/src/data/books.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "books",
    ()=>books
]);
const books = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 89.90,
        category: "Programming",
        description: "A practical guide to writing clean, maintainable and professional code.",
        image: "https://covers.openlibrary.org/b/id/8579103-L.jpg",
        available: false
    },
    {
        id: 2,
        title: "Design Patterns",
        author: "Gang of Four",
        price: 119.90,
        category: "Software Engineering",
        description: "Classic book about reusable solutions for common software design problems.",
        image: "https://covers.openlibrary.org/b/id/8291576-L.jpg",
        available: true
    },
    {
        id: 3,
        title: "Domain Driven Design",
        author: "Eric Evans",
        price: 139.90,
        category: "Architecture",
        description: "A deep dive into modeling complex software systems using domains.",
        image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        available: true
    },
    {
        id: 4,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        price: 99.90,
        category: "Programming",
        description: "Practical advice and techniques for becoming a better developer.",
        image: "https://covers.openlibrary.org/b/id/11153216-L.jpg",
        available: true
    },
    {
        id: 5,
        title: "Clean Architecture",
        author: "Robert C. Martin",
        price: 109.90,
        category: "Architecture",
        description: "Explains principles for creating scalable and maintainable systems.",
        image: "https://covers.openlibrary.org/b/id/11153022-L.jpg",
        available: true
    },
    {
        id: 6,
        title: "Refactoring",
        author: "Martin Fowler",
        price: 129.90,
        category: "Software Engineering",
        description: "Techniques for improving existing code without changing behavior.",
        image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
        available: true
    },
    {
        id: 7,
        title: "Effective TypeScript",
        author: "Dan Vanderkam",
        price: 94.90,
        category: "TypeScript",
        description: "Modern TypeScript practices for safer and cleaner applications.",
        image: "https://covers.openlibrary.org/b/id/11101071-L.jpg",
        available: true
    },
    {
        id: 8,
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        price: 79.90,
        category: "JavaScript",
        description: "A deep exploration of JavaScript fundamentals.",
        image: "https://covers.openlibrary.org/b/id/7883991-L.jpg",
        available: true
    },
    {
        id: 9,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        price: 159.90,
        category: "Algorithms",
        description: "One of the most complete references for algorithms and data structures.",
        image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        available: true
    },
    {
        id: 10,
        title: "Computer Networks",
        author: "Andrew Tanenbaum",
        price: 149.90,
        category: "Computer Science",
        description: "Fundamentals of networking and communication systems.",
        image: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
        available: true
    },
    {
        id: 11,
        title: "Operating System Concepts",
        author: "Silberschatz",
        price: 169.90,
        category: "Operating Systems",
        description: "Concepts behind modern operating systems.",
        image: "https://covers.openlibrary.org/b/id/8235112-L.jpg",
        available: true
    },
    {
        id: 12,
        title: "Artificial Intelligence",
        author: "Russell & Norvig",
        price: 189.90,
        category: "AI",
        description: "Comprehensive introduction to artificial intelligence.",
        image: "https://covers.openlibrary.org/b/id/8235117-L.jpg",
        available: true
    }
];
}),
"[project]/bookshelf-manager/src/app/books/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/data/books.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function BookDetails({ params }) {
    const book = __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$data$2f$books$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["books"].find((book)=>book.id === Number(params.id));
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!book) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "p-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                children: "Book not found"
            }, void 0, false, {
                fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    function handleBorrow() {
        book && addToCart({
            id: book.id,
            title: book.title,
            author: book.author,
            image: book.image
        });
        setConfirmOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            confirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[430px] rounded-xl bg-white p-8 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-3 text-2xl font-bold",
                            children: "📚 Borrow Book"
                        }, void 0, false, {
                            fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 text-gray-600",
                            children: "Are you sure you want to borrow"
                        }, void 0, false, {
                            fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-lg font-semibold",
                            children: [
                                '"',
                                book.title,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-8 text-gray-500",
                            children: "This book will be added to your borrowed books."
                        }, void 0, false, {
                            fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setConfirmOpen(false),
                                    className: "rounded-lg border px-5 py-2 transition hover:bg-gray-100",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBorrow,
                                    className: "rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800 active:scale-95",
                                    children: "Borrow Book"
                                }, void 0, false, {
                                    fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-gray-100 p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "mb-6 inline-block rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid max-w-5xl gap-10 rounded-xl bg-white p-8 shadow-lg transition-all duration-300 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: book.image,
                                    alt: book.title,
                                    className: "h-[500px] w-full object-cover transition duration-300 hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold",
                                        children: book.title
                                    }, void 0, false, {
                                        fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-xl text-gray-600",
                                        children: book.author
                                    }, void 0, false, {
                                        fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 leading-7 text-gray-700",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, sapien sed gravida vulputate, mauris erat luctus lorem, vitae egestas purus magna at ipsum. This is a demo description for the book."
                                    }, void 0, false, {
                                        fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `rounded-full px-4 py-2 text-sm font-medium ${book.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                                            children: book.available ? "Available" : "Currently Borrowed"
                                        }, void 0, false, {
                                            fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: !book.available,
                                        onClick: ()=>setConfirmOpen(true),
                                        className: `mt-10 flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-medium text-white transition-all duration-200 active:scale-95 ${book.available ? "bg-black hover:scale-[1.02] hover:bg-gray-800" : "cursor-not-allowed bg-gray-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            book.available ? "Borrow this Book" : "Unavailable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bookshelf-manager/src/app/books/[id]/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=bookshelf-manager_src_c76fa747._.js.map