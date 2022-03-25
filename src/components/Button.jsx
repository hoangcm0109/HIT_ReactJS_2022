import React, { Children } from 'react'
import PropTypes from 'prop-types'

Button.defaultProps = {
    text: 'HIT'
}

function Button({
    text = 'HIT'
}) {

    console.log(text);
  return (
    <div>
        {text}
    </div>
  )
}

Button.propTypes = {

}

export default Button
