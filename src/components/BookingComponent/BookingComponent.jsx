import React, { PureComponent } from 'react';
import BookingNav from './BookingNav/BookingNav';
import BookingBody from './BookingBody/BookingBody';
import PropTypes from 'prop-types';

import './BookingComponent.css';

class BookingComponent extends PureComponent {
  static propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    calendarData: PropTypes.objectOf(PropTypes.any),
    onHandleShowCalendar: PropTypes.func,
    onHandleMonthChange: PropTypes.func,
    onHandleSelectDate: PropTypes.func,
  }

  render() {
    const { price, rating, reviews, calendarData, onHandleShowCalendar, onHandleMonthChange, onHandleSelectDate } = this.props;

    return (
      <div className='booking-component__wrapper'>
        <BookingNav
          price={price}
          rating={rating}
          reviews={reviews}
        />
        <BookingBody
          calendarData={calendarData}
          onHandleShowCalendar={onHandleShowCalendar}
          onHandleMonthChange={onHandleMonthChange}
          onHandleSelectDate={onHandleSelectDate}
        />
      </div>
    );
  }
}

export default BookingComponent;
