import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFav} = props
  const {id, titleInput, isFavClicked, dateInput} = appointmentDetails

  const dateInputFormat = format(new Date(dateInput), 'dd MMMM yyyy EEEE')

  const isClickedImgUrl = isFavClicked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickFavButton = () => {
    toggleIsFav(id)
  }

  return (
    <li className="li-container">
      <div className="title-star-button-container">
        <p className="title">{titleInput}</p>
        <button
          type="button"
          className="star-button"
          onClick={onClickFavButton}
          testid="star"
        >
          <img src={isClickedImgUrl} alt="star" className="star" />
        </button>
      </div>
      <p className="date">Date: {dateInputFormat}</p>
    </li>
  )
}

export default AppointmentItem
