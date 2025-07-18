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
import type { MovieWatchProviders200ResponseResultsCZBuyInner } from './MovieWatchProviders200ResponseResultsCZBuyInner';
import {
    MovieWatchProviders200ResponseResultsCZBuyInnerFromJSON,
    MovieWatchProviders200ResponseResultsCZBuyInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsCZBuyInnerToJSON,
} from './MovieWatchProviders200ResponseResultsCZBuyInner';
import type { MovieWatchProviders200ResponseResultsCLBuyInner } from './MovieWatchProviders200ResponseResultsCLBuyInner';
import {
    MovieWatchProviders200ResponseResultsCLBuyInnerFromJSON,
    MovieWatchProviders200ResponseResultsCLBuyInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsCLBuyInnerToJSON,
} from './MovieWatchProviders200ResponseResultsCLBuyInner';
import type { MovieWatchProviders200ResponseResultsAUFlatrateInner } from './MovieWatchProviders200ResponseResultsAUFlatrateInner';
import {
    MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSON,
    MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSON,
} from './MovieWatchProviders200ResponseResultsAUFlatrateInner';

/**
 * 
 * @export
 * @interface MovieWatchProviders200ResponseResultsEE
 */
export interface MovieWatchProviders200ResponseResultsEE {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsEE
     */
    link?: string;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsCZBuyInner>}
     * @memberof MovieWatchProviders200ResponseResultsEE
     */
    buy?: Array<MovieWatchProviders200ResponseResultsCZBuyInner>;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>}
     * @memberof MovieWatchProviders200ResponseResultsEE
     */
    flatrate?: Array<MovieWatchProviders200ResponseResultsAUFlatrateInner>;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsCLBuyInner>}
     * @memberof MovieWatchProviders200ResponseResultsEE
     */
    rent?: Array<MovieWatchProviders200ResponseResultsCLBuyInner>;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsEE interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsEE(value: object): value is MovieWatchProviders200ResponseResultsEE {
    return true;
}

export function MovieWatchProviders200ResponseResultsEEFromJSON(json: any): MovieWatchProviders200ResponseResultsEE {
    return MovieWatchProviders200ResponseResultsEEFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsEEFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsEE {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'buy': json['buy'] == null ? undefined : ((json['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsCZBuyInnerFromJSON)),
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSON)),
        'rent': json['rent'] == null ? undefined : ((json['rent'] as Array<any>).map(MovieWatchProviders200ResponseResultsCLBuyInnerFromJSON)),
    };
}

export function MovieWatchProviders200ResponseResultsEEToJSON(value?: MovieWatchProviders200ResponseResultsEE | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'buy': value['buy'] == null ? undefined : ((value['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsCZBuyInnerToJSON)),
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSON)),
        'rent': value['rent'] == null ? undefined : ((value['rent'] as Array<any>).map(MovieWatchProviders200ResponseResultsCLBuyInnerToJSON)),
    };
}

