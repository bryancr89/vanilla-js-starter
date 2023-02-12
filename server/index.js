var express = require("express");
var cors = require("cors");
const { uuid } = require("uuidv4");

var app = express();
app.use(express.json());

app.use(cors());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

var taskRouter = express.Router();

var tasks = [];

taskRouter
  .route("/")
  .get(function (req, res) {
    return res.json(tasks);
  })
  .post(function (req, res) {
    tasks.push({
      ...req.body,
      id: uuid(),
    });
    return res.json(tasks);
  });
taskRouter.route("/:task_id")
  .get(function (req, res) {
    const id = req.params.task_id
    return res.json(tasks.find((t) => t.id === id) ?? {});
  })
  .delete(function (req, res) {
    const id = req.params.task_id
    tasks = tasks.filter((t) => t.id !== id)
    return res.json({});
  })
  .put(function (req, res) {
    const id = req.params.task_id
    for (let index in tasks) {
      const task = tasks[index]
      if (task.id === id) {
        tasks[index] = {
          ...task,
          ...req.body
        }
        return res.json(tasks[index])
      }
    }
    return res.json({})
  });

app.use("/api/task/", taskRouter);
