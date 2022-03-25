import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useParams } from 'react-router-dom'

const MainContent = props => {

  const location = useLocation()
  const params = useParams()

  console.log(params);

  return (
    <div style={{fontSize: '20px', fontWeight: 600, textAlign: 'center'}}>Màn hình content</div>
  )
}

MainContent.propTypes = {
    text: PropTypes.string,
    textNumber: PropTypes.number
}

export default MainContent