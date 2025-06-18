import express, { Request, Response } from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from turborepo!");
});

app.post("/signup", async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "username and password are required" });
  }

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  return res
    .status(200)
    .json({ success: true, message: "user created successfully", user });
});

app.listen(3002, () => {
  console.log("listening on 3002...");
});
