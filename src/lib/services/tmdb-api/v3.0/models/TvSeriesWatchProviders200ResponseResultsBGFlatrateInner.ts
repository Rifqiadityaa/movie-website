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
 * @interface TvSeriesWatchProviders200ResponseResultsBGFlatrateInner
 */
export interface TvSeriesWatchProviders200ResponseResultsBGFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsBGFlatrateInner
     */
    logo_path?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsBGFlatrateInner
     */
    provider_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsBGFlatrateInner
     */
    provider_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsBGFlatrateInner
     */
    display_priority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsBGFlatrateInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsBGFlatrateInner(value: object): value is TvSeriesWatchProviders200ResponseResultsBGFlatrateInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsBGFlatrateInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsBGFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsBGFlatrateInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsBGFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsBGFlatrateInner {
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

export function TvSeriesWatchProviders200ResponseResultsBGFlatrateInnerToJSON(value?: TvSeriesWatchProviders200ResponseResultsBGFlatrateInner | null): any {
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

