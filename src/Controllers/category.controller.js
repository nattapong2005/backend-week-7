const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// SELECCT * FROM Category
exports.get = async (req, res) => {
      const category = await prisma.category.findMany({
        include: { 
            products: true,
         }
      });
      res.json(category);
    };

//  SELECT * FROM Category WHERE id = [id]
exports.getById = async (req, res) => {
        const { id } = req.params;
        const category = await prisma.category.findUnique({
          where: {
            id: parseInt(id),
          },
          include: {
              products: true,
          }
        });
        res.json(category);
      };