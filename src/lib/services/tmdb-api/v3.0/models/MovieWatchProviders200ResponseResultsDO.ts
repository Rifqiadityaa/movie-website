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
import type { MovieWatchProviders200ResponseResultsAUFlatrateInner } from './MovieWatchProviders200ResponseResultsAUFlatrateInner';
import {
    MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSON,
    MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSON,
} from './MovieWatchProviders200ResponseResultsAUFlatrateInner';

/**
 * 
 * @export
 * @interface MovieWatchProviders200ResponseResultsDO
 */
export interface MovieWatchProviders200ResponseResultsDO {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsDO
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>}
     * @memberof MovieWatchProviders200ResponseResultsDO
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsDO interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsDO(value: object): value is MovieWatchProviders200ResponseResultsDO {
    return true;
}

export function MovieWatchProviders200ResponseResultsDOFromJSON(json: any): MovieWatchProviders200ResponseResultsDO {
    return MovieWatchProviders200ResponseResultsDOFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsDOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsDO {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSON)),
    };
}

export function MovieWatchProviders200ResponseResultsDOToJSON(value?: MovieWatchProviders200ResponseResultsDO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSON)),
    };
}

