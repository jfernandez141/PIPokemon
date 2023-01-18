const {getTypes,saveTypesOnDb} = require("../controllers/typesController")

const getTypesHandler = async (req,res)=>{
    try {
        const types = await saveTypesOnDb()


        res.status(200).json(types)
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        
    }
}

module.exports = {getTypesHandler}