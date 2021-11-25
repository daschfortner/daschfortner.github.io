import React from 'react'
import './styles.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="button">
        {this.props.children}
      </div>
    )
  }
}

export default Button
