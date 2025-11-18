# SpaceLink Backend

This backend runs an Express server and connects to MongoDB (Mongoose).

Quick start

1. Change to the `Backend` folder:

```powershell
cd Backend
```

2. Install dependencies:

```powershell
npm install
```

3. Create a `.env` from `.env.example` and update values (at minimum `MONGO_URI` and `JWT_SECRET`).

4. Run the server in development:

```powershell
npm run dev
```

The server provides these auth endpoints:
- `POST /api/auth/signup` — body: `{ name, email, password }`
- `POST /api/auth/login` — body: `{ email, password }` (returns `token`)
- `GET /api/auth/me` — header: `Authorization: Bearer <token>`
