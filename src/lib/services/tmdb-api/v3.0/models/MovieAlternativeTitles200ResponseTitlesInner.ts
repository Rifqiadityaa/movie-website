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
 * @interface MovieAlternativeTitles200ResponseTitlesInner
 */
export interface MovieAlternativeTitles200ResponseTitlesInner {
    /**
     * 
     * @type {string}
     * @memberof MovieAlternativeTitles200ResponseTitlesInner
     */
    iso_3166_1?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieAlternativeTitles200ResponseTitlesInner
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieAlternativeTitles200ResponseTitlesInner
     */
    type?: string;
}

/**
 * Check if a given object implements the MovieAlternativeTitles200ResponseTitlesInner interface.
 */
export function instanceOfMovieAlternativeTitles200ResponseTitlesInner(value: object): value is MovieAlternativeTitles200ResponseTitlesInner {
    return true;
}

export function MovieAlternativeTitles200ResponseTitlesInnerFromJSON(json: any): MovieAlternativeTitles200ResponseTitlesInner {
    return MovieAlternativeTitles200ResponseTitlesInnerFromJSONTyped(json, false);
}

export function MovieAlternativeTitles200ResponseTitlesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieAlternativeTitles200ResponseTitlesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'iso_3166_1': json['iso_3166_1'] == null ? undefined : json['iso_3166_1'],
        'title': json['title'] == null ? undefined : json['title'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function MovieAlternativeTitles200ResponseTitlesInnerToJSON(value?: MovieAlternativeTitles200ResponseTitlesInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'iso_3166_1': value['iso_3166_1'],
        'title': value['title'],
        'type': value['type'],
    };
}

