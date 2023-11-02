import usersRequest from './js/usersRequest';
import Handlebars from 'handlebars';
import userCardHandlebar from './templates/partials/userCard.hbs';

Handlebars.registerPartial('userCard', userCardHandlebar);
Handlebars.registerHelper('cutWebSite', string => {
  return string.replace('http://', '');
});
