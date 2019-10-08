
const emailLink = document.querySelector('.email-button');

const handleSubmit = (load, form) => {
  let dest = new hf(hash, 4).dash()
  options.body = JSON.stringify(load)
  
  closeEmail(form)
  
  let mailSent = function() {
    this.el = document.createElement('div');
  }
  
  let sendLoad = new mailSent;
  sendLoad.el.setAttribute('class', 'ebox-wrap')
  sendLoad.el.innerHTML = mailSendView({type: 'load'})
  document.body.appendChild(sendLoad.el)

  function listen(cb) {
    cb();
    const responseReturn = document.querySelector('#status-return-button')
    responseReturn.addEventListener('click', function closeMessage(e) {
      responseReturn.removeEventListener('click', closeMessage);
      closeEmail()
    })
  }
  
  
  fetch(dest, options)
  .then(res => res.json())
  .then(resj => {
    if (resj.message === 'Success!') {
      listen(() => sendLoad.el.innerHTML = mailSendView({type: 'success'}))
      
    } else {
      listen(() => sendLoad.el.innerHTML = mailSendView({type: 'undetermined'}))
    }
  })
  .catch(err => {
    listen(() => sendLoad.el.innerHTML = mailSendView({type: 'error', error: err}))
  })

};

const closeEmail = (form) => {
  form ? form.reset() : undefined;
  document.querySelector('.ebox-wrap').remove();
  emailLink.addEventListener('click', watchEmail)
};

const handleEmail = (form, cb, val) => {
 
  [form[6], form[7]].forEach(button => {
    let cleanButton = button.cloneNode(true)
    button.parentNode.replaceChild(cleanButton, button)
  });

  let load;
  if(val === 'Send') {

      load = {
      returnAddr: form[3].value,
      name: form[2].value,
      subject: form[4].value,
      text: form[5].value
    }
    cb(load, form)
  } else {
    return closeEmail(form)
  };
};

const watchEmail = () => {
  emailLink.removeEventListener('click', watchEmail);

  let Emailer = function() {
    function esc(e) {
      if(e.code === 'Escape') {
        return closeEmail(emailForm)
      }
    };
    this.el = document.createElement('div');
    this.el.loadEvents = function() {
      this.addEventListener('keydown', (e) => esc(e))
      // document.addEventListener('keydown', (e) => esc(e))
      /*Can't seem to remove document listener */
    };
  };
  
  
  let eScreen = new Emailer;
  eScreen.el.setAttribute('class', 'ebox-wrap')
  eScreen.el.innerHTML = emailBox
  document.body.appendChild(eScreen.el)
  eScreen.el.loadEvents();
  validateInputs();
  let emailForm = document.querySelector('.email-form');

  [emailForm[6], emailForm[7]].forEach(button => {
    button.addEventListener('click', () => { handleEmail(emailForm, handleSubmit, button.value) })
  })
};


document.addEventListener('DOMContentLoaded', () => {
  emailLink.addEventListener('click', watchEmail);
  watchMenu();
});
