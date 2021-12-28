const msg='美术馆'
class ClassA{
  name:string ='TS'
  sayHi(){
    console.log(`Hi, ${this.name}`)
  }
  async doPromis(){
    const p1= new Promise((resolve,reject)=>{
      resolve("p1 done")
    })
    return p1;
  }
}
export default ClassA