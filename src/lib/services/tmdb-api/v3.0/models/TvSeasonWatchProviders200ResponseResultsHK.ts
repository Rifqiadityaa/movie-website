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
import type { TvSeriesWatchProviders200ResponseResultsHKFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsHKFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsHKFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsHKFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsHKFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsHKFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeasonWatchProviders200ResponseResultsHK
 */
export interface TvSeasonWatchProviders200ResponseResultsHK {
    /**
     * 
     * @type {string}
     * @memberof TvSeasonWatchProviders200ResponseResultsHK
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsHKFlatrateInner>}
     * @memberof TvSeasonWatchProviders200ResponseResultsHK
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsHKFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsHK interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsHK(value: object): value is TvSeasonWatchProviders200ResponseResultsHK {
    return true;
}

export function TvSeasonWatchProviders200ResponseResultsHKFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsHK {
    return TvSeasonWatchProviders200ResponseResultsHKFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsHKFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsHK {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsHKFlatrateInnerFromJSON)),
    };
}

export function TvSeasonWatchProviders200ResponseResultsHKToJSON(value?: TvSeasonWatchProviders200ResponseResultsHK | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsHKFlatrateInnerToJSON)),
    };
}

