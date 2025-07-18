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
 * @interface TvSeriesDetails200ResponseNetworksInner
 */
export interface TvSeriesDetails200ResponseNetworksInner {
    /**
     * 
     * @type {number}
     * @memberof TvSeriesDetails200ResponseNetworksInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200ResponseNetworksInner
     */
    logo_path?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200ResponseNetworksInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200ResponseNetworksInner
     */
    origin_country?: string;
}

/**
 * Check if a given object implements the TvSeriesDetails200ResponseNetworksInner interface.
 */
export function instanceOfTvSeriesDetails200ResponseNetworksInner(value: object): value is TvSeriesDetails200ResponseNetworksInner {
    return true;
}

export function TvSeriesDetails200ResponseNetworksInnerFromJSON(json: any): TvSeriesDetails200ResponseNetworksInner {
    return TvSeriesDetails200ResponseNetworksInnerFromJSONTyped(json, false);
}

export function TvSeriesDetails200ResponseNetworksInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesDetails200ResponseNetworksInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'logo_path': json['logo_path'] == null ? undefined : json['logo_path'],
        'name': json['name'] == null ? undefined : json['name'],
        'origin_country': json['origin_country'] == null ? undefined : json['origin_country'],
    };
}

export function TvSeriesDetails200ResponseNetworksInnerToJSON(value?: TvSeriesDetails200ResponseNetworksInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'logo_path': value['logo_path'],
        'name': value['name'],
        'origin_country': value['origin_country'],
    };
}

