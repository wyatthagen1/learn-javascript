

const form = document.getElementById('my-form');
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passConfirm = document.getElementById('pass-confirm');
const submitButton = document.getElementById('submit');
const lastName = document.getElementById('last-name');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const countryError = document.getElementById('country-error');
const zipError = document.getElementById('zip-error');
const passError = document.getElementById('pass-error');
const passConfirmError = document.getElementById('pass-confirm-error');
const submitError = document.getElementById('submit-error');
const lastNameError = document.getElementById('last-name-error');

const formObj = {
    inputName: {
        element: inputName,
        error: nameError
    },
    lastName:{
        element: lastName,
        error: lastNameError
    },
    email: {
        element: email,
        error: emailError
    },
    country: {
        element: country,
        error: countryError
    },
    zip: {
        element: zip,
        error: zipError
    },
    password: {
        element: password,
        error: passError
    },
    passConfirm: {
        element: passConfirm,
        error: passConfirmError
    },
    submit: {
        element: submitButton,
        error: submitError
    }
};




setupForm(form,formObj)



function setupForm(form,formObj){

    for(const [key,value] of Object.entries(formObj)){
        const {element, error} = value; 
        element.addEventListener('input',()=>{
            let inputStr = element.value;
            if(inputStr==''){
                element.classList.remove('invalid');
                element.classList.remove('valid');
                error.textContent = ''
                return;
            }
            validateInput(element,error,inputStr)
        })

    }

    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        let validationArr = [];
        for(const [key,value] of Object.entries(formObj)){
            const {element, error} = value;
            let inputStr = element.value;
            console.log(`${element.id} is being evaluated`)
            console.log(`inputString = ${inputStr}`)
            console.log(`element is validated as ${validateInput(element,error,inputStr)}`)
            validationArr.push(validateInput(element,error,inputStr));
        }
        console.log(validationArr)
        if(validationArr.includes(false)){
            console.log('invalid inputs')
            resetForm(formObj);

        }else{
            console.log('form submitted successfully')
            resetForm(formObj);
        }
        

    })



}

function resetForm(formObj){
    for(const [key,value] of Object.entries(formObj)){
        const {element, error} = value;
        element.value = '';
        error.textContent = '';
        element.classList.remove('invalid');
        element.classList.remove('valid');
    }
}






function validateInput(element,error,inputStr){
    const elementName = element.id;
    switch(true){ 
        case /name/.test(elementName): // check if the input is a name
            if(!hasNoSpaces(inputStr)){// check if the name is invalid
                if(!element.classList.contains('invalid')){
                    if(element.classList.contains('valid')){
                        element.classList.replace('valid','invalid');
                    }else{
                        element.classList.add('invalid');
                    }
                }
                error.textContent = 'Names should not have spaces'
                return false; 

            }else{
                if(element.classList.contains('invalid')){
                    element.classList.replace('invalid','valid'); // set to valid
                }
                else{
                    element.classList.add('valid')
                }
                error.textContent = '';
                return true;
            }

        case /email/.test(elementName):
            if(!isValidEmail(inputStr)){// check if the name is invalid
                if(!element.classList.contains('invalid')){
                    if(element.classList.contains('valid')){
                        element.classList.replace('valid','invalid');
                    }else{
                        element.classList.add('invalid');
                    }
                }
                error.textContent = 'incorrect Email format'
                return false;  

            }else{
                if(element.classList.contains('invalid')){
                    element.classList.replace('invalid','valid'); // set to valid
                }
                else{
                    element.classList.add('valid')
                }
                error.textContent = '';
                return true;
            }
        
        case /country/.test(elementName):
            if(!hasNoSpaces(inputStr)){// check if the name is invalid

                if(!element.classList.contains('invalid')){
                    if(element.classList.contains('valid')){
                        element.classList.replace('valid','invalid');
                    }else{
                        element.classList.add('invalid');
                    }
                }
                error.textContent = 'We only accept 1 word countries' 
                return false;

            }else{
                if(element.classList.contains('invalid')){
                    element.classList.replace('invalid','valid'); // set to valid
                }
                else{
                    element.classList.add('valid')
                }
                error.textContent = '';
                return true;
            }

        case /zip/.test(elementName):
            if(!isValidUSZipCode(inputStr)){// check if the name is invalid
                if(!element.classList.contains('invalid')){
                    if(element.classList.contains('valid')){
                        element.classList.replace('valid','invalid');
                    }else{
                        element.classList.add('invalid');
                    }
                }
                error.textContent = 'Not a Zip Code bud'
                return false; 

            }else{
                if(element.classList.contains('invalid')){
                    element.classList.replace('invalid','valid'); // set to valid
                }
                else{
                    element.classList.add('valid')
                }
                error.textContent = '';
                return true;
            }
            

        case /pass/.test(elementName):
            if(!isStringPass(inputStr)){// check if the name is invalid
                if(!element.classList.contains('invalid')){
                    if(element.classList.contains('valid')){
                        element.classList.replace('valid','invalid');
                    }else{
                        element.classList.add('invalid');
                    }
                }
                error.textContent = 'Pass reqs: 10 chars + contain: number, upper letter';
                return false; 

            }else{
                if(element.classList.contains('invalid')){
                    element.classList.replace('invalid','valid'); // set to valid
                }
                else{
                    element.classList.add('valid')
                }
                error.textContent = '';
                return true;
            }
            
        case /submit/.test(elementName):
            console.log('submit-button read')
            return true;

        default:
            throw new Error('The input does not match any supported input types');  
    }
}



function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function hasNoSpaces(str) {
    const spacePattern = /\s/;
    return !spacePattern.test(str);
}

function isValidUSZipCode(zipCode) {
    const zipCodePattern = /^\d{5}(?:[-\s]?\d{4})?$/;
    return zipCodePattern.test(zipCode);
}
function isStringPass(str) {
    // Check if the string length is at least 10 characters
    if (str.length < 10) {
      return false;
    }
  
    // Check if the string contains an uppercase letter
    const hasUpperCase = /[A-Z]/.test(str);
    if (!hasUpperCase) {
      return false;
    }
  
    // Check if the string contains a number
    const hasNumber = /\d/.test(str);
    if (!hasNumber) {
      return false;
    }
  
    // If all conditions are met, return true
    return true;
  }