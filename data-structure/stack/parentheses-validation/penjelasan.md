
# Validasi Tanda Kurung

Salah satu masalah umum yang bisa diselesaikan menggunakan struktur data *stack* adalah memeriksa apakah susunan tanda kurung dalam sebuah string sudah benar.

Diberikan sebuah string yang hanya terdiri dari karakter: '(', ')', '{', '}', '\[', dan ']'. Tugas Anda adalah menentukan apakah urutan tanda kurung tersebut valid.

Sebuah urutan tanda kurung dianggap valid jika memenuhi dua syarat berikut:

1. Setiap tanda kurung buka harus memiliki tanda kurung tutup yang sesuai.
2. Penutupan tanda kurung harus terjadi dalam urutan yang benar.

| Contoh | Input    | Output  | Penjelasan                                                                                    |
| ------ | -------- | ------- | --------------------------------------------------------------------------------------------- |
| 1      | `"()"`   | `true`  | Tanda kurung buka `'('` ditutup dengan pasangannya `')'`.                                     |
| 2      | `"{)"`   | `false` | Tanda kurung buka `'{'` tidak ditutup dengan pasangannya.                                     |
| 3      | `"([])"` | `true`  | Semua tanda kurung dibuka dan ditutup dengan pasangan yang benar dan dalam urutan yang tepat. |

---

Jika ada bagian lain yang ingin disesuaikan (misal untuk bahan presentasi atau modul ajar), silakan beri tahu.
