# Digital CV Builder

A modern, full-stack CV/resume builder with a real-time live preview. Built with **Next.js 16** (frontend) and **Laravel 12** (backend API).

## Features

- **Real-time CV Preview** — Fill in your details on the left and see a styled CV card update instantly on the right
- **Save to Database** — Persist your CVs via the Laravel REST API
- **Modern Stack** — Next.js App Router, React 19, TypeScript, Tailwind CSS 4, Laravel 12, SQLite/MySQL

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16.2, React 19, TypeScript 5, Tailwind CSS 4 |
| Backend  | Laravel 12, PHP 8.2+ |
| Database | SQLite (default) / MySQL (optional) |
| Tooling  | Vite 7, Turbopack, ESLint 9 |

## Project Structure

```
digital-cv-builder/
├── digital-cv-builder-backend/     # Laravel 12 REST API
│   ├── app/
│   │   ├── Http/Controllers/       # CvController (store, index, show)
│   │   ├── Models/                 # Cv model (full_name, role, skills)
│   │   └── ...
│   ├── config/                     # App configuration
│   ├── database/                   # Migrations & seeders
│   ├── routes/api.php              # API route definitions
│   ├── .env.example
│   └── composer.json
│
├── digital-cv-builder-frontend/    # Next.js 16 application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx           # Main page (form + preview)
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── CVForm.tsx         # Input form (name, role, skills)
│   │   │   └── CVPreview.tsx      # Live CV card preview
│   │   └── types/cv.ts            # TypeScript interfaces
│   ├── package.json
│   └── next.config.ts
```

## Getting Started

### Prerequisites

- Node.js >= 18
- PHP >= 8.2
- Composer
- SQLite or MySQL

### Backend Setup

```bash
cd digital-cv-builder-backend

# Install PHP dependencies
composer install

# Install frontend dependencies (for Vite asset bundling)
npm install

# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Run database migrations
php artisan migrate

# Start the Laravel development server
php artisan serve
```

The API will be available at `http://localhost:8000`.

### Frontend Setup

```bash
cd digital-cv-builder-frontend

# Install dependencies
npm install

# Start the Next.js development server
npm run dev
```

The frontend will be available at `http://localhost:3000`.

### Environment Variables

The backend `.env` file contains database configuration. The default setup uses SQLite. To switch to MySQL, update the `DB_*` variables in `.env`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/cvs` | Create a new CV |
| GET    | `/api/cvs` | List all CVs |
| GET    | `/api/cvs/{id}` | Get a single CV |

## Usage

1. Start both the backend and frontend servers
2. Open `http://localhost:3000` in your browser
3. Enter your full name, job role, and skills (comma-separated)
4. Watch the live preview update in real-time
5. Click "Save to Database" to persist your CV

## License

MIT
