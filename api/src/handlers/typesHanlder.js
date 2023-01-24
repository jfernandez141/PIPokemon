const {getTypes,saveTypesOnDb} = require("../controllers/typesController")

const getTypesHandler = async (req,res)=>{
    try {
        const types = await saveTypesOnDb()


        res.status(201).json(types)
        
    } catch (error) {
        res.status(400).json({ error: "The Bdd already contains the types pokemons" });
        
    }
}

module.exports = {getTypesHandler}