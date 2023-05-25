// Write your code here.
import {Component} from 'react'

import './index.css'

const plus = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minus = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  getAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isClicked} = this.state

    if (isClicked) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  getButton = () => {
    const {isClicked} = this.state
    const image = isClicked ? minus : plus
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onClickButton}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="item">
        <div className="questionContainer">
          <h1 className="question">{questionText}</h1>
          {this.getButton()}
        </div>
        {this.getAnswer()}
      </li>
    )
  }
}

export default FaqItem
