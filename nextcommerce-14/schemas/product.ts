import {defineField, defineType} from 'sanity'

// Mendefinisikan schema bernama "product"
export default defineType({
  // Nama schema
  name: 'product',
  // Tipe schema, yaitu dokumen
  type: 'document',
  // Label yang akan ditampilkan di Sanity Studio
  title: 'Products',
  // Mendefinisikan field-field yang dimiliki oleh dokumen produk
  fields: [
    // Field untuk menyimpan nama produk
    defineField({
      // Nama field
      name: 'name',
      // Tipe field, yaitu string
      type: 'string',
      // Label field
      title: 'Name of Product',
    }),
    // Field untuk menyimpan array gambar produk
    // Nama field
    {
      name: 'images',
      // Label field
      title: 'Product Images',
      // Tipe field, yaitu array
      type: 'array',
      // Setiap elemen dalam array harus berupa tipe "image"
      of: [{type: 'image'}],
    },
    // Field untuk menyimpan deskripsi produk
    defineField({
      // Nama field
      name: 'description',
      // Tipe field, yaitu teks panjang
      type: 'text',
      // Label field
      title: 'Description of product',
    }),
    // Field untuk menyimpan slug produk
    {
      // Nama field
      name: 'slug',
      // Tipe field, yaitu slug
      type: 'slug',
      // Label field
      title: 'Product Slug',
      // Opsional: menentukan sumber slug
      options: {
        source: 'name',
      },
    },
    // Field untuk menyimpan harga produk
    defineField({
      // Nama field
      name: 'price',
      // Tipe field, yaitu angka
      type: 'number',
      // Label field
      title: 'Price',
    }),
    // Field untuk menyimpan referensi ke kategori produk
    {
      // Nama field
      name: 'category',
      // Label field
      title: 'Product Category',
      // Tipe field, yaitu referensi
      type: 'reference',
      // Referensi ke schema "category"
      to: [{type: 'category'}],
    },
  ],
})
