
// Menampilkan angka ke display form
function display(angka){
    let data = document.getElementById("txDisplay").value
    if (data === '0'){
        document.getElementById("txDisplay").value = angka
    }else{
        data += angka
        document.getElementById("txDisplay").value = data
    }
}

// Menghapus semua value yang ada di display
function clearAll(){
    document.getElementById("txDisplay").value="0"
}

// Menghapus value satu per satu
function back(){
    let data = document.getElementById("txDisplay").value
    document.getElementById("txDisplay").value = data.substring(0, data.length - 1)
}


// Melakukan operasi aritmatika
function equal(){
    let data = document.getElementById("txDisplay").value
    if(data){
        document.getElementById("txDisplay").value = eval(data)
    }else{
        alert("err")
    }
}
