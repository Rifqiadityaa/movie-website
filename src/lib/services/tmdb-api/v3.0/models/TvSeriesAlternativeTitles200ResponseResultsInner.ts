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
 * @interface TvSeriesAlternativeTitles200ResponseResultsInner
 */
export interface TvSeriesAlternativeTitles200ResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesAlternativeTitles200ResponseResultsInner
     */
    iso_3166_1?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesAlternativeTitles200ResponseResultsInner
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesAlternativeTitles200ResponseResultsInner
     */
    type?: string;
}

/**
 * Check if a given object implements the TvSeriesAlternativeTitles200ResponseResultsInner interface.
 */
export function instanceOfTvSeriesAlternativeTitles200ResponseResultsInner(value: object): value is TvSeriesAlternativeTitles200ResponseResultsInner {
    return true;
}

export function TvSeriesAlternativeTitles200ResponseResultsInnerFromJSON(json: any): TvSeriesAlternativeTitles200ResponseResultsInner {
    return TvSeriesAlternativeTitles200ResponseResultsInnerFromJSONTyped(json, false);
}

export function TvSeriesAlternativeTitles200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesAlternativeTitles200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'iso_3166_1': json['iso_3166_1'] == null ? undefined : json['iso_3166_1'],
        'title': json['title'] == null ? undefined : json['title'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function TvSeriesAlternativeTitles200ResponseResultsInnerToJSON(value?: TvSeriesAlternativeTitles200ResponseResultsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'iso_3166_1': value['iso_3166_1'],
        'title': value['title'],
        'type': value['type'],
    };
}

