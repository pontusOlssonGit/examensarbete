import React from 'react';
import { Link } from 'react-router-dom';
const CreateQuestionButton = () => {
    return (
    <div>
        <Link to="/add-question" className="btn btn-lg btn-info">
            Add Question
        </Link>
    </div>
    );
}

export default CreateQuestionButton;