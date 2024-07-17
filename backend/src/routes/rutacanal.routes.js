import {Router} from "express";

const rutacanal = Router();

rutacanal.get("/", (req, res) => {
    res.json({ "aplicacion": "maps"})
});

rutacanal.get("/canal", (req, res) => {
    res.json({
        "msg":"hola mundo",
        "user": "carlos",
        "aplicacion": "maps",
        "type": "Backend"

    })
});


export default rutacanal;
