const msg='美术馆'
class A{
  name:string ='TS'
  sayHi(){
    console.log(`Hi, ${this.name}`)
  }
  doPromis(){
    const p1= new Promise((resolve,reject)=>{
      resolve("p1 done")
    })
  }
}
export default A