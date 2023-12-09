# HTML CSS pada halaman login.html dan about.html

## Deklarasi Dokumen HTML:

    html
    <!DOCTYPE html>
    <html lang="en">
Deklarasi dokumen HTML dan menentukan versi HTML yang digunakan (HTML5).
lang="en" menandakan bahwa dokumen menggunakan bahasa Inggris.

### Elemen head:
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap">
        <link rel="stylesheet" href="fixstyle.css">
        <title>About Me</title>
    </head>
    <meta>: Menyediakan informasi meta terkait dokumen, seperti pengaturan karakter dan viewport.
    <link>: Menghubungkan dokumen dengan stylesheet eksternal dan font dari Google Fonts.
    <title>: Menentukan judul halaman yang akan ditampilkan di tab peramban.
    
### Elemen header:
    <header>
        <div class="welcome">
            <h1>Welcome</h1>
        </div>
        <nav>
            <a href="">Home</a>
            <a href="about.html">About</a>
        </nav>
    </header>
  Berisi class untuk menuliskan welcome dan navbar

### Elemen body:
    <body>
        <!-- Konten halaman -->
    </body>
    
### Elemen <footer>:
    <footer>
        © 2023 BTJ Academy
    </footer>
Berisi informasi hak cipta.

## Body login.html
        <section class="content-form">
                <h2>Welcome to Our Landing Page</h2>
                <p>Please login to access other features.</p>
        
                <div class="content-login">
                    <form action="" method="post">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required> 
                        <br>
            
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required> 
                        <br>
            
                        <button type="submit">Login</button> 
                        <br>
                    </form>
            
                    <div class="imcap">
                        <image src="img.avif" alt="gambar" style="width: 50%;"></image>
                        <p>"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt</p>
                    </div>
                </div>     
            </section>

Pada section content-fom terdapat judul h2 dan konten serta terdapat class content-login dengan isi berupa form untuk mengisikan username dan password. Juga terdapat class imcap yang berisi gambar serta konten berupa quotes.
## Body about.html:
#### Elemen article:
<article>
    <!-- Konten artikel -->
</article>
Di dalam article memuat beberapa elemen section

##### Elemen section:
Menandai bagian-bagian terpisah dalam halaman.

###### 1. About Me Section
    <section class="about-me-section">
      <div class="container">
        <figure class="profile-picture">
          <img src="foto__1___1_-removebg-preview.png" alt="Profile Image">
            <!-- <figcaption>Profile Picture</figcaption> -->
        </figure>
        <div class="content">
          <h2>Hello Everyone, I'm Nevi</h2>
            <p>Focus on Front End Developer @BTJ Academy</p>
        </div>
       </div>
    </section>
    
Didalam section ini berisi profile picture dan konten

###### 2. Bio Section
    <section class="bio-section">
      <h3>About Myself</h3>
        <p>Excited to music and traveling. I think the desire to explore, 
                feel beauty, and seek happiness may be the main driving force behind 
                human interest in music and traveling. Each individual may have unique 
                reasons for enjoying these two things according to their personal 
                preferences and needs. 
        </p>
    </section>
    
Didalam section ini berisi judul section picture dan isi konten

###### 3. Elemen table:
    <table class="edu-work-table">
            <caption>Education and Work Experience</caption>
            <tr>
                <td colspan="3">
                    <h3>Education</h3>
                    <ul>
                        <li>Bachelor's Degree in Information Engineering - Kun Shan University (2021 - 2023)</li>
                        <li>Information System - Brawijaya University (2018 - 2021)</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <h3>Work Experience</h3>
                    <ul>
                        <li><strong>Position:</strong> Front End Developer</li>
                        <li><strong>Description:</strong> Worked on various front-end projects during the internship.</li>
                    </ul>
                </td>
            </tr>
        </table>
    
table: Menandai tabel.
tr: Menandai baris dalam tabel.
td: Menandai sel dalam tabel.
  
