import React, {Component} from 'react'
import CreateQuestionButton from '../Question/CreateQuestionButton'
import QuestionItem from '../Question/QuestionItem'


class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Dashboard</h1>
                <QuestionItem />
                <CreateQuestionButton />
            </div>
        )
    }
}
export default AdminDashboard;
