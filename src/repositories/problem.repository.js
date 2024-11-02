const NotFoundError = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {

    async createProblem(problemData){
        const problem = await Problem.create({
            title: problemData.title,
            description: problemData.description,
            testCases: problemData.testCases?problemData.testCases:[]
        })
        return problem;
    }

    async getAllProblem(){
        const problems = await Problem.find({});
        return problems;
    }

    async getProblem(id){
        const problem = await Problem.findById(id);
        if(!problem){
            throw new NotFoundError("Problem",id);
        }
        return problem;
    }
}

module.exports = ProblemRepository;