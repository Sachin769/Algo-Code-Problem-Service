const NotImplementedError = require("../errors/notImplemented.error");
const {ProblemService} = require("../services");
const {ProblemRepository} = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

async function pingProblemController (req,resp,next){
    try{
        throw new NotImplementedError("pingProblemController");
    }catch(e){
        next(e);
    }
}

async function addProblem (req,resp,next){
    try{
        console.log("req.body",req.body);
        const newProblem = await problemService.createProblem(req.body);
        return resp.status(201).json({
            success: true,
            message: "Successfully Created New Problem",
            error: {},
            data: newProblem
        })
    }catch(e){
        console.log(e);
        console.log("messae",e.message);
        next(e);
    }
}


async function getProblems(req,resp,next) {
    try{
        const problems = await problemService.getAllProblems();
        return resp.status(200).json({
            success: true,
            message: "Problem List",
            error: {},
            data: problems
        });
    }catch(e){
        next(e);
    }
}

async function getProblem(req,resp,next){
    try{
        const getParticularProblem = await problemService.getProblem(req.params.id);
        return resp.status(200).json({
            success: true,
            message: "Successfully Fetched A Problem",
            error: {},
            data: getParticularProblem
        });
    }catch(e){
        next(e);
    }
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblems,
    getProblem
}