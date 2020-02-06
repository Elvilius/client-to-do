import * as moment from 'moment';

export const normalizeData = data => {
    return moment(data).format('MM.DD.YYYY H:mm');
  };