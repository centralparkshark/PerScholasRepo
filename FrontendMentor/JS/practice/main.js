// const button = document.getElementById("button")
// button.addEventListener("click", toggleMode)

// function toggleMode() {
//     button.classList.toggle('dark');
//     button.classList.toggler('light');
// }

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() ==="") {
            showError(input, `${input.id} is required`);
        } else {
            showSuccess(input)
        }
    });
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, confirmPassword]);
});

function primeTime(n) {
        // prime is a true/false value to be checked 
        let prime;
        // set n to next value after n to see if it is prime
        n++;

        // continues until prime is true
        while (prime != true) {
            // checks if prime
            //temporarily sets prime to true
            prime = true;
            for (let i = n - 1; i > 1; i--) {
                if (n % i == 0) {
                    // if even 1 number is divisible, prime is false
                    prime = false;
                } 
            }
            if (prime == false) {
                // if prime is still false, increases n by one
                n++;
            } else {
                // if it makes it to here and prime is still true, new n is prime
                console.log(`${n} is the next prime number.`)
                prime = true;
            }
        }
}

// primeTime(8);

