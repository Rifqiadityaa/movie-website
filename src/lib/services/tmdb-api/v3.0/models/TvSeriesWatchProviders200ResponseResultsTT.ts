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
import type { MovieWatchProviders200ResponseResultsTTFlatrateInner } from './MovieWatchProviders200ResponseResultsTTFlatrateInner';
import {
    MovieWatchProviders200ResponseResultsTTFlatrateInnerFromJSON,
    MovieWatchProviders200ResponseResultsTTFlatrateInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsTTFlatrateInnerToJSON,
} from './MovieWatchProviders200ResponseResultsTTFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsTT
 */
export interface TvSeriesWatchProviders200ResponseResultsTT {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsTT
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsTTFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsTT
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsTTFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsTT interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsTT(value: object): value is TvSeriesWatchProviders200ResponseResultsTT {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsTTFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsTT {
    return TvSeriesWatchProviders200ResponseResultsTTFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsTTFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsTT {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsTTFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsTTToJSON(value?: TvSeriesWatchProviders200ResponseResultsTT | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsTTFlatrateInnerToJSON)),
    };
}

