# JWT Authentication Tutorial

This project serves as a practical tutorial for understanding JSON Web Tokens (JWT), how they work, and how to implement them in a Node.js application.

## Overview

JSON Web Tokens (JWT) are an open standard (RFC 7519) that define a compact and self-contained way for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and information exchange in web applications.

This tutorial project demonstrates:

- How to set up JWT-based authentication
- Token creation, validation, and refresh processes
- Protecting routes with JWT middleware
- Best practices for JWT implementation

## Project Structure

- `src/server.ts` - Main server entry point
- `src/routes/auth.ts` - Authentication routes (login, register, refresh)
- `src/routes/protected.ts` - Example protected routes requiring authentication
- `src/middleware/authGuard.ts` - JWT validation middleware
- `test/` - Test files for verifying JWT functionality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd jwt-tutorial
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:
```
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_refresh_token_secret
PORT=3000
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Usage

### Authentication Flow

1. **Register a new user**
   - POST `/auth/register`
   - Body: `{ "username": "user", "password": "password" }`

2. **Login to get tokens**
   - POST `/auth/login`
   - Body: `{ "username": "user", "password": "password" }`
   - Response: `{ "accessToken": "...", "refreshToken": "..." }`

3. **Access protected routes**
   - GET `/protected/resource`
   - Header: `Authorization: Bearer your_access_token`

4. **Refresh expired access token**
   - POST `/auth/refresh`
   - Body: `{ "refreshToken": "your_refresh_token" }`
   - Response: `{ "accessToken": "new_access_token" }`

## Security Considerations

- Store JWT secrets securely and never expose them
- Set appropriate token expiration times
- Implement token refresh mechanisms
- Use HTTPS in production
- Consider token revocation strategies

## Testing

Run the test suite to verify JWT functionality:

```bash
npm test
# or
yarn test
```

## License

[MIT](LICENSE)

## Additional Resources

- [JWT.io](https://jwt.io/) - Debugger and information about JWT
- [RFC 7519](https://tools.ietf.org/html/rfc7519) - JWT specification
