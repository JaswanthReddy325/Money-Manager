// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="Money-container">
      <div className="Balence-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image1"
        />
        <div className="sub-container1">
          <p>Your Balance</p>
          <p>Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="Income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image1"
        />
        <div className="sub-container1">
          <p>Your Income</p>
          <p>Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="Expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image1"
        />
        <div className="sub-container1">
          <p>Your Expenses</p>
          <p>Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
