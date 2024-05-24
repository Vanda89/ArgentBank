import './Account.css'

export default function Account() {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title"></h3>
        <p className="account-amount"></p>
        <p className="account-amount-description"></p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}
