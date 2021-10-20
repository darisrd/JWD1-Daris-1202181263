function cekform(){
    const foto = document.getElementById('foto');
    const nama = document.getElementById('nama');
    const namaP = document.getElementById('namaP');
    const tlahir = document.getElementById('tlahir');
    const tglahir = document.getElementById('tglahir');
    const usia = document.getElementById('usia');
    const kelamin = document.getElementById('kelamin');
    const kota = document.getElementById('kota');
    const email = document.getElementById('email');
    const nohp = document.getElementById('nohp');
    const sosmed = document.getElementById('sosmed');

    if(foto.value==''){
        isInvalid(foto, 'foto', 'Foto tidak boleh kosong')
    }
    if(nama.value==''){
        isInvalid(nama, 'nama', 'Nama tidak boleh kosong')
    }else if(nama.value.length <= 3){
        isInvalid(nama, 'nama', 'Nama tidak boleh kurang dari 3 karakter')
    }
    if(namaP.value==''){
        isInvalid(namaP, 'namaP', 'Nama panggilan tidak boleh kosong')
    }
    if(tlahir.value==''){
        isInvalid(tlahir, 'tlahir', 'Tempat Lahir tidak boleh kosong')
    }
    if(tglahir.value==''){
        isInvalid(tglahir, 'tglahir', 'Tanggal Lahir tidak boleh kosong')
    }else{
        const today = new Date();
        const lahir = new Date(tglahir.value);
        const selisih = Math.abs(today - lahir);
        const umur = Math.floor(selisih / (1000*60*60*24*365));
        usia.value = umur;
        if(usia.value < 18){
            return false;
        }
    }
    if(kelamin.value==''){
        isInvalid(kelamin, 'kelamin', 'Jenis Kelamin tidak boleh kosong')
    }
    if(kota.value==''){
        isInvalid(kota, 'kota', 'Kota tidak boleh kosong')
    }
    if(email.value==''){
        isInvalid(email, 'email', 'Email tidak boleh kosong')
    }
    if(nohp.value==''){
        isInvalid(nohp, 'nohp', 'Nomor hp tidak boleh kosong')
    }else if(nohp.value.length <= 4){
        isInvalid(nohp, 'nohp', 'Nomor hp tidak boleh kurang dari 4 karakter')
    }
    if(sosmed.value==''){
        isInvalid(sosmed, 'sosmed', 'Sosial media tidak boleh kosong')
    }

}
function isInvalid(con, id, msg){
    con.classList.add('is-invalid')
    document.getElementById(id+'_v').innerHTML = msg;
    con.focus();
    event.preventDefault();
}