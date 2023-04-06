class Medicamento {
    constructor() {
        this.id = 1
        this.arrayMedicamentos = []
    }

    cadMedi() {
        let medicamento = this.lerDados()
        if(this.Validar(medicamento) == true) {
            this.Salvar(medicamento)
        }
        this.Listar()
    }

    lerDados() {
        let medicamento = {}

        medicamento.id = this.id
        medicamento.nomeMedicamento = document.getElementById('idMed').value
        medicamento.quantMedicamento = document.getElementById('idQuant').value
        medicamento.classeMedicamento = document.getElementById('idClasse').value

        return medicamento
    }

    Validar(medicamento) {
        let alerta = ''

        if(medicamento.nomeMedicamento == '') {
            alerta += 'Por favor, insira corretamente o nome do medicamento!\n'
        }
        if(medicamento.quantMedicamento == '') {
            alerta += 'Por favor, insira corretamente a quantidade disponível do medicamento!\n'
        }
        if(medicamento.classeMedicamento == '') {
            alerta += 'Por favor, insira corretamente a classe do medicamento!\n'
        }
        if(alerta != '') {
            alert(alerta)
            return false
        }

        return true
    }

    Salvar(medicamento) {
        this.arrayMedicamentos.push(medicamento)
        this.id++
    }

    Listar() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayMedicamentos.length; i++) {
            let linha = tbody.insertRow()

            let tabId = linha.insertCell()
            let tabNome = linha.insertCell()
            let tabQuant = linha.insertCell()
            let tabClasse = linha.insertCell()
            let tabRemove = linha.insertCell()

            tabId.innerText = this.arrayMedicamentos[i].id
            tabNome.innerText = this.arrayMedicamentos[i].nomeMedicamento
            tabQuant.innerText = this.arrayMedicamentos[i].quantMedicamento
            tabClasse.innerText = this.arrayMedicamentos[i].classeMedicamento
            let imagem = document.createElement('img')
            imagem.src = 'assets/del.png'
            imagem.setAttribute("onclick", "medicamento.Deletar(" + this.arrayMedicamentos[i].id + ")")
            tabRemove.appendChild(imagem, innerWidth = 1)
        }
    }

    Deletar(id) {
        let corpo = document.getElementById('tbody')
        for(let i = 0; i < this.arrayMedicamentos.length; i++) {
            if(this.arrayMedicamentos[i].id == id) {
                this.arrayMedicamentos.splice(i, 1)
                corpo.deleteRow(i)
            }
        }
        alert('[Sucesso] O item foi apagado!')
    }
}

var medicamento = new Medicamento()