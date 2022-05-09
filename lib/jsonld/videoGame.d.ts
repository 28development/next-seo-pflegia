/// <reference types="react" />
import type {
  Offers,
  AggregateRating,
  GamePlayMode,
  Video,
  Review,
  ApplicationCategory,
} from 'src/types';
import { JsonLdProps } from './jsonld';
export interface VideoGameJsonLdProps extends JsonLdProps {
  keyOverride?: string;
  name: string;
  url?: string;
  image?: string;
  description?: string;
  languageName?: string | string[];
  translatorName?: string | string[];
  authorName?: string;
  aggregateRating?: AggregateRating;
  applicationCategory?: ApplicationCategory;
  platformName?: string | string[];
  operatingSystemName?: string | string[];
  datePublished?: string;
  keywords?: string;
  producerName?: string;
  producerUrl?: string;
  providerName?: string;
  providerUrl?: string;
  publisherName?: string | string[];
  offers?: Offers | Offers[];
  genreName?: string | string[];
  playMode?: GamePlayMode | GamePlayMode[];
  processorRequirements?: string;
  memoryRequirements?: string;
  storageRequirements?: string;
  trailer?: Video;
  reviews?: Review[];
}
declare function VideoGameJsonLd({
  type,
  keyOverride,
  aggregateRating,
  trailer,
  reviews,
  image,
  authorName,
  provider,
  producerName,
  producerUrl,
  offers,
  operatingSystemName,
  platformName,
  translatorName,
  languageName,
  genreName,
  publisherName,
  ...rest
}: VideoGameJsonLdProps): JSX.Element;
export default VideoGameJsonLd;
