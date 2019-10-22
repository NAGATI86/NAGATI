const crypto = require("crypto")

class ArbreDeMerkle {
  constructor(feuilles){
    this.feuilles = feuilles
    this.arbre=[[]]


    for(let f of feuilles){
      this.arbre[0].push(this.hachageChaine(f))
    }
    // this.profondeurMax = Math.ceil(Math.log2(this.feuilles.length))
    for (let i = 0; this.arbre[i].length > 1; i++) {
      this.arbre[i+1]=[]
      for(let j=0;j<this.arbre[i].length;j+=2 ) {
        this.arbre[i+1].push(this.hachage(this.arbre[i][j],this.arbre[i][j+1]))
      }
    }
  }
  hachageChaine(chaine){
    return crypto.createHash("sha256").update(Buffer.from(chaine),'utf8').digest()
  } 
  hachage(hashA,hashB){
    let concatenation = []
    if (hashB === undefined)
      concatenation = hashA
    else
      concatenation = Buffer.concat([hashA,hashB])
    return crypto.createHash("sha256").update(concatenation,'utf8').digest()
  }
  afficher(){
    console.log("\t", this.feuilles.join("\t\t"))
    let indentation=""
    for(let ligne of this.arbre) {
      indentation+="\t"
      let ligneAAfficher =""
      for(let h of ligne) {
        ligneAAfficher += indentation+h.toString('hex').substr(0,8)
      }
      console.log(ligneAAfficher)
    }
  }
}


erable = new ArbreDeMerkle(["AA","BB","CC","DD"])
erable.afficher()