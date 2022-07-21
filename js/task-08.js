const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
   
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("ты кусок говна, ублюдок, мать твою, почему ты не ввел пароль или логин?!");
  } else {
    
    const newArr = {};
     newArr.email = email.value;
    newArr.password = password.value;

  console.log(newArr);
      event.currentTarget.reset();
      }
}
