# HTML pada halaman about.html
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
  
### Elemen <section> Lainnya:
    <section class="motto-section">
      <h3>My Motto?</h3>
      <p>"Do what you love because there are so many reasons to be happy."</p>
    </section>
Menandai bagian dengan motto.
  
### Elemen <footer>:
    <footer>
        © 2023 BTJ Academy
    </footer>
Berisi informasi hak cipta.
