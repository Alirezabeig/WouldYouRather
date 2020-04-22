export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function ReceiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
