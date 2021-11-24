import React from 'react'
import './styles.css'

class Divider extends React.Component {
  constructor(props) {
    super(props)
  }

  calculateClassString() {
    let classes = "divider"

    if(this.props.topBorder) {
      classes += " divider-top-border"
    }

    if(this.props.bottomBorder) {
      classes += " divider-bottom-border"
    }

    return classes
  }

  render() {
    let classes = this.calculateClassString()

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

Divider.defaultProps = {
  topBorder: true,
  bottomBorder: true
}

export default Divider;
