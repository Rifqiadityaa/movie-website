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
import type { MovieWatchProviders200ResponseResultsNLBuyInner } from './MovieWatchProviders200ResponseResultsNLBuyInner';
import {
    MovieWatchProviders200ResponseResultsNLBuyInnerFromJSON,
    MovieWatchProviders200ResponseResultsNLBuyInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsNLBuyInnerToJSON,
} from './MovieWatchProviders200ResponseResultsNLBuyInner';
import type { MovieWatchProviders200ResponseResultsBEFlatrateInner } from './MovieWatchProviders200ResponseResultsBEFlatrateInner';
import {
    MovieWatchProviders200ResponseResultsBEFlatrateInnerFromJSON,
    MovieWatchProviders200ResponseResultsBEFlatrateInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsBEFlatrateInnerToJSON,
} from './MovieWatchProviders200ResponseResultsBEFlatrateInner';

/**
 * 
 * @export
 * @interface MovieWatchProviders200ResponseResultsNL
 */
export interface MovieWatchProviders200ResponseResultsNL {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsNL
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsNLBuyInner>}
     * @memberof MovieWatchProviders200ResponseResultsNL
     */
    buy?: Array<MovieWatchProviders200ResponseResultsNLBuyInner>;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsNLBuyInner>}
     * @memberof MovieWatchProviders200ResponseResultsNL
     */
    rent?: Array<MovieWatchProviders200ResponseResultsNLBuyInner>;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsBEFlatrateInner>}
     * @memberof MovieWatchProviders200ResponseResultsNL
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsBEFlatrateInner>;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsNL interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsNL(value: object): value is MovieWatchProviders200ResponseResultsNL {
    return true;
}

export function MovieWatchProviders200ResponseResultsNLFromJSON(json: any): MovieWatchProviders200ResponseResultsNL {
    return MovieWatchProviders200ResponseResultsNLFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsNLFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsNL {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'buy': json['buy'] == null ? undefined : ((json['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsNLBuyInnerFromJSON)),
        'rent': json['rent'] == null ? undefined : ((json['rent'] as Array<any>).map(MovieWatchProviders200ResponseResultsNLBuyInnerFromJSON)),
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsBEFlatrateInnerFromJSON)),
    };
}

export function MovieWatchProviders200ResponseResultsNLToJSON(value?: MovieWatchProviders200ResponseResultsNL | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'buy': value['buy'] == null ? undefined : ((value['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsNLBuyInnerToJSON)),
        'rent': value['rent'] == null ? undefined : ((value['rent'] as Array<any>).map(MovieWatchProviders200ResponseResultsNLBuyInnerToJSON)),
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsBEFlatrateInnerToJSON)),
    };
}

