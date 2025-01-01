import {defineField, defineType} from 'sanity'

export const giftType = defineType({
  name: 'gift',
  title: 'Gift',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
    }),
    defineField({
      name: 'owner',
      type: 'reference',
      to: [{type: 'user'}],
    }),
    defineField({
      name: 'numTimesStolen',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
