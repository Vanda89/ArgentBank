import './Features.css'
import IconChat from '../../assets/img/icons/icon-chat.png'
import IconMoney from '../../assets/img/icons/icon-money.png'
import IconSecurity from '../../assets/img/icons/icon-security.png'
import { PropTypes } from 'prop-types'

function FeatureItem({ icon, altText, title, content }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={altText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      <FeatureItem
        icon={IconChat}
        altText="Chat Icon"
        title="You are our #1 priority"
        content="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        icon={IconMoney}
        altText="Money Icon"
        title="More savings means higher rates"
        content="The more you save with us, the higher your interest rate will be!"
      />

      <FeatureItem
        icon={IconSecurity}
        altText="Security Icon"
        title="Security you can trust"
        content="We use top of the line encryption to make sure your data and money is
        always safe."
      />
    </section>
  )
}

FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
