// Mengimport createClient dari "next-sanity" untuk membuat client Sanity
import { createClient } from "next-sanity";
// Mengimport imageUrlBuilder dari "@sanity/image-url" untuk membangun URL gambar
import imageUrlBuilder from "@sanity/image-url";

// Membuat client Sanity
export const client = createClient({
  // ID proyek Sanity Anda
  projectId: "1wqq11ce",
  // Dataset yang digunakan
  dataset: "production",
  // Versi API Sanity yang digunakan
  apiVersion: "2022-03-07",
  // Mengaktifkan penggunaan CDN untuk gambar
  useCdn: true,
});

// Membuat builder URL gambar karena by default sanity hanya mengirim id gambar dan tidak ada url
const builder = imageUrlBuilder(client);

// Fungsi khusus untuk menghasilkan URL gambar
export function urlFor(source: any) {
  // Mengembalikan URL gambar menggunakan builder
  return builder.image(source);
}