###### 4. Motto Section:
    <section class="motto-section">
      <h3>My Motto?</h3>
      <p>"Do what you love because there are so many reasons to be happy."</p>
    </section>
Menandai bagian dengan motto.
  

# ----------------------------------------------------
# CSS

## Header, Nav, Body, dan Footer
### Setting Body
- Mengatur font family, serta menghapus margin dan padding secara default yang diberikan oleh browser ke elemen body.
- Mengatur elemen body sebagai flex agar fleksible, serta diatur menjadi kolom
- Menetapkan tinggi minimum elemen body menjadi 100% dari tinggi viewport
  
### Setting h2, h3, p
#### h2 
- Mengatur warna h2

#### h3
- Mengatur warna h3
- Memberi margin atas pada setiap h3

#### p
- Mengatur warna p
  
### Setting Header
- Mengatur warna background, warna tulisan, dan tata letak tulisan menjadi center
  
### Setting Navbar
#### 1. nav
- Mengatur warna background
- Mengatur warna teks 
- Menambahkan padding sebesar 5px
- Menengahkan teks dalam elemen navigasi secara horizontal.
#### 2. nav a
- Mengatur warna teks tautan menjadi putih.
- Pada 'text-decoration: none;:' Menghilangkan dekorasi bawaan tautan (seperti garis bawah).
#### 3. nav a:hover:
- Mengubah warna teks tautan menjadi biru saat dihover.
- 'text-decoration: none;:' Tetap menghilangkan dekorasi bawaan tautan saat dihover.
- Memberikan margin pada sisi kiri dan kanan
  
### Setting Footer
- Mengatur warna background, warna tulisan, tata letak tulisan, serta padding, dan margin di setting auto 

## Login Page
### Container
#### 1. .content-form, .content-login 
- Mengatur padding sebesar 10px

#### 2. .imcap 
- Mengatur margin atas sebesar 20px 

#### 3 .imcap p 
- Mengatur margin atas sebesar 10px untuk memberikan ruang tambahan antara paragraf-paragraf

### Form
#### 1. form
- Mengatur tata letak form sebagai flex container
- Mengatur arah tata letak menjadi kolom, agar elemen anak dapat diatur secara vertikal
- Membuat konten form menjadi center vertikal
- Memberikan margin atas 25px 
- Memberikan padding 20px di sekitar isi form
- Mengatur warna background form menjadi putih
- Mengatur ketebalan border 1px dengan warna abu-abu muda
- Memberikan sudut-sudut menjadi melengkung dengan radius 8px
- Menambahkan shadow box
- Mengatur tinggi form menjadi 300 piksel

#### 2. form label 
- Mengatur tata letak label menjadi blok, agar label dan elemen input berada di baris yang berbeda
- Memberikan margin bawah sebesar 10px antar label dan elemen input
- Mengatur teks label menjadi rata kiri

#### 3. form input
- Mengatur lebar input menjadi 100% dari lebar container
- Memberikan padding sebesar 8px
- Memberikan margin bawah sebesar 15px
- Menetapkan model box-sizing menjadi "border-box" untuk memastikan lebar input mencakup padding dan border.

#### 4. form button
- Mengatur lebar button agar memanjang menjadi 100%
- Mengatur warna button
- Mengatur warna teks button menjadi putih
- Memberikan padding 10px di atas dan bawah, 15px di kiri dan kanan
- Menghilangkan border pada button
- Membuat sudut-sudut button agar melengkung dengan radius 5px
- Mengubah kursor menjadi tanda panah saat berada di atas button

#### 5. form button:hover 
- Mengubah warna button menjadi biru lebih tua saat dihover

#### 6. .content-login 
- Mengatur lebar maksimum .content-login menjadi 400px
- Memberikan margin auto di kiri dan kanan, agar .content-login berada di tengah horizontal.
- Menengahkan teks secara horizontal.
  
