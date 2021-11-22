let hideString = async (string, callback) => {
	return await callback(string.replace(/[a-zA-Z]/g, 'x'))
}
let res = ''
let response = hideString('Hello baby', hidden=>{res=hidden;return hidden})

let deu = response.then(res=>{
	deu.catch(err=>error)
	return res
})

console.log(res)


