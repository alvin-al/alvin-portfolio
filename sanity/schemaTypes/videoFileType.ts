import { defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const videoFileType = defineType({
  name: 'videoFile',
  title: 'Video File',
  type: 'file',
  icon: PlayIcon,
  options: {
    accept: 'video/*'
  },
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Optional caption displayed below the video.',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
    },
    prepare({ title }) {
      return {
        title: title || 'Video File',
        media: PlayIcon,
      }
    },
  },
})
