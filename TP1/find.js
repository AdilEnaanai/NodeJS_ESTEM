import { prisma } from "./dao/db.js";

const etudiants = await prisma.employe.findMany();

console.log(etudiants);
await prisma.$disconnect();
