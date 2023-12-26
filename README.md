# GPT-Creator Service

## Usable Documentation
https://medium.com/@mehmetdev/the-creation-journey-of-gpt-creator-a-typescript-and-express-app-a7cc3f0c1525
https://medium.com/@mehmetdev/bringing-movie-magic-to-ai-the-journey-of-creating-movie-character-prompter-mcp-f3c85190d796

## Description
GPT-Creator is a Node.js service using the Express framework, designed to create and manage GPT instances, allowing users to interact with these instances via a REST API. This service integrates with OpenAI's GPT models and utilizes PostgreSQL for data persistence.

## Features
- Create GPT instances with user-defined attributes.
- Send messages to GPT instances and receive responses using OpenAI's API.

## Prerequisites
- Node.js (v20.9.0)
- nvm
- Docker (for PostgreSQL)
- OpenAI API key

## Installation
1. Clone the repository: 
```
git clone https://github.com/macaris64/gpt-creator.git
```
2. Navigate to the project directory:
```
cd gpt-creator
```
3. Install dependencies: 
```
npm install
```

## Configuration
- Set up your .env file with the following environment variables

```
OPENAI_API_KEY=your_openai_api_key
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_HOST=your_database_host
```

- Use .nvmrc for managing the Node version
```
nvm use
```

- Starting the Service
```
docker-compose up --build
```


## API Endpoints
- `POST /gpt`: Create a GPT instance
- `POST /send`: Send a message to a GPT instance

