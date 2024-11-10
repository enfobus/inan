// sanity-backend/schemas/service.js

export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Cho phép điều chỉnh vị trí cắt ảnh
        }
      }
    ]
  };
  