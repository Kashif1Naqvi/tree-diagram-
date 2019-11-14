const form = document.querySelector("form")
const name = document.querySelector("#name")
const parent =document.querySelector("#parent")
const department = document.querySelector("#department")
const error = document.querySelector(".alert-danger")
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  if(name.value && parent.value && department.value)
  {
    db.collection("employees").add({
    name:name.value,
    parent: parent.value,
    department: department.value,
  })
  .then(()=>{
      name.value        = "",
      parent.value      = "",
      department.value  = "",
      error.textContent = ""
    })

     //form.reset() also work smae reset all form like above .then() callback
  }
  else
  {
    error.textContent = "Please Enter Value Before Adding Items"
  }
})
