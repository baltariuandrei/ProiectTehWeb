const SERVER = 'http://localhost:8080'
class Aliment{
constructor(){
    this.data = []
}

async getAlimenteCat(categ,usernamef){
    try {
        const raspuns = await fetch(`${SERVER}/alimente`)
        const data = await raspuns.json
        let aux = []
        for(let x of data){
            if(x.categorie == categ && x.username == usernamef){
                aux.push(x)

            }
        }
        this.data = aux
        return this.data
    } catch (error) {
        console.warn(error)
        
    }
}
async adaugaAliment(al){
    try {
        await fetch(`${SERVER}/alimente`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(al)
            })
            this.getAlimenteCat()
        
        
    } catch (error) {
        console.warn(error)
    }
}
async manancaAliment(id){
try {
    await fetch(`${SERVER}/alimente/${id}`,{
        method:'delete'
        
    })
    this.getAlimenteCat()
} catch (error) {
    console.warn(error)
}

}
async schimbaDisponibilitate(id) {
    try {
        const raspuns = await fetch(`${SERVER}/alimente/${id}`)
        const al = await raspuns.json()
        if(al.disponibil === true){
            al.disponibil = false
        } else {
            al.disponibil = true
        }
        await fetch(`${SERVER}/alimente/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(al)
        })
    } catch(err) {
        console.warn(err)
        //this.emitter.emit('UPDATE_ALIMENT_ERROR')
    }
}
async getAlimenteByUsername(usernamef){
    try{
        const raspuns = await fetch(`${SERVER}/alimente`)
        const data = await raspuns.json()
        let aux = []
        for(let x of data){
            if(x.username === usernamef && x.disponibil === true){
                aux.push(x)
            }
        }
        this.data = aux
        return this.data
    } catch(err) {
        console.warn(err)
       
    }
}
async getAlimentePrieteni(username) {
    try {
        const raspuns = await fetch(`${SERVER}/prieteni`)
        const data = await raspuns.json()
        let aux = []
        for(let x of data) {
            if(x.username === username){
                let al = await this.getAlimenteByUsername(x.usernamePrieten)
                for(let y of al){
                    aux.push(y)
                }
            }
        }
        this.data = aux
        return aux
    } catch(err) {
        console.warn(err)
    }
}





async cereAliment(id, usernamef) {
    try {
        const raspuns = await fetch(`${SERVER}/alimente/${id}`)
        const al2 = await raspuns.json()
        this.addAliment({
            codAliment: Math.floor(Math.random() * 100000),
            username: usernamef,
            categorie: al2.categorie,
            denumire: al2.denumire,
            producator: al2.producator,
            calorii: al2.calorii,
            vegan: al2.vegan,
            zileExpirare: al2.zileExpirare,
            disponibil: false
        })
        this.eatAliment(al2.codAliment)
    } catch(err) {
        console.warn(err)
    }
}

}

const aliments = new Aliment()
export default aliments