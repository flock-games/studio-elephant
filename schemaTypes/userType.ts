import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'game',
      type: 'reference',
      to: [{type: 'game'}],
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
    defineField({
      name: 'broughtGift',
      type: 'reference',
      to: [{type: 'gift'}],
    }),
  ],
})
