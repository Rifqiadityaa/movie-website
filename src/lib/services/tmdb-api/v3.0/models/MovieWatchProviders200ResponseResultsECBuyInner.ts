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
/**
 * 
 * @export
 * @interface MovieWatchProviders200ResponseResultsECBuyInner
 */
export interface MovieWatchProviders200ResponseResultsECBuyInner {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsECBuyInner
     */
    logo_path?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsECBuyInner
     */
    provider_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsECBuyInner
     */
    provider_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsECBuyInner
     */
    display_priority?: number;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsECBuyInner interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsECBuyInner(value: object): value is MovieWatchProviders200ResponseResultsECBuyInner {
    return true;
}

export function MovieWatchProviders200ResponseResultsECBuyInnerFromJSON(json: any): MovieWatchProviders200ResponseResultsECBuyInner {
    return MovieWatchProviders200ResponseResultsECBuyInnerFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsECBuyInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsECBuyInner {
    if (json == null) {
        return json;
    }
    return {
        
        'logo_path': json['logo_path'] == null ? undefined : json['logo_path'],
        'provider_id': json['provider_id'] == null ? undefined : json['provider_id'],
        'provider_name': json['provider_name'] == null ? undefined : json['provider_name'],
        'display_priority': json['display_priority'] == null ? undefined : json['display_priority'],
    };
}

export function MovieWatchProviders200ResponseResultsECBuyInnerToJSON(value?: MovieWatchProviders200ResponseResultsECBuyInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'logo_path': value['logo_path'],
        'provider_id': value['provider_id'],
        'provider_name': value['provider_name'],
        'display_priority': value['display_priority'],
    };
}

