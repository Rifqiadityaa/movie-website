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
import type { MovieWatchProviders200ResponseResultsLIFlatrateInner } from './MovieWatchProviders200ResponseResultsLIFlatrateInner';
import {
    MovieWatchProviders200ResponseResultsLIFlatrateInnerFromJSON,
    MovieWatchProviders200ResponseResultsLIFlatrateInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsLIFlatrateInnerToJSON,
} from './MovieWatchProviders200ResponseResultsLIFlatrateInner';

/**
 * 
 * @export
 * @interface MovieWatchProviders200ResponseResultsSM
 */
export interface MovieWatchProviders200ResponseResultsSM {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsSM
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsLIFlatrateInner>}
     * @memberof MovieWatchProviders200ResponseResultsSM
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsLIFlatrateInner>;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsSM interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsSM(value: object): value is MovieWatchProviders200ResponseResultsSM {
    return true;
}

export function MovieWatchProviders200ResponseResultsSMFromJSON(json: any): MovieWatchProviders200ResponseResultsSM {
    return MovieWatchProviders200ResponseResultsSMFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsSMFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsSM {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsLIFlatrateInnerFromJSON)),
    };
}

export function MovieWatchProviders200ResponseResultsSMToJSON(value?: MovieWatchProviders200ResponseResultsSM | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsLIFlatrateInnerToJSON)),
    };
}

