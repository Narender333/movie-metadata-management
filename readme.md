# Movie Metadata Management System

This project is a Movie Metadata Management System that consolidates and manages metadata from multiple media companies. The system supports role-based access control for different metadata categories and consolidates input from various sources into a centralized Content Management System (CMS). The goal is to create a unified and easily accessible platform for managing movie and TV-show metadata.

## Features

- **Consolidation**: Ingests metadata from multiple sources and merges it into a single format.
- **Role-Based Access Control**: Supports role-based access control for different metadata categories.
- **Dynamic Field Filtering**: Allows users to fetch metadata with filtered fields based on their role and access control settings.

## Requirements

- Node.js (v14 or higher)
- Redis Server with RedisJSON module installed

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Narender333/movie-metadata-management.git
   cd movie-metadata-management
   npm install

2. Install dependencies:

    ```bash
    npm install

3. Configure environment variables: Create a .env file in the project root and define the following variables:

    ```bash
    PORT=3000
    JWT_SECRET=your-secret-key
4. Start the application:

    ```bash
    npm start
