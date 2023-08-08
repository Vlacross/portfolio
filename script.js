
const emailLink = document.querySelector('.email-button');

const handleSubmit = (load, form) => {
  let mailHash = '-55xkvyyk1nxre2neg3-.-eg/t9axx.3/nyna1regy3-e3tegk';


  let dest = new hf(mailHash, 4).dash()
  options.body = JSON.stringify(load)
  
  closeEmail(form)
  
  
  function listen(cb) {
    cb();
    const responseReturn = document.querySelector('#status-return-button')
    
    function closeMessage(e) {
      document.removeEventListener('keydown', closeMessage);
      document.removeEventListener('keydown', closeMessage);
      closeEmail()
    }
    
    document.addEventListener('keydown', closeMessage)
    
    responseReturn.addEventListener('click', closeMessage)
  }


  
  let mailSent = function() {
   
    this.el = document.createElement('div');
  }
  
  let sendLoad = new mailSent;
  sendLoad.el.setAttribute('class', 'ebox-wrap')
  sendLoad.el.innerHTML = mailSendView({type: 'load'})
  document.body.appendChild(sendLoad.el)
  
  
  
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
  document.body.setAttribute('style', 'position: unset;');
  emailLink.addEventListener('click', watchEmail)
};

const handleEmail = (form, cb, val) => {

  window.clearInterval(checkInt);
 
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
  document.body.setAttribute('style', 'position: fixed;');

  let Emailer = function() {
    this.el = document.createElement('div');
    this.el.keyHandle = new kHandle
    this.el.focusEls = () => {
      let ins = emailForm.querySelectorAll(
        'a[href]:not([disabled]), \
         button:not([disabled]), \
        textarea:not([disabled]), \
        input[type="text"]:not([disabled]), \
        input[type="email"]:not([disabled]), \
        input[type="textarea"]:not([disabled]), \
        input[type="reset"]:not([disabled]), \
        input[type="submit"]:not([disabled]), \
        input[type="button"]:not([disabled])');
        ins[2].focus();
        return ins;
    }
    this.el.kListen = () => {
      let inputs = this.el.focusEls();
      this.el.addEventListener('keydown', (e) => this.el.keyHandle.esc(e, closeEmail, emailForm))
      this.el.addEventListener('keydown', (e) => this.el.keyHandle.tabTrap(e, inputs))
    }
  };

  function kHandle() {
    this.tabTrap = (e, ins) => {

      if (e.code === "Tab") {
        if(e.shiftKey) {
          if (document.activeElement === ins[1]) {
            
            let bet = () => (ins[ins[ins.length-1].disabled ? ins.length-2 : ins.length-1].focus())
            setTimeout(bet, 400)
            e.preventDefault();
          }
        } else {
          if (!ins[ins.length-1].disabled && document.activeElement === ins[ins.length-1]) {
            ins[1].focus();
            e.preventDefault();
          } else if (document.activeElement === ins[ins.length-2]) {
            let bet = () => (ins[ins[ins.length-1].disabled ? 1 : ins.length-1].focus())
            setTimeout(bet, 400)
            e.preventDefault();
          }
        }
      }
      
    }

    this.esc = (e, cb, f) => {
      if(e.code === 'Escape') {
        return cb(f)
      }
    }
  }
  
  
  let eScreen = new Emailer;
  eScreen.el.setAttribute('class', 'ebox-wrap')
  eScreen.el.innerHTML = emailBox
  document.body.appendChild(eScreen.el)
  let emailForm = document.querySelector('.email-form');
  eScreen.el.kListen()
  validateInputs();

  [emailForm[6], emailForm[7]].forEach(button => {
    button.addEventListener('click', () => { handleEmail(emailForm, handleSubmit, button.value) })
  })
};

function wakeUpSites() {

  let wakeHash = '-55xkvyyk1nxre2neg3-2-eg/t92mm2hiew7:l_hlia.-eg/t9axx.3/n';
  

  let loadK = new hf('1h17dj50', 5).dash()
  let loadV = new hf('_1_57e_hnay', 5).dash()
  let wakeLoad = {[loadK]: loadV}
  let url = new hf(wakeHash, 4).dash();

  options.body = JSON.stringify(wakeLoad)

  fetch(url, options)
  .then(res => null)
  .catch(e => null)
}


document.addEventListener('DOMContentLoaded', () => {
  emailLink.addEventListener('click', watchEmail);
  watchMenu();
  wakeUpSites();
  setupDetailToggle();
});
