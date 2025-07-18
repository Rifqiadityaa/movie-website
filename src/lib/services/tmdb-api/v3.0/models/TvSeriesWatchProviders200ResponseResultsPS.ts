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
import type { TvSeriesWatchProviders200ResponseResultsIQFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsIQFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsIQFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsPS
 */
export interface TvSeriesWatchProviders200ResponseResultsPS {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsPS
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsIQFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsPS
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsIQFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsPS interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsPS(value: object): value is TvSeriesWatchProviders200ResponseResultsPS {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsPSFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsPS {
    return TvSeriesWatchProviders200ResponseResultsPSFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsPSFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsPS {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsPSToJSON(value?: TvSeriesWatchProviders200ResponseResultsPS | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerToJSON)),
    };
}

