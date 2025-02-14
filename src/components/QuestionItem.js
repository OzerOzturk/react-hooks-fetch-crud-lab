import React from "react";

function QuestionItem({ question, deleteQuestion, editQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChangeSelect(e) {
    editQuestion(id, e.target.vaue);
  }

  function handleDeleteQuestion() {}
  deleteQuestion(id);

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangeSelect}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
