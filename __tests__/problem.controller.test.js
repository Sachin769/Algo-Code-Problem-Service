const problemController = require("../src/controllers/problem.controller");

//to mock the ProblemService we need to access here ProblemService.
const ProblemService = require("../src/services/problem.service");

//here we mock the ProblemService.
jest.mock("../src/services/problem.service");

describe("getAllProblmes test",()=>{
    beforeEach(()=>{
        req= {};
        resp={
            status:jest.fn(()=> resp),
            json: jest.fn()
        };
        next = jest.fn()
    })

    test("should get all Problems",async ()=>{
        const problems = [];
        ProblemService.prototype.getAllProblems.mockResolvedValue(problems);
        await problemController.getProblems(req,resp,next);
        expect(resp.status).toHaveBeenCalledWith(200);
        expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
        expect(next).not.toHaveBeenCalled();
    })

    test("getProblem should call next with error if service throws error",async ()=>{
        const mockError = new Error("id",123);
        ProblemService.prototype.getProblem.mockRejectedValue(mockError);
        req.params = {id:10};
        await problemController.getProblem(req,resp,next);

        expect(next).toHaveBeenCalledWith(mockError);
        expect(resp.status).not.toHaveBeenCalled();
        expect(resp.json).not.toHaveBeenCalled();

    })
})

