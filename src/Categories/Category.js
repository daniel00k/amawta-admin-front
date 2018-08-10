import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import './category.scss'

const Category = (props) => (
  <tr>
    <td>{props.category.id}</td>
    <td>{props.category.name}</td>
    <td>
      <Button color="info">
        <Link to={`/categories/${props.category.id}`}>
          <FontAwesomeIcon icon="eye" />Ver
        </Link>  
      </Button>
    </td>
  </tr>
)

Category.propTypes = {
  category: PropTypes.object.isRequired,
}

export default Category
