import {defineField, defineType} from 'sanity'

// Mendefinisikan schema bernama "category"
export default defineType({
  // Nama schema
  name: 'category',
  // Tipe schema, yaitu dokumen
  type: 'document',
  // Label yang akan ditampilkan di Sanity Studio
  title: 'Categories',
  // Mendefinisikan field-field yang dimiliki oleh dokumen kategori
  fields: [
    // Field untuk menyimpan nama kategori
    defineField({
      // Nama field
      name: 'name',
      // Tipe field, yaitu string
      type: 'string',
      // Label field
      title: 'Name of Category',
    }),
  ],
})
