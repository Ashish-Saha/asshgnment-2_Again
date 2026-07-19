export function formValidation(formData, setError) {
  const newError = {};

  if (!formData.url.trim()) {
    newError.url = "Url is required";
  } else {
    try {
      new URL(formData.url);
    } catch {
      newError.url = "Invalid URL";
    }
  }

  if (!formData.catagory.trim()) {
    newError.catagory = "Catagory is required";
  }

  if (!formData.userName.trim()) {
    newError.userName = "Username is required";
  }

  if (!formData.password.trim()) {
    newError.password = "Password is required";
  }else{
    if(formData.password.length < 6){
      newError.password = "Password length should be min 6";
    }
  }

  setError(newError);

  return Object.keys(newError).length === 0;
}
