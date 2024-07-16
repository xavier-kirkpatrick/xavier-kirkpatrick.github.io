// server/server.ts
import express from "express";
import * as Path2 from "node:path";

// server/routes/fruits.ts
import { Router } from "express";

// server/db/connection.ts
import knex from "knex";

// server/db/knexfile.js
import * as Path from "node:path";
import * as URL from "node:url";
var __filename = URL.fileURLToPath(import.meta.url);
var __dirname = Path.dirname(__filename);
var knexfile_default = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, "dev.sqlite3")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:"
    },
    migrations: {
      directory: Path.join(__dirname, "migrations")
    },
    seeds: {
      directory: Path.join(__dirname, "seeds")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "/app/storage/prod.sqlite3"
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  }
};

// server/db/connection.ts
var env = process.env.NODE_ENV || "development";
var connection = knex(knexfile_default[env]);
var connection_default = connection;

// server/db/fruits.ts
async function getAllFruits(db = connection_default) {
  return db("fruit").select();
}

// server/routes/fruits.ts
var router = Router();
router.get("/", async (req, res) => {
  try {
    const fruits = await getAllFruits();
    res.json({ fruits: fruits.map((fruit) => fruit.name) });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
var fruits_default = router;

// server/server.ts
var server = express();
server.use(express.json());
server.use("/api/v1/fruits", fruits_default);
if (process.env.NODE_ENV === "production") {
  server.use(express.static(Path2.resolve("public")));
  server.use("/assets", express.static(Path2.resolve("./dist/assets")));
  server.get("*", (req, res) => {
    res.sendFile(Path2.resolve("./dist/index.html"));
  });
}
var server_default = server;

// server/index.ts
var PORT = process.env.PORT ?? 3e3;
server_default.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
