import { Router } from "express";
import { getTasks, createTask, updatTaskStatus, getUserTasks } from "../controllers/taskController";

const router = Router();
router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updatTaskStatus)
router.get("/user/:userId", getUserTasks);


export const taskRoutes = router;