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
import type { MovieWatchProviders200ResponseResultsBBFlatrateInner } from './MovieWatchProviders200ResponseResultsBBFlatrateInner';
import {
    MovieWatchProviders200ResponseResultsBBFlatrateInnerFromJSON,
    MovieWatchProviders200ResponseResultsBBFlatrateInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsBBFlatrateInnerToJSON,
} from './MovieWatchProviders200ResponseResultsBBFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsBS
 */
export interface TvSeriesWatchProviders200ResponseResultsBS {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsBS
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsBBFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsBS
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsBBFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsBS interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsBS(value: object): value is TvSeriesWatchProviders200ResponseResultsBS {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsBSFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsBS {
    return TvSeriesWatchProviders200ResponseResultsBSFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsBSFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsBS {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsBBFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsBSToJSON(value?: TvSeriesWatchProviders200ResponseResultsBS | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsBBFlatrateInnerToJSON)),
    };
}

