var num = document.getElementById('txtnumero')
var resp = document.getElementById('numeros')
var nums = []
var resp1 = document.getElementById('resp1')
var resp2 = document.getElementById('resp2')

function add() {
    if (num.value.length == 0) {
        alert('[ERRO] Adicione um valor!')
    } else {
        var res = document.createElement('option')
        res.innerHTML += `O valor ${num.value} foi adicionado`
        nums.push(num.value)
        resp.appendChild(res)
    }
}

function fin() {
    if (num.value.length == 0) {
        alert('[ERRO] Adicione um valor!')
    } else {
        resp1.innerHTML = `Foram adicionados ${nums.length} valores.`

        for (var pos in nums) {
            if (nums[pos] > nums[pos - 1] && nums[pos] > nums[0]) {
                var maior = nums[pos]
                resp2.innerHTML = ''
                resp2.innerHTML = `O maior valor encontrado foi ${maior}`
            } else if (nums[0] > nums[pos]) {
                var maior = nums[0]
                resp2.innerHTML = ''
                resp2.innerHTML = `O maior valor encontrado foi ${maior}`
            }
        }
    }
}