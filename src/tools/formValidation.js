

export function formValidation(formData, setError){
    const newError = {};

    if(!formData.url.trim()){
        newError.url = "Url is required"
    }

     if(!formData.catagory.trim()){
        newError.catagory = "Catagory is required"
    }

     if(!formData.userName.trim()){
        newError.userName = "userName is required"
    }

     if(!formData.password.trim()){
        newError.password = "password is required"
    }

    setError(newError)

    return Object.keys(newError).length === 0

}