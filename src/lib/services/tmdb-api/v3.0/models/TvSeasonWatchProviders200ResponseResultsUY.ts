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
import type { TvSeriesWatchProviders200ResponseResultsUYFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsUYFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsUYFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsUYFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsUYFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsUYFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeasonWatchProviders200ResponseResultsUY
 */
export interface TvSeasonWatchProviders200ResponseResultsUY {
    /**
     * 
     * @type {string}
     * @memberof TvSeasonWatchProviders200ResponseResultsUY
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsUYFlatrateInner>}
     * @memberof TvSeasonWatchProviders200ResponseResultsUY
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsUYFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsUY interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsUY(value: object): value is TvSeasonWatchProviders200ResponseResultsUY {
    return true;
}

export function TvSeasonWatchProviders200ResponseResultsUYFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsUY {
    return TvSeasonWatchProviders200ResponseResultsUYFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsUYFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsUY {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsUYFlatrateInnerFromJSON)),
    };
}

export function TvSeasonWatchProviders200ResponseResultsUYToJSON(value?: TvSeasonWatchProviders200ResponseResultsUY | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsUYFlatrateInnerToJSON)),
    };
}

