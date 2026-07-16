module.exports = [
"[project]/bookshelf-manager/.next-internal/server/app/api/loans/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/bookshelf-manager/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
}),
"[project]/bookshelf-manager/src/common/errors/AppError.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppError",
    ()=>AppError
]);
class AppError extends Error {
    statusCode;
    constructor(message, statusCode = 400){
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
    }
}
}),
"[project]/bookshelf-manager/src/modules/loans/repository.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoansRepository",
    ()=>LoansRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/lib/prisma.ts [app-route] (ecmascript)");
;
class LoansRepository {
    async findAll() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].loan.findMany({
            orderBy: {
                id: "desc"
            },
            include: {
                user: true,
                book: true
            }
        });
    }
    async findById(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].loan.findUnique({
            where: {
                id
            },
            include: {
                user: true,
                book: true
            }
        });
    }
    async countActiveLoansByUser(userId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].loan.count({
            where: {
                userId,
                returnedAt: null
            }
        });
    }
    async create(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].loan.create({
            data,
            include: {
                user: true,
                book: true
            }
        });
    }
    async returnLoan(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].loan.update({
            where: {
                id
            },
            data: {
                returnedAt: new Date()
            },
            include: {
                user: true,
                book: true
            }
        });
    }
}
}),
"[project]/bookshelf-manager/src/modules/loans/service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoansService",
    ()=>LoansService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/common/errors/AppError.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$repository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/modules/loans/repository.ts [app-route] (ecmascript)");
;
;
;
class LoansService {
    repository;
    constructor(repository = new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$repository$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoansRepository"]()){
        this.repository = repository;
    }
    async listLoans() {
        return this.repository.findAll();
    }
    async createLoan(data) {
        console.log("CREATING LOAN:", data);
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: data.userId
            }
        });
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("User not found", 404);
        }
        const book = await __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].book.findUnique({
            where: {
                id: data.bookId
            }
        });
        if (!book) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("Book not found", 404);
        }
        if (!book.available) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("Book already borrowed", 409);
        }
        const loan = await this.repository.create(data);
        await __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].book.update({
            where: {
                id: data.bookId
            },
            data: {
                available: false
            }
        });
        return loan;
    }
    async returnLoan(id) {
        const loan = await this.repository.findById(id);
        if (!loan) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("Loan not found", 404);
        }
        if (loan.returnedAt) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("Already returned", 409);
        }
        const result = await this.repository.returnLoan(id);
        await __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].book.update({
            where: {
                id: loan.bookId
            },
            data: {
                available: true
            }
        });
        return result;
    }
}
}),
"[project]/bookshelf-manager/src/modules/loans/controller.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoansController",
    ()=>LoansController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/modules/loans/service.ts [app-route] (ecmascript)");
;
class LoansController {
    service = new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoansService"]();
    async list() {
        return this.service.listLoans();
    }
    async get(id) {
        return this.service.getLoan(id);
    }
    async create(data) {
        return this.service.createLoan(data);
    }
    async returnLoan(id) {
        return this.service.returnLoan(id);
    }
}
}),
"[project]/bookshelf-manager/src/modules/loans/schemas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLoanSchema",
    ()=>createLoanSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/bookshelf-manager/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const createLoanSchema = __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    bookId: __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/bookshelf-manager/src/common/apiResponse.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "failure",
    ()=>failure,
    "success",
    ()=>success
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/common/errors/AppError.ts [app-route] (ecmascript)");
;
;
function success(data, status = 200) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data
    }, {
        status
    });
}
function failure(error) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$errors$2f$AppError$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message
        }, {
            status: error.statusCode
        });
    }
    console.error(error);
    return __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        message: "Internal Server Error"
    }, {
        status: 500
    });
}
}),
"[project]/bookshelf-manager/src/app/api/loans/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$controller$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/modules/loans/controller.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/modules/loans/schemas.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$apiResponse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bookshelf-manager/src/common/apiResponse.ts [app-route] (ecmascript)");
;
;
;
const controller = new __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$controller$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoansController"]();
async function GET() {
    try {
        const loans = await controller.list();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$apiResponse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["success"])(loans);
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$apiResponse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["failure"])(error);
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        console.log("NEW LOAN REQUEST:", body);
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$modules$2f$loans$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLoanSchema"].parse(body);
        const loan = await controller.create(data);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$apiResponse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["success"])(loan, 201);
    } catch (error) {
        console.error("CREATE LOAN ERROR:", error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$bookshelf$2d$manager$2f$src$2f$common$2f$apiResponse$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["failure"])(error);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec80530b._.js.map