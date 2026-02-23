Overview

This project involved building a full stack web application that serves both customer-facing and administrative functionality. Throughout the course, I developed the backend using Node.js and Express, connected it to a MongoDB database, and created both server-rendered pages and a single-page application (SPA) for the admin interface. In the final iteration, I implemented secure authentication using JSON Web Tokens (JWT) to protect administrative endpoints and ensure secure login functionality.

Architecture
Frontend Comparison: Express vs SPA

In this project, I used two types of frontend development approaches: traditional Express-rendered HTML pages and a single-page application (SPA) built with Angular.

The Express-rendered frontend generates HTML on the server and sends fully built pages to the client. This approach is straightforward and works well for simple navigation, but each user interaction typically requires a full page reload.

The SPA, on the other hand, runs primarily in the browser and dynamically updates content without reloading the page. Angular allowed me to build reusable components and create a smoother, more responsive user experience. The SPA communicates with the backend using HTTP requests and updates the interface based on JSON responses.

Overall, the SPA provides better user interaction and scalability, while server-rendered pages are simpler to implement and easier to understand for basic use cases.

Why MongoDB (NoSQL)

The backend uses MongoDB, a NoSQL database, because it stores data in flexible, JSON-like documents. This structure aligns well with JavaScript and makes it easier to work with dynamic data models.

Unlike relational databases that require fixed schemas and complex joins, MongoDB allows for flexible document structures. This was beneficial in this project because trip data and user data could evolve without requiring major structural changes. It also integrates seamlessly with Node.js using Mongoose.

Functionality
JSON vs JavaScript

JSON (JavaScript Object Notation) is a lightweight data format used to exchange data between the frontend and backend. While JSON looks similar to JavaScript objects, it is purely a data format and does not support functions or complex behavior.

In this project, the backend sends responses in JSON format, and the Angular frontend consumes that data to dynamically update the user interface. JSON serves as the bridge that connects backend logic to frontend presentation.

Refactoring and Reusable UI Components

Throughout development, I refactored both backend and frontend code to improve maintainability and efficiency.

On the backend, I separated routes, controllers, and authentication logic to improve structure and readability. For example, authentication middleware was abstracted to protect administrative endpoints consistently.

On the frontend, Angular components allowed me to reuse UI elements and manage state more effectively. Reusable components improve consistency, reduce duplicated code, and make future updates easier to implement.

Testing

Testing involved verifying both functionality and security.

Using Postman, I tested API endpoints including login and protected CRUD operations. I verified that:

Logging in returns a valid JWT token.

Protected routes return a 401 Unauthorized error when no token is provided.

Protected routes succeed when a valid Authorization header is included.

Testing secured endpoints introduced additional complexity because requests must now include proper headers and tokens. This required validating both correct behavior and correct error handling.

On the frontend, I tested login functionality to confirm that administrative CRUD features are only accessible after successful authentication. I also verified that Angular attaches the Authorization header to API requests using an HTTP interceptor.

Reflection

This project strengthened my understanding of full stack development by showing how frontend, backend, database, and security layers interact in a real application.

One of the most valuable lessons was implementing authentication using JWT. It clarified how stateless authentication works and how middleware protects backend routes. I also gained a deeper understanding of API design, request methods, and the importance of structured testing.

Building both server-rendered pages and a SPA gave me practical insight into architectural trade-offs. The project reinforced the importance of clean structure, modular code, and security considerations in production-ready applications.

Overall, this project helped me connect individual technical concepts into a complete, functioning full stack system.
