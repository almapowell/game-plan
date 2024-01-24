import express from "express";
import { getUsers, updateUser, deleteUser } from "./users";
import serverless from "serverless-http";
import cors from "cors";
const app = express();
const port = 3001;

app.use(express.json());

if (process.env.DEVELOPMENT) {
  app.use(cors());
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users.Items);
  } catch (err) {
    res.status(400).send("This is bad! Real bad! Error getting users", err);
  }
});
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const response = await createUser(user);

    res.send(response);
  } catch (err) {
    res.status(400).send("This is bad! Real bad! Error creating users", err);
  }
});
app.put("/users", async (req, res) => {
  try {
    const user = req.body;
    const response = await updateUser(user);

    res.send(response);
  } catch (err) {
    res.status(400).send("This is bad! Real bad! Error updating users", err);
  }
});
app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await deleteUser(id);

    res.send(response);
  } catch (err) {
    res.status(400).send("This is bad! Real bad! Error deleting users", err);
  }
});

if (process.env.DEVELOPMENT) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export const handler = serverless(app);
