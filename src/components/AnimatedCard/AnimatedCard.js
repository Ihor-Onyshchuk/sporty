import React from 'react'
import T from 'prop-types'
import { Spring } from 'react-spring/renderprops'

const AnimatedCard = ({ card: Card, cardProps, index = 0 }) => (
  <Spring
    from={{ scale: '0' }}
    to={{ scale: '1' }}
    config={{ delay: index * 100, duration: 300 }}
  >
    {springProps => (
      <Card {...cardProps} style={springProps} />
    )}
  </Spring>
)

AnimatedCard.propTypes = {
  card: T.elementType.isRequired,
  cardProps: T.object.isRequired,
  index: T.number
}

export default AnimatedCard;