import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    return res.json({
      "success": true,
      "message": "Get All Todo Data",
      'payload': todos
    })
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    await service.store();

    return res.json({
      "success": true,
      "message": "Create Success"
    })
  }

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    return res.json({
      "success": true,
      "message": "Get Data Todo By ID",
      "payload": todo
    })
  }

  update = async(req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    await service.update();

    return res.json({
      "success": true,
      "message": "Updated Success"
    })
  }

  delete = async(req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.delete();

    return res.json({
      "success": true,
      "message": "Deleted Success"
    })
  }

}

export default new TodoController();