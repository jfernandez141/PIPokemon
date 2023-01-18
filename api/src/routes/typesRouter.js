const { Router } = require("express");
const { getTypesHandler } = require("../handlers/typesHanlder");

const typesRouter = Router();

typesRouter.get("/", getTypesHandler);

module.exports = typesRouter;
