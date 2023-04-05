export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              options: {
                isHighlighted: true
              }
            }
          ],
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
}
