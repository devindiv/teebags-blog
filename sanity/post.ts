import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "shortDescription",
      type: "string",
      title: "short description of the post",
    }),
    defineField({
      name: "titleImage",
      title: "Title image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        /*{
          type: "twitter",
        },*/
        {
          type: "image",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
