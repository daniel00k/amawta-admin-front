import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'
import Category from './Category'
import ApiClient from '../clients/ApiClient'

import './categoryContainer.scss'

class CategoriesContainer extends Component{

  constructor(props){
    super()
    this.state = {
      isLoading: true,
      categories: []
    }
  }

  async componentDidMount() {
    if(this.state.categories.length === 0) {
      let categories = await this.props.apiClient.getCategories()
      this.setState({
        isLoading: false,
        categories: categories.data
      })
    }
  }

  render(){
    return (
      <div className="category-container">
      <div className="container-title">
        <h1>{this.state.isLoading}</h1>
      </div>
      <div className="container-content">
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map(category => <Category category={category} key={category.id}/>)}
          </tbody>
        </Table>
      </div>
    </div>
    )
  }
}

CategoriesContainer.defaultProps = {
  apiClient: new ApiClient()
}

export default CategoriesContainer
