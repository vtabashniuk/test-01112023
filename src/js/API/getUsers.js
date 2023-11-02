import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { dateChecker } from '../utils/dateChecker';

export const getUsers = (startDate, endDate) => {
  const dateRange = dateChecker(startDate, endDate);
  return axios.get(BASE_URL, {
    params: {
      _birthday_start: dateRange.startDate,
      _birthday_end: dateRange.endDate,
      _locale: 'uk_UA',
    },
  });
};
