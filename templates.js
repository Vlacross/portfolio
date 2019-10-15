
const emailBox = 
    `
    <section class="email-screen-wrapper email-screen">

      <form class="email-form email-screen">
      <input type="email" autocomplete="off" class="hidden"></input>
        <fieldset class="email-screen email-field">

        <div class="email-screen fieldset-style">
          <legend class="fieldset-legend">* Required</legend>
          <a href="#format-note" class="fieldset-legend format-note-link">Note*</a>

          <div class="form-element">
          <label for="senders-name" class="senders-name-label">Name*</label>
            <input id="senders-name" class="form-input" type="text" placeholder="Your Name" autocomplete="nope" minlength="5" required />
            <div class="input-validation">
            </div>
          </div>

          <div class="form-element">
          <label for="email" class="form-input-label">Return E-mail address*</label>
            <input id="email" class="form-input" type="email" placeholder="Email address" autocomplete="nope" minlength="5" required />
            <div class="input-validation">
            </div>
          </div>

          

          <div class="form-element">
          <label for="subject" class="subject-input-label">Subject*</label>
          <input id="subject" class="form-input" type="textarea" maxlength="1000" placeholder="Message topic" autocomplete="off" minlength="5" />
          <div class="input-validation">
            </div>
          </div>
          
          <div class="form-element">
          <label for="message-body" class="message-body-label">Message body*</label>
            <textarea id="message-body" class="form-input  message-body" maxlength="10000" placeholder="Put your message here" minlength="5"> </textarea>
            <div class="input-validation">
            </div>
          </div>

          <div class="form-element form-control">
          <input type="reset" value="Cancel" class="form-cancel form-input form-element form-button"></input>
          <input type="submit" value="Send" class="form-submit form-input form-element form-button"></input>
          </div>

          <div class="form-element ">
            <span id="format-note" class="fieldset-legend format-note">
              Note: if your email includes the following characters:<br> 
              <span class="email-format-characters" style="border-top: 1px solid silver;border-bottom: 1px solid silver;">!#$%&amp;'*+-/=?^_\`{|}~;</span> <br>
              you may need to send an email through your personal mailing client to timvlasuk@gmail.com.
            </span>
          </div>

        </div>
          

        </fieldset>
      </form>



    </section>
    `;


  const mailSendView = (view) =>{
    let msg;
  switch(view.type) {
    case 'load':
      msg = ' <h1>Message is sending, please wait.</h1>';
      break;
    case 'success':
      msg = '<h1>Message was sent successfully.</h1>';
      break;
    case 'undetermined':
        msg = ('\
        <h1>We are not sure if your message was successfully sent.</h1>\
        <h4>Try again or email Tim at timvlasuk@gmail.com</h4>');
        break;
    case 'error':
        msg = (`\
        <h1>Message send error:</h1></h1>\
        <h4>${view.error}</h4>\
        <h4>Please try again or email Tim at timvlasuk@gmail.com</h4>`);
        break;
  }

  return (
  `
  <section role="status" class="message-response">
  

    <div class="message-box">
    <div class="response-return">
    
    <div class="response-burger" >
      <label for="status-return-button"></label>
      <input id="status-return-button" class="mail-status-button" role="button" title="message status return button" type="button" value="">
        <div class="response-patty response-patty-one" ></div>
        <div class="response-patty response-patty-two" ></div>
      </div>
    </div>
    <div class="message-box-inner-wrapper">
      ${msg}
      
    </div>
    </div>
  </section>
  `)
};

let checkInt;

const validateInputs = () => {
  let form = document.querySelector('.email-form');
  let inputContainers = document.querySelector('.fieldset-style').children;
  form[7].setAttribute('disabled', true)
  
  let format = () => (/^[A-Za-z\d\.\-]+@+[A-Za-z\d\.\-]+(\.)+[A-Za-z\d\.\-]+$/g.test(form[3].value) ? true : false);
  let lengthCheck = (val, num) => (val.length >= num ? true : false);
  let check = function() {

    let stat = {
      returnAddr: (format() && form[3].classList.remove('error') && (inputContainers[2].children[2].innerHTML = '')),
      name: (lengthCheck(form[2].value, 2) && form[2].classList.remove('error')),
      subject: (lengthCheck(form[4].value, 5) && form[4].classList.remove('error')),
      text: (lengthCheck(form[5].value, 5) && form[5].classList.remove('error'))
    }
    
    return stat;
  }

  function clearSubmit() {
    let stat = check()
    let allInputs = Object.keys(stat).length
    for (let k in stat) {
      if(stat[k] !== undefined) { form[7].setAttribute('disabled', true) }
      else { allInputs-- }
    }
    if(allInputs === 0) { form[7].removeAttribute('disabled') }
    return stat;
    }
  checkInt = window.setInterval(clearSubmit, 500)

  for (let i = 2; i < 6; i++) {
    let stat = () => check()
    let valerr = (holder) => (`<span class="input-validation-message">${holder}</span>`)
    form[i].onblur = function() {
      let holder = i === 3 ? 'must be proper email format!' : i === 2 ? 'must be at least 2 characters long!' : 'must be at least 5 characters long!';
      i === 3 && !stat().returnAddr && form[3].classList.add('error')
      i === 3 && !stat().returnAddr && form[7].setAttribute('disabled', true)
      i === 3 && inputContainers[3].children[1].classList.contains('error') && (inputContainers[3].children[2].innerHTML = valerr(holder))

      i === 2 && !stat().name && form[2].classList.add('error')
      i === 2 && !stat().name && form[7].setAttribute('disabled', true)
      i === 2 && inputContainers[2].children[1].classList.contains('error') && (inputContainers[2].children[2].innerHTML = valerr(holder))

      i === 4 && !stat().subject && form[4].classList.add('error')
      i === 4 && !stat().subject && form[7].setAttribute('disabled', true)
      i === 4 && inputContainers[4].children[1].classList.contains('error') && (inputContainers[4].children[2].innerHTML = valerr(holder))

      i === 5 && !stat().text && form[5].classList.add('error')
      i === 5 && !stat().text && form[7].setAttribute('disabled', true)
      i === 5 && inputContainers[5].children[1].classList.contains('error') && (inputContainers[5].children[2].innerHTML = valerr(holder))
     check()
    }
    form[i].onfocus = function() {inputContainers[i].children[2].innerHTML = '';}
  };

};
