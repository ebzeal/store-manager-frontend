import Noty from 'noty';

const notification = message => {
  const success = new Noty({
    text: message
  }).show();
  return success;
};

export default notification;
