function validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (values.email === "") {
      errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Invalid email format";
    } else {
      errors.email = "";
    }
  
    if (values.password === "") {
      errors.password = "Password should not be empty";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default validation;
  