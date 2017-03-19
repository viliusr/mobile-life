require('isomorphic-fetch');

function get(url) {
  return new Promise(resolve => {
    fetch(url).then(response => {
      resolve(response.json())
    })
  })
}

function post(url, data) {
  return new Promise(resolve => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      resolve(response.json())
    })
  })
}

const api = {
  getQuestions: () => get('http://localhost:3001/get_questions'),
  getResults: (data) => post('http://localhost:3001/get_results', data)
}

module.exports = api;