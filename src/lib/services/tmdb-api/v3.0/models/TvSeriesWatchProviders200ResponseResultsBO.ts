/* tslint:disable */
/* eslint-disable */
/**
 * TMDB API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TvSeriesWatchProviders200ResponseResultsBOFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsBOFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsBOFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsBOFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsBOFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsBOFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsBO
 */
export interface TvSeriesWatchProviders200ResponseResultsBO {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsBO
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsBOFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsBO
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsBOFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsBO interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsBO(value: object): value is TvSeriesWatchProviders200ResponseResultsBO {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsBOFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsBO {
    return TvSeriesWatchProviders200ResponseResultsBOFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsBOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsBO {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsBOFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsBOToJSON(value?: TvSeriesWatchProviders200ResponseResultsBO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsBOFlatrateInnerToJSON)),
    };
}

