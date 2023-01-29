const regexName = /^[a-zA-Z]+$/;

export function validate(input) {  
    if(!input) return "" 
  if (!regexName.test(input)) {
    return "Invalid Name, only letters";
  }

  return "";
}
