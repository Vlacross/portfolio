
const emailBox = 
    `
    <section class="email-screen-wrapper email-screen">

      <form class="email-form email-screen">
      <input type="email" autocomplete="off" class="hidden"></input>
        <fieldset class="email-screen email-field">

        <div class="email-screen fieldset-style">
          <legend></legend>

          <div class="form-element">
          <label for="senders-name" class="senders-name-label">Name*</label>
            <input id="senders-name" class="form-input" type="text" placeholder="Your Name" autocomplete="nope" minlength="5" required />
          </div>

          <div class="form-element">
          <label for="email" class="form-input-label">Return E-mail address*</label>
            <input id="email" class="form-input" type="email" placeholder="Email address" autocomplete="nope" minlength="5" required />
          </div>

          

          <div class="form-element">
          <label for="subject" class="subject-input-label">Subject*</label>
          <input id="subject" class="form-input" type="textarea" maxlength="1000" placeholder="Message topic" autocomplete="off" minlength="5" />
          </div>
          
          <div class="form-element">
          <label for="message-body" class="message-body-label">message body*</label>
            <textarea id="message-body" class="form-input  message-body" maxlength="10000" placeholder="Put your message here" minlength="5"> </textarea>
          </div>

          <div class="form-element form-control">
          <input type="reset" value="Cancel" class="form-cancel form-input form-element form-button"></input>
          <input type="submit" value="Send" class="form-submit form-input form-element form-button"></input>
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
  form[7].setAttribute('disabled', true)
  
  let format = () => (/^[A-z\d]+@+[A-z\d]+(\.)+[A-z\d]+$/g.test(form[3].value) ? true : false);
  let lengthCheck = (val) => (val.length >= 5 ? true : false);
  let check = function() {

    let stat = {
      returnAddr: (format() && form[3].classList.remove('error')),
      name: (lengthCheck(form[2].value) && form[2].classList.remove('error')),
      subject: (lengthCheck(form[4].value) && form[4].classList.remove('error')),
      text: (lengthCheck(form[5].value) && form[5].classList.remove('error'))
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
    }
  checkInt = window.setInterval(clearSubmit, 500)

  for (let i = 2; i < 6; i++) {
    let stat = check()
    form[i].onblur = function() {
      let holder = i === 3 ? 'must be proper email format!' : 'must be at least 5 characters long!';
      i === 3 && !stat.returnAddr && form[3].setAttribute('placeholder', holder)
      i === 3 && !stat.returnAddr && form[3].classList.add('error')
      i === 3 && !stat.returnAddr && form[7].setAttribute('disabled', true)

      i === 2 && !stat.name && form[2].setAttribute('placeholder', holder)
      i === 2 && !stat.name && form[2].classList.add('error')
      i === 2 && !stat.name && form[7].setAttribute('disabled', true)

      i === 4 && !stat.subject && form[4].setAttribute('placeholder', holder)
      i === 4 && !stat.subject && form[4].classList.add('error')
      i === 4 && !stat.subject && form[7].setAttribute('disabled', true)

      i === 5 && !stat.text && form[5].setAttribute('placeholder', holder)
      i === 5 && !stat.text && form[5].classList.add('error')
      i === 5 && !stat.text && form[7].setAttribute('disabled', true)
     check()
    }
  };

};

//     const handleKeydown = (e, cb, f) => {
// console.log(e)
//       if(e.code === 'Escape') {
//             cb(f)
//           }
//     };

    

