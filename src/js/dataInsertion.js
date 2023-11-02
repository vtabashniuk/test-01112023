import userList from '../templates/userList.hbs';

export const dataInsertion = usersArray => {
  document
    .getElementById('data')
    .insertAdjacentHTML('afterbegin', userList(usersArray));
};
