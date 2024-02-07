import type { HTMLConverter } from '@payloadcms/richtext-lexical';
import payload from 'payload';
import { convertLexicalToHTML, consolidateHTMLConverters, UploadNode } from '@payloadcms/richtext-lexical';
import type { SerializedUploadNode } from '@payloadcms/richtext-lexical'; // Update the path

const UploadHTMLConverter: HTMLConverter<SerializedUploadNode> = {
    converter:async ({ node }) => {
        console.log(node)
        const uploadDocument = await payload.findByID({
          id: node.value.id,
          collection: node.relationTo,
        })
    
    
        return `<mark>${uploadDocument}</mark>`
      },
    nodeTypes: [UploadNode.getType()],
};

export { UploadHTMLConverter };