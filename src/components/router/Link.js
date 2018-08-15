import React, {Component} from 'react'
import propTypes from 'prop-types'

export class Link extends Component {
  static contextTypes = {
    route: propTypes.string,
    linkHandler: propTypes.func
  }
  handleClick = (evt) => {
    evt.preventDefault()
    window.history.pushState(null, '', this.props.to)
    this.context.linkHandler(this.props.to)
  }
  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
  return <a href="#" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
}
}
Link.propTypes = {
  to: propTypes.string.isRequired
}
