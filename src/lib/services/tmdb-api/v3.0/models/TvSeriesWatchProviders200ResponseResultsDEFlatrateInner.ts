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
 * @interface TvSeriesWatchProviders200ResponseResultsDEFlatrateInner
 */
export interface TvSeriesWatchProviders200ResponseResultsDEFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsDEFlatrateInner
     */
    logo_path?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsDEFlatrateInner
     */
    provider_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsDEFlatrateInner
     */
    provider_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsDEFlatrateInner
     */
    display_priority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsDEFlatrateInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsDEFlatrateInner(value: object): value is TvSeriesWatchProviders200ResponseResultsDEFlatrateInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsDEFlatrateInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsDEFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsDEFlatrateInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsDEFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsDEFlatrateInner {
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

export function TvSeriesWatchProviders200ResponseResultsDEFlatrateInnerToJSON(value?: TvSeriesWatchProviders200ResponseResultsDEFlatrateInner | null): any {
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

