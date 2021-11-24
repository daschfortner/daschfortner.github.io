import React from 'react'
import './styles.css'

class TextBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let columnClass = this.props.splitColumn ? "split-column" : ""

    return (
      <div>
        {this.props.headingText !== "" &&
          <h2>
            {this.props.headingText}
          </h2>
        }
        <p className={columnClass}>{this.props.children}</p>
      </div>
    )
  }
}

export default TextBlock
