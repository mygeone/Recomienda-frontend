import { NextApiRequest, NextApiResponse } from 'next';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const result = await prisma.Directorio_Oficial_EE_2021.findMany({
    where: {
      NOM_COM_RBD : req.query.comuna,
    }, 
    select: {
      LATITUD: true,
      LONGITUD: true,
    }
  })
  res.json(result)
}