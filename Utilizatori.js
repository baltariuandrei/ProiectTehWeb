const SERVER = 'http://localhost:8080'
import { EventEmitter } from 'fbemitter'
class User{
    constructor(){
        this.data=[]
        this.emitter = new EventEmitter()
    }
    async getUser(usernameText){
        try {
            const raspuns = await fetch(`${SERVER}/utilizatori/${usernameText}`)
            const data = await raspuns.json()
            this.data = data
            this.emitter.emit('USERNAME_SUCCESS')
            return this.data
        } catch(err) {
            console.warn(err)
            this.emitter.emit('USERNAME_ERROR')

        }


    }
    async getPrieteni(usernameF){
        try {
                const raspuns = await fetch(`${SERVER}/prieteni`)
                const data = await raspuns.json()
                let aux = []
                for(let x of data){
                    if(x.username == usernameF){
                        aux.push(x)
                    }
                    this.data = aux;
                    return this.data
                }

        } catch (error) {
            console.warn(error)
            this.emitter.emit('GET_PRIETENI_ERROR')

        }
    }
    async adaugaPrieten(prieten){
        try {
            await fetch(`${SERVER}/prieteni`, {

                method:'post',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(prieten)
            })
            this.getPrieteni()
        } catch (error) {
            console.warn(error)
            this.emitter.emit('ADAUGA_PRIETEN_ERROR')

        }

    }
    async adaugaCont(cont){
        try{
            await fetch(`${SERVER}/utilizatori`,{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(cont)
            })
        }
        catch(error){
            console.warn(error)
            this.emitter.emit('ADAUGA_CONT_EROARE')
        }
    }
    async getAll(){
        try{
            let raspuns = await fetch(`${SERVER}/utilizatori`)
            let data = await raspuns.json()

            return data
            


        }
        catch(error){
            console.warn(error)
            this.emitter.emit('UTILIZATORI_ERROR')
        }

    }

    }
const users = new User()
export default users

