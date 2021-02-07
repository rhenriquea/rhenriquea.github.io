import moment from 'moment';

export const formatDate = date => {
  if (date) {
    return moment(date).format('DD MMM YYYY');
  }
  return '';
};

export default {
  formatDate,
};
