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
 * @interface MovieWatchProviders200ResponseResultsTT
 */
export interface MovieWatchProviders200ResponseResultsTT {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsTT
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsTTFlatrateInner>}
     * @memberof MovieWatchProviders200ResponseResultsTT
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsTTFlatrateInner>;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsTT interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsTT(value: object): value is MovieWatchProviders200ResponseResultsTT {
    return true;
}

export function MovieWatchProviders200ResponseResultsTTFromJSON(json: any): MovieWatchProviders200ResponseResultsTT {
    return MovieWatchProviders200ResponseResultsTTFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsTTFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsTT {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsTTFlatrateInnerFromJSON)),
    };
}

export function MovieWatchProviders200ResponseResultsTTToJSON(value?: MovieWatchProviders200ResponseResultsTT | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsTTFlatrateInnerToJSON)),
    };
}

