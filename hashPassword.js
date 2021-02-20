let bcript = require('bcrypt')
let verifyIfEqual =async (newpassword, password)=>{
    let compare = await bcript.compare(newpassword, password)
    console.log(compare);
}

let hash =async (password) =>{
  try {
    let salt = await bcript.genSalt(10)
    let hashPassword =  await bcript.hash(password, salt)
    verifyIfEqual("Malala",hashPassword)
  } catch (error) {
      console.log(error);
  }
    return password
}

hash("Tokihery")

// verifyIfEqual("Tokihery", )