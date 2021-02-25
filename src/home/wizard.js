import React, { Component, PropTypes } from 'react'
import WizardFormFirstPage from '../home/section/WizardFormFirstPage'
import WizardFormSecondPage from '../home/section/WizardFormSecondPage'
import WizardFormThirdPage from '../home/section/WizardFormThirdPage'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.object.isRequired
}

export default WizardForm