import { Router } from "express";

const router = Router ();

const users = [
    { id: 1, nombre: "Miguel", apellido: "Castro", edad: 34},
    { id: 2, nombre: "Juan", apellido: "Perez", edad: 33},
    { id: 3, nombre: "Pepe", apellido: "Gomez", edad: 21},
]

router.get("/users", (req, res)=>{

    res.send(users)
})

router.post("/user", (req, res)=>{
    const user = req.body;

    const newUser = {
        id: users.length + 1,
        ...user,
    };
    users.push(newUser);
    res.status(201).send(user);
})

router.put("/user/:id", (req, res)=>{

    const {id} = req.params;
    const data = req. body;

    const index = users.findIndex(user => user.id === Number(id));
    if(index === -1) return res.status(404).send("User not found");

    users[index] = {
        ...users[index],
        ...data,
    };

    res.status(200).send(users[index]);
})

router.delete("/user/:id", (req, res) =>{
    const {id} = req.params;
    const user = users.find((user) => user.id ===Number(id));
    if (!user) return res.status(404).send("User not found");

    users = users.filter((user) => user.id !== Number(id));

    res.status(200).send("User delete");
})


export default router;