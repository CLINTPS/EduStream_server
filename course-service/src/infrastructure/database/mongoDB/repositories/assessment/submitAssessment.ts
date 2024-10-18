import { ErrorResponse } from "../../../../../_lib/common/error";
import { AssessmentEntity } from "../../../../../domain/entities";
import { Assessment } from "../../models";
import { Result } from "../../models/resultSchema";

export const submitAssessment = async (
    data: AssessmentEntity & { examId: string, userId: string,courseId: string, answers: { questionId: string, selectedAnswer: string }[] }
): Promise<{ correctAnswers: number, totalScore: number, resultStatus: string }> => {
    try {
        console.log("Submit assessment repo data..", data);
        const { examId, userId,courseId, answers } = data;
        console.log("Cpirse id..",courseId);
        

        const exam = await Assessment.findById(examId);
        console.log("Exam result", exam);

        if (!exam) {
            throw new Error("Exam not found");
        }

        let correctAnswers = 0;

        answers.forEach((submittedAnswer) => {
            const question = exam.questions.find(
                (q: any) => q._id.toString() === submittedAnswer.questionId
            );
            if (question && question.answer === submittedAnswer.selectedAnswer) {
                correctAnswers++;
            }
        });

        
        const totalScore = correctAnswers * exam.questionScore;

        const resultStatus = totalScore >= exam.passingScore ? 'Passed' : 'Failed';

        console.log(`User ${userId} got ${correctAnswers} correct answers out of ${exam.questions.length}`);
        console.log(`Total Score: ${totalScore}`);
        console.log(`totalQuestions : ${exam.questions.length}`);
        console.log(`Result Status: ${resultStatus}`);
        
        const existingResult = await Result.findOne({userId,examId})
        console.log("existingResult of exam.",existingResult);

        if(existingResult){
            existingResult.correctAnswers=correctAnswers;
            existingResult.totalQuestions=exam.questions.length;
            existingResult.resultStatus=resultStatus;
            existingResult.score=totalScore;

            await existingResult.save();
            console.log("Result updated successfully.");
        }else{
            const result = new Result({
                userId,
                examId,
                courseId,
                correctAnswers,
                totalQuestions:exam.questions.length,
                resultStatus,
                score:totalScore,
            });

            await result.save();
            console.log("Result created successfully.");
        }
        
        return {
            correctAnswers,
            totalScore,
            resultStatus
        };

    } catch (error: any) {
        console.error("Submit assessment repo error:", error);
    
    
        if (error instanceof ErrorResponse) {
          throw error;
        }
    
        throw ErrorResponse.internalError(
          error.message || "An unexpected error occurred"
        );
      }
}