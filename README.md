# Node Advanced Base

A modern Node.js TypeScript REST API boilerplate with Express.js, featuring authentication, database migrations, Socket.IO integration, and comprehensive tooling.

## 🚀 Features

- **TypeScript**: Full TypeScript support with modern ES modules
- **Express.js**: Fast, unopinionated web framework
- **Authentication**: JWT-based authentication with Argon2 password hashing
- **Database**: Sequelize ORM with MySQL2 support
- **Real-time**: Socket.IO integration for real-time communication
- **Security**: Helmet, CORS, rate limiting, and input validation
- **File Upload**: Multer integration for file handling
- **Event System**: Custom event handling system
- **Database Migrations**: Automated database setup and seeding
- **Logging**: Winston logger with custom formatting
- **Linting**: ESLint with TypeScript support and Prettier
- **Git Hooks**: Husky with commitlint and lint-staged

## 📋 Requirements

- **Node.js**: >= 22.0.0
- **MySQL**: For database (or compatible)
- **npm** or **yarn**: Package manager

## 🛠 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/siva-444/node-advance-base.git
   cd node-advance-base
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database Configuration
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASS=your_database_password

   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRES_IN=7d

   # Other configurations...
   ```

## 🗂 Project Structure

```
src/
├── api/                    # API layer
│   ├── middlewares/        # Custom middlewares
│   └── routes/            # Route definitions
├── config/                # Configuration files
├── controllers/           # Route controllers
├── database/              # Database connection setup
├── events/                # Event handlers
├── helpers/               # Utility functions
│   └── error/             # Error handling
├── loaders/               # Application loaders
├── models/                # Database models
├── services/              # Business logic
├── types/                 # TypeScript type definitions
└── web/                   # Web assets and routes

db/
└── migrations/            # Database migration scripts
```

## 🚀 Getting Started

### Development Mode

```bash
npm run dev
# or
yarn dev
```

### Production Build

```bash
npm run build
npm run serve
# or
yarn build
yarn serve
```

## 📊 Database Operations

### Initialize Database

```bash
npm run db:init
```

### Seed Database

```bash
npm run db:seed
```

### Reset Database

```bash
npm run db:reset
```

### Run All Database Operations

```bash
npm run db:all
```

## 🧪 Code Quality

### Linting

```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Fix linting errors
```

### Git Hooks

The project includes pre-commit hooks that will:

- Run ESLint on staged files
- Check commit message format
- Ensure code quality before commits

## 📡 API Endpoints

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile (protected)

### Web Routes

- `GET /` - Health check
- `GET /image/*` - Static image serving

## 🔌 Socket.IO Integration

The application includes Socket.IO for real-time communication:

- WebSocket server running alongside Express
- CORS configured for development
- Event system integration

## 🛡 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API rate limiting
- **JWT**: JSON Web Token authentication
- **Argon2**: Password hashing
- **Input Validation**: Request validation with Celebrate

## 🔧 Configuration

The application uses a centralized configuration system located in `src/config/`. Environment variables are loaded and validated at startup.

## 📝 Logging

Winston logger is configured with:

- Console and file transports
- Custom formatting
- Different log levels for development/production

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 TODO

- [ ] Analyze type DI for dependency injection
- [ ] Use stored procedures instead of raw queries
- [ ] Add comprehensive testing suite
- [ ] Add API documentation (OpenAPI/Swagger)
- [ ] Add Docker configuration

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Siva** - [GitHub Profile](https://github.com/siva-444)
