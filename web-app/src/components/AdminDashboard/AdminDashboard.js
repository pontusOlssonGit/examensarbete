import React, {Component} from 'react'
import QuestionItem from '../Question/QuestionItem'

class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Dashboard</h1>
                <QuestionItem />
            </div>
        )
    }
}
export default AdminDashboard;
