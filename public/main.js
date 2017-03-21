fetch("/users").
  then(res => res.json()).
  then(res => {
    console.log(res);
  }).
  catch(e => console.error(e));

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  let name = form.querySelector("#name").value;
  let age = form.querySelector("#age").value;

  fetch("/user", {
    method: "POST",
    body: JSON.stringify({ name, age }),
    headers: {
      "content-type": "application/json"
    }
  }).
  then(res => res.json()).
  then(res => {
    console.log(res);
  }).
  catch(e => console.error(e));
});

const formRemoveUser = document.querySelector("#remove-user");

formRemoveUser.addEventListener("submit", ev => {
  ev.preventDefault();

  let userId = formRemoveUser.querySelector("#user-id").value;

  fetch(`/user/${userId}`, {
    method: "DELETE"
  }).
  then(res => res.json()).
  then(res => console.log(res)).
  catch(e => console.error(e));
});