## About Page
### About me Section
#### .about-me-section 
- Mengatur warna background dengan gradient
- Memberikan efek gradient dengan warna yang bervariasi.
- Memberikan padding 20px

#### .container 
- Mengatur tata letak container menjadi flex
- Menengahkan elemen-elemen secara center vertikal
- Mengatur posisi relatif

#### .profile-picture
- Mengatur lebar flex-basis sebesar 25%
- Memberikan margin kiri 100px
- Mengatur posisi relatif untuk 
- Mengatur z-index sebesar 1 agar bisa menempatkan foto di atas elemen objek (dengan index z lebih rendah)
  
#### .profile-picture::before -> Membuat objek dibelakang foto profil
- Untuk membuat objek pseudo kosong menggunakan 'content: "";' 
- Mengatur posisi absolut agar objek presisi relatif terhadap class untuk foto profile  
- Memberikan lebar elemen pseudo sebesar 100% dari class untuk foto profile 
- Memberikan tinggi elemen pseudo sebesar 70% dari class untuk foto profile 
- Mengatur warna background elemen pseudo
- Memberikan sudut melengkung pada elemen pseudo.
- Mengatur indeks z sebesar 0 agar bisa menempatkan di bawah class untuk foto profile
  
#### .profile-picture img 
- Mengatur lebar foto sebesar 100% dari .profile-picture.
- Mengatur posisi relatif 
- Memberikan sudut melengkung pada foto

#### .content 
- Mengatur lebar flex-basis sebesar 70%
- Mengatur posisi relatif
- Mengatur padding 30px
- Menetapkan warna latar belakang, padding, border-radius, bayangan box, dan lebar maksimum untuk .content. Blok ini untuk memastikan bahwa class .content memiliki tampilan yang konsisten di berbagai ukuran layar dan memastikan kontennya agar tetap mudah dibaca
- Mengatur indeks z sebesar 2
  
#### .content::before 
- Membuat objek pseudo kosong
- Mengatur posisi absolut agar objek presisi relatif terhadap class .content.
- Mengatur posisi objek agar berada di atas
- Mengatur posisi objek agar ke kiri
- Mengatur lebar objek menjadi 0
- Mengatur tinggi objek menjadi 0
- Mengatur border agar solid
- Mengatur ketebalan border untuk membuat bentuk segitiga.
- Menetapkan warna border dengan transparansi agar objek terkesan transparant
- Mengatur indeks z sebesar 2

### Bio Section
#### .bio-section
- Mengatur max width
- Memberikan margin auto pada sisi kiri dan kanan agar elemen bisa terpusat secara horizontal  
- Mengatur padding 20px
- Memberikan margin atas 20px 
- Menengahkan teks secara horizontal.

### Edu-Work Section
#### .edu-work-table 
- Mengatur max width
- Memberikan margin auto pada sisi kiri dan kanan agar elemen bisa terpusat secara horizontal  
- Mengatur lebar tabel menjadi 100% 
- Menggabungkan garis batas sel agar lebih rapih
- Memberikan margin atas 20px pada tabel.
  
#### .edu-work-table caption 
- Mengatur huruf menjadi tebal
- Mengatur font-size
- Mengatur margin bawah 10px
- Memberi warna pada teks

#### .edu-work-table th, .edu-work-table td 
- Memberikan border sebesar 1px dengan warna abu-abu muda pada sel tabel.
- Memberikan padding 10px 
- Mengatur teks menjadi rata kiri

#### .edu-work-table th 
- Mengatur warna background pada sel header tabel.
- Mengatur warna putih pada teks header tabel.

### Motto Section
#### .motto-section
- Mengatur max width
- Memberikan margin auto pada sisi kiri dan kanan agar elemen bisa terpusat secara horizontal 
- Memberikan padding 20px 
- Mengatur margin atas 20px
- Mengatur teks menjadi rata tengah
