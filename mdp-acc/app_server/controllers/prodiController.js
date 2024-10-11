const prodi =(req, res)=>{
    const prodi = [
        { 
            namaProdi: "Sistem Informasi",
            fakultas: "FIKR",
            singkatan: "SI"
        },
        {
            namaProdi: "Informatika",
            fakultas: "FIKR",
            singkatan: "IF"
        },
        {
            namaProdi: "Teknik Elektro",
            fakultas: "FIKR",
            singkatan: "TE"
        },
        {
            namaProdi: "Manajmen Informatika",
            fakultas: "FIKR",
            singkatan: "MI"
        },
        {
            namaProdi: "Manajemen",
            fakultas: "FEB",
            singkatan: "MJ"
        },
        {
            namaProdi: "Akuntansi",
            fakultas: "FEB",
            singkatan: "AK"
        },

    ];
    res.render("prodi", {title: 'Daftar Prodi', prodi,layout:'main'});
}
module.exports ={prodi}