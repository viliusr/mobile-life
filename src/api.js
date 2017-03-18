const questions = [
  { id: 1, title: 'First question', answers: ['Ans 1', 'Ans 2'] },
  { id: 2, title: 'Second question', answers: ['Ans 5', 'Ans 8'] }
];

const api = {
  getQuestions: () => new Promise(resolve => setTimeout(() => resolve(questions), 1000) )
}

module.exports = api;