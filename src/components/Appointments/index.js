import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {titleInput: '', dateInput: '', appointmentList: []}

  onClickedStarredButton = () => {
    const {appointmentList} = this.state
    this.setState({
      appointmentList: appointmentList.filter(
        eachItem => eachItem.isFavClicked === true,
      ),
    })
  }

  toggleIsFav = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isFavClicked: !eachItem.isFavClicked}
        }
        return eachItem
      }),
    }))
  }

  onRenderingAppointmentList = () => {
    const {appointmentList} = this.state

    return appointmentList.map(eachItem => (
      <AppointmentItem
        key={eachItem.id}
        appointmentDetails={eachItem}
        toggleIsFav={this.toggleIsFav}
      />
    ))
  }

  onAddClick = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointmentList = {
      id: v4(),
      titleInput,
      dateInput,
      isFavClicked: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointmentList],
      titleInput: '',
      dateInput: '',
    }))
  }

  onTitleInputChange = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onDateInputChange = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  render() {
    const {titleInput, dateInput} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="form-img-container">
            <div className="form-container">
              <form className="form" onSubmit={this.onAddClick}>
                <h1 className="form-heading"> Add Appointments</h1>
                <div className="input-label">
                  <label className="label" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    className="title-input-bar"
                    type="text"
                    placeholder="Title"
                    onChange={this.onTitleInputChange}
                    value={titleInput}
                    id="title"
                  />
                </div>
                <div className="input-label">
                  <label className="label" htmlFor="date">
                    DATE
                  </label>
                  <input
                    className="title-input-bar"
                    type="date"
                    placeholder="dd/mm/yyy"
                    onChange={this.onDateInputChange}
                    value={dateInput}
                    id="date"
                  />
                </div>
                <div>
                  <button className="form-button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="img-container">
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="img"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="app-star-container">
            <h1>Appointments</h1>
            <div>
              <button
                type="button"
                className="starred-button"
                onChange={this.onClickedStarredButton}
              >
                starred
              </button>
            </div>
          </div>
          <ul className="ul-container">{this.onRenderingAppointmentList()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
