import express from "express"
import { prisma } from "./dao/db.js";
const app=express()

app.use(express.json())

app.get("/employes",async (req,resp)=>{
    const employes= await prisma.employe.findMany()
    await prisma.$disconnect();
    resp.json(employes)
})

app.post("/employes",async (req,resp)=>{
    const employe= await prisma.employe.create({data:req.body})
    await prisma.$disconnect();
    resp.json(employe)
})

app.delete("/employes/:id",async (req,resp)=>{
    const id=Number(req.params['id'])
    await prisma.employe.delete({where: { id: id }});
    await prisma.$disconnect();
    resp.send("Employé supprimé")
})

console.log("Server is running: http://localhost:3000")
app.listen(3000)
