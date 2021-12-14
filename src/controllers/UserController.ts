import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
  {id: 1, name: "Rizki"},
  {id: 2, name: "Rama"},
  {id: 3, name: "Risma"},
  {id: 4, name: "Nur"},
  {id: 5, name: "Putri"},
]

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data)
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    data.push({ id, name });

    return res.send("Create Success");
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find( e => e.id == id )

    return res.send(person)
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body

    let person = data.find( e => e.id == id )

    person.name = name

    return res.send("Update Success")
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.filter( e => e.id != id )

    return res.send(person)
  }

}

export default new UserController();