CREATE TABLE "users" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "username" varchar(30) UNIQUE NOT NULL,
  "email" varchar(50) UNIQUE NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "todos" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "title" varchar(100) NOT NULL,
  "description" text NOT NULL,
  "status" boolean NOT NULL,
  "assignedUser" int NOT NULL,
  "Categories" int NOT NULL,
  "created_at" timestamp
);

CREATE TABLE "categories" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar(50) NOT NULL
);

ALTER TABLE "todos" ADD FOREIGN KEY ("assignedUser") REFERENCES "users" ("id");

ALTER TABLE "todos" ADD FOREIGN KEY ("Categories") REFERENCES "categories" ("id");