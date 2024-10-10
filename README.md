# Azure Adonis - AdonisJS v5 with Azure Communication Email Service

This project is built using AdonisJS v5 (TypeScript version) and demonstrates the integration of Azure Communication Email Service for sending emails.

## Features

- AdonisJS v5 with TypeScript
- Integration with Azure Communication Email Service
- Preconfigured development, build, and testing scripts
- Ready for production deployment

## Prerequisites

Before starting, make sure you have the following installed on your system:

- Node.js (>= 18.x)
- npm (Node package manager)

## Installation

Follow these steps to get started with the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/angelocoutinho/adonisjs-azure-communication-mail.git
   cd adonisjs-azure-communication-mail
   ```

2. **Install dependencies**:

   Run the following command to install all the required dependencies:

   ```bash
   npm i
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root of your project by copying the provided `.env.example` file:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with the necessary Azure Communication Email Service credentials and other configuration options.

## Usage

### Development

To start the development server with hot reloading:

```bash
npm run dev
```


This will start the server and automatically reload the app when code changes are detected.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will compile the TypeScript code and generate the production build in the `build` directory.

### Start the Production Server

Once you've built the project, you can start the production server using:

```bash
npm start
```

### Running Tests

To run the test suite:

```bash
npm run test
```

This project uses AdonisJS's built-in testing framework along with Japa runner.

## Project Structure

Here’s an overview of the key files and folders in this project:

- `start/`: Application entry points and routes.
- `app/`: Core application code.
- `config/`: Configuration files for various services and tools.
- `database/`: Migrations, seeds, and factories (if using a database).
- `public/`: Static files such as CSS, JS, and images.
- `resources/views/`: HTML templates for your app/emails.

## Important Scripts

- `npm run dev`: Start the development server with hot reload.
- `npm run build`: Build the project for production.
- `npm start`: Start the production server.
- `npm run test`: Run the test suite.

## License

This project is licensed under the MIT License.
