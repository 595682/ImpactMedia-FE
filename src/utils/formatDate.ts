import { format } from 'date-fns';

const formatDate = (date: string) => {
  const preformatted = new Date(date);

  return format(preformatted, 'LLLL dd, yyyy');
};

export default formatDate;
