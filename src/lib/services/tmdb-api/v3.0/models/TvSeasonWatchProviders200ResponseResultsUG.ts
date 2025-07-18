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
import type { TvSeriesWatchProviders200ResponseResultsKEFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsKEFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsKEFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeasonWatchProviders200ResponseResultsUG
 */
export interface TvSeasonWatchProviders200ResponseResultsUG {
    /**
     * 
     * @type {string}
     * @memberof TvSeasonWatchProviders200ResponseResultsUG
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsKEFlatrateInner>}
     * @memberof TvSeasonWatchProviders200ResponseResultsUG
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsKEFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsUG interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsUG(value: object): value is TvSeasonWatchProviders200ResponseResultsUG {
    return true;
}

export function TvSeasonWatchProviders200ResponseResultsUGFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsUG {
    return TvSeasonWatchProviders200ResponseResultsUGFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsUGFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsUG {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSON)),
    };
}

export function TvSeasonWatchProviders200ResponseResultsUGToJSON(value?: TvSeasonWatchProviders200ResponseResultsUG | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerToJSON)),
    };
}

