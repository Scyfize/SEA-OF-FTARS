function validate()
{
    const username = document.getElementById("username").value
    const country = document.getElementById("country").value
    const email = document.getElementById("email").value
    
    const password = document.getElementById("password").value
    const agreement = document.getElementById("agreement")

    if(username.length < 5)
    {
        alert("Username must be at least 5 characters long")
       
    }

    else if(country.length< 4){
        alert("Theres no countries with less than 4 letters!!")
    }

    
    else if(!email.endsWith("@gmail.com"))
    {
        alert("Email must end with @gmail.com")
    }



    else if(isAlphanum(password) == false)
    {
        alert("Password must contain 1 alphabet and 1 number")
    }

    else if(!agreement.checked)
    {
        alert("You have to agree to use our services >:(")
    }
    else window.location.href = "index.html"
}

function isAlphanum(password)
{
    var isAlpha = false
    var isNum = false
    for(let i = 0;i<password.length;i++)
    {
        if(isNaN(password[i]))
        {
            isAlpha = true
        }
        else isNum = true
    }

    if(isAlpha == false || isNum == false)
    {
        return false
    }

    return true
}