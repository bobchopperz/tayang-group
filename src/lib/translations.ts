/**
 * Objek untuk menyimpan semua teks terjemahan aplikasi.
 * Mudah untuk ditambahkan bahasa baru atau teks baru di satu tempat.
 */
export const translations = {
    ID: {
        home: 'Beranda',
        about: 'Tentang',
        contact: 'Kontak',
        section1: 'Bagian 1',
        section2: 'Bagian 2',
        section3: 'Bagian 3',
        section4: 'Bagian 4',
        section5: 'Bagian 5',
        section6: 'Bagian 6',
        section7: 'Bagian 7',
        footerRights: 'Hak Cipta Dilindungi Undang-Undang.',
        placeholderText: 'aku cinta bahasa indonesia',
    },
    EN: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        section1: 'Section 1',
        section2: 'Section 2',
        section3: 'Section 3',
        section4: 'Section 4',
        section5: 'Section 5',
        section6: 'Section 6',
        section7: 'Section 7',
        footerRights: 'All Rights Reserved.',
        placeholderText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    }
};

// Mengekspor tipe untuk type-safety, memastikan kita hanya bisa menggunakan 'ID' atau 'EN'.
export type Language = keyof typeof translations;