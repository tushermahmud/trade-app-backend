
# Trade Automation App

## Description

This application automates trading operations by interfacing with the MT4 trading platform via a secure API. It is designed to fetch and execute trade data automatically, reducing the need for manual intervention and increasing the efficiency of trading operations.

### Features

- **Automated Trading**: Automatically fetches and executes trades based on predefined criteria.
- **MT4 Integration**: Seamlessly integrates with the MT4 platform for reliable and secure trading operations.
- **Environment Configuration**: Utilizes environment variables for secure configuration without hard-coding sensitive information.

## Installation

To set up the Trade Automation App on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   https://github.com/tushermahmud/trade-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd trade-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

Start the application by running:

```bash
npm start
```

Ensure that the `.env` file is configured with the correct API and server details:

- `PORT`: The port on which the server will run.
- `LAMBDA_URL`: The URL for the lambda function.
- `MT4_API`: URL to the MT4 API.
- `MT4_API_USER`: Username for the MT4 API.
- `MT4_API_PASSWORD`: Password for the MT4 API.
- `MT4_API_HOST`: Host for the MT4 API.
- `MT4_API_PORT`: Port for the MT4 API.






