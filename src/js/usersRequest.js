import { getUsers } from './API/getUsers';
import { dataInsertion } from './dataInsertion';

usersRequest.onsubmit = async e => {
  try {
    e.preventDefault();
    document.getElementById('data').innerHTML = '';
    const startDate = usersRequest.startDate.value;
    const endDate = usersRequest.endDate.value;
    const response = await getUsers(startDate, endDate);
    const result = response.data;
    dataInsertion(result);
  } catch (error) {
    console.log(error.message);
  }
};
