const express = require("express") // impor modul express
const app = express() // inisialisasi express
const expressLayout = require("express-ejs-layouts"); // import modul express-ejs-layout
const port = 3000 // port

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(expressLayout);
app.use(express.static('public'));

// route /
app.get("/", (req, res) => {
    //res.send("Hello");
    //res.sendFile(__dirname + "/home.html");

    const berita = [
        {
            judul: "Berita 1",
            isi: "Isi Berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi Berita 2"
        },
    ];
    res.render('home', {title: 'Halaman Home', berita,layout:'main'});
});

// route/prodi
app.get("/prodi", (req, res) => {
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
    res.render('prodi', {title: 'Daftar Prodi', prodi,layout:'main'});
})

// route /about
app.get("/about", (req, res) => {
    // res.send("About Us");
    //res.sendFile(__dirname + "/about.html");
    res.render('about', {title: 'About Us', layout: 'main'});
});

// route /mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data Mahasiswa",
        "data" : [
            {npm: 2226240062, nama: "jaehyun"},
            {npm: 2226240063, nama: "jaehyun 2"},
            {npm: 2226240064, nama: "jaehyun 3"}
        ]
    })
});

// route /dosen
app.get("/dosen", (req, res) => {
    res.json({
    "status" : "Success",
    "message" : "Data Dosen",
    "data" : [
        {
            prodi: "Sistem Informasi", 
            dosen:  ["Iis", "Faris", "Dafid"]
        },
        {
            prodi: "Informatika", 
            dosen: ["Derry", "Siska", "Yohannes"]
        },
    ]
    })
});

// route /contact
app.get("/contact", (req,res) => {
    //res.send("Contact Us");
    //res.sendFile(__dirname + "/contact.html");
    res.render('contact', {title: 'Halaman Contact',layout:'main'});
});

// handle route yang tidak terdaftar
app.use("/", (req, res) => {
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
});