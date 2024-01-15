import {defineField, defineType} from 'sanity'

// Mendefinisikan schema bernama "heroImage"
export default defineType({
  // Nama schema
  name: 'heroImage',
  // Tipe schema, yaitu dokumen
  type: 'document',
  // Label yang akan ditampilkan di Sanity Studio
  title: 'Two Hero Images',
  // Mendefinisikan field-field yang dimiliki oleh dokumen heroImage
  fields: [
    // Field untuk menyimpan gambar pertama
    defineField({
      // Nama field
      name: 'image1',
      // Tipe field, yaitu gambar
      type: 'image',
      // Label field
      title: 'First Image',
    }),
    // Field untuk menyimpan gambar kedua
    defineField({
      // Nama field
      name: 'image2',
      // Tipe field, yaitu gambar
      type: 'image',
      // Label field
      title: 'Second Image',
    }),
  ],
})
