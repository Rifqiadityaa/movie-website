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
 * @interface MovieWatchProviders200ResponseResultsRO
 */
export interface MovieWatchProviders200ResponseResultsRO {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsRO
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>}
     * @memberof MovieWatchProviders200ResponseResultsRO
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsRO interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsRO(value: object): value is MovieWatchProviders200ResponseResultsRO {
    return true;
}

export function MovieWatchProviders200ResponseResultsROFromJSON(json: any): MovieWatchProviders200ResponseResultsRO {
    return MovieWatchProviders200ResponseResultsROFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsROFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsRO {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSON)),
    };
}

export function MovieWatchProviders200ResponseResultsROToJSON(value?: MovieWatchProviders200ResponseResultsRO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSON)),
    };
}

