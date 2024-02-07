import type { HTMLConverter } from '@payloadcms/richtext-lexical';

export type HTMLConverterFeatureProps = {
    converters?: (({ defaultConverters }: {
        defaultConverters: HTMLConverter[];
    }) => HTMLConverter[]) | HTMLConverter[];
};