import { CollectionConfig } from 'payload/types';
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
  HTMLConverter, SerializedUploadNode, UploadNode, HTMLConverterFeatureProps
} from '@payloadcms/richtext-lexical'
import payload from 'payload'
import { createHTMLConverterFeature } from '../converter_html/config';
import { UploadHTMLConverter } from '../converter_html/feature';


const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            createHTMLConverterFeature({ converters: [UploadHTMLConverter],  }),
        ],
    }),
    },
    lexicalHTML('content', { name: 'content_html' }),
  ],
};

export default Posts;
