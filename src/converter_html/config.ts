import type { HTMLConverterFeatureProps } from './props'; // Update the path
import { FeatureProvider, HTMLConverterFeature } from '@payloadcms/richtext-lexical';

export const createHTMLConverterFeature = (props?: HTMLConverterFeatureProps): FeatureProvider => {
    // Your implementation here
    return HTMLConverterFeature(props);
};