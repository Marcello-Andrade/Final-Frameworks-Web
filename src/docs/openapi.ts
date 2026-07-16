export const openapi = {
  openapi: "3.0.0",

  info: {
    title: "Bookshelf Manager API",
    version: "1.0.0",
    description:
      "API for managing books, users and loans.",
  },

  servers: [
    {
      url: "http://localhost:3000",
    },
  ],

  paths: {
    "/api/books": {
      get: {
        summary: "List all books",
        responses: {
          "200": {
            description: "Books returned successfully",
          },
        },
      },

      post: {
        summary: "Create a book",
        responses: {
          "201": {
            description: "Book created",
          },
        },
      },
    },

    "/api/users": {
      get: {
        summary: "List all users",
        responses: {
          "200": {
            description: "Users returned successfully",
          },
        },
      },

      post: {
        summary: "Create a user",
        responses: {
          "201": {
            description: "User created",
          },
        },
      },
    },

    "/api/loans": {
      get: {
        summary: "List loans",
        responses: {
          "200": {
            description: "Loans returned",
          },
        },
      },

      post: {
        summary: "Create a loan",
        responses: {
          "201": {
            description: "Loan created",
          },
        },
      },
    },

    "/api/loans/{id}/return": {
      put: {
        summary: "Return a loan",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          "200": {
            description: "Loan returned",
          },
        },
      },
    },

    "/api/statistics": {
      get: {
        summary: "Get system statistics",
        responses: {
          "200": {
            description:
              "Statistics returned",
          },
        },
      },
    },
  },
};