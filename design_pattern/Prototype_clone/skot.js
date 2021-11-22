class Scot{
	constructor(name="Uname"){
		this._name = name
        this.list = []
	}
     set name(val){
        this._name = val;
     }
     get name(){
        return 'Your name are '+this._name
     }
     addSkot(name){
     	this.list.push(name);
     }
     clone(){
        let obj = Object.getPrototypeOf(this)
        let cloned = Object.create(obj)
        cloned._name = this._name
        cloned.list = [...this.list]
        return cloned
     }
}
module.exports = Scot