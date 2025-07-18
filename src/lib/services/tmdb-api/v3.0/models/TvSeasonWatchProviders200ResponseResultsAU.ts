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
import type { MovieWatchProviders200ResponseResultsAUBuyInner } from './MovieWatchProviders200ResponseResultsAUBuyInner';
import {
    MovieWatchProviders200ResponseResultsAUBuyInnerFromJSON,
    MovieWatchProviders200ResponseResultsAUBuyInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsAUBuyInnerToJSON,
} from './MovieWatchProviders200ResponseResultsAUBuyInner';
import type { TvSeriesWatchProviders200ResponseResultsAUFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsAUFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsAUFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeasonWatchProviders200ResponseResultsAU
 */
export interface TvSeasonWatchProviders200ResponseResultsAU {
    /**
     * 
     * @type {string}
     * @memberof TvSeasonWatchProviders200ResponseResultsAU
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsAUBuyInner>}
     * @memberof TvSeasonWatchProviders200ResponseResultsAU
     */
    buy?: Array<MovieWatchProviders200ResponseResultsAUBuyInner>;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsAUFlatrateInner>}
     * @memberof TvSeasonWatchProviders200ResponseResultsAU
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsAUFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsAU interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsAU(value: object): value is TvSeasonWatchProviders200ResponseResultsAU {
    return true;
}

export function TvSeasonWatchProviders200ResponseResultsAUFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsAU {
    return TvSeasonWatchProviders200ResponseResultsAUFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsAUFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsAU {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'buy': json['buy'] == null ? undefined : ((json['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUBuyInnerFromJSON)),
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerFromJSON)),
    };
}

export function TvSeasonWatchProviders200ResponseResultsAUToJSON(value?: TvSeasonWatchProviders200ResponseResultsAU | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'buy': value['buy'] == null ? undefined : ((value['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUBuyInnerToJSON)),
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerToJSON)),
    };
}

