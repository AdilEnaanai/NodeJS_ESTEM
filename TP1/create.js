import { prisma } from "./dao/db.js";

const employe = await prisma.employe.create({
  data: {
    nom: "Alami",
    prenom: "Hassan",
    departement: "Info"
  }
});

console.log(employe);

await prisma.$disconnect();
