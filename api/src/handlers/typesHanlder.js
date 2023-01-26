const {getTypes,saveTypesOnDb} = require("../controllers/typesController")

const getTypesHandler = async (req,res)=>{
    try {
        const types = await saveTypesOnDb()


        res.status(201).json(types)
        
    } catch (error) {
        res.status(200).json( await getTypes() );
        
    }
}

module.exports = {getTypesHandler}