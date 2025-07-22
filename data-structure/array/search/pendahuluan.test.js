const { expect, describe, it } = require('@jest/globals');
const { cari } = require('./pendahuluan');

describe("cari", () => {
    
    describe("ketika nama peserta ada di daftar lulus CPNS", () => {
        it("seharusnya menampilkan Selamat", ()=>{
            const daftarCPNSLulus = ["Riansyah", "Aslam","Hastra", "Syahrul","Adam"];
            const pesertaUjianCPNS = "Riansyah"
            expect(cari(daftarCPNSLulus,pesertaUjianCPNS)).toContain("Selamat")
        })
    })
    describe("ketika nama peserta tidak ada di daftar lulus CPNS", () => {
        it("seharusnya menampilkan Maaf", ()=>{
            const daftarCPNSLulus = ["Riansyah", "Aslam","Hastra", "Syahrul","Adam"];
            const pesertaUjianCPNS = "Sechan"
            expect(cari(daftarCPNSLulus,pesertaUjianCPNS)).toContain("Maaf")
        })
    })
})