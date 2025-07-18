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
 * @interface MovieTranslations200ResponseTranslationsInnerData
 */
export interface MovieTranslations200ResponseTranslationsInnerData {
    /**
     * 
     * @type {string}
     * @memberof MovieTranslations200ResponseTranslationsInnerData
     */
    homepage?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieTranslations200ResponseTranslationsInnerData
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieTranslations200ResponseTranslationsInnerData
     */
    runtime?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieTranslations200ResponseTranslationsInnerData
     */
    tagline?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieTranslations200ResponseTranslationsInnerData
     */
    title?: string;
}

/**
 * Check if a given object implements the MovieTranslations200ResponseTranslationsInnerData interface.
 */
export function instanceOfMovieTranslations200ResponseTranslationsInnerData(value: object): value is MovieTranslations200ResponseTranslationsInnerData {
    return true;
}

export function MovieTranslations200ResponseTranslationsInnerDataFromJSON(json: any): MovieTranslations200ResponseTranslationsInnerData {
    return MovieTranslations200ResponseTranslationsInnerDataFromJSONTyped(json, false);
}

export function MovieTranslations200ResponseTranslationsInnerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieTranslations200ResponseTranslationsInnerData {
    if (json == null) {
        return json;
    }
    return {
        
        'homepage': json['homepage'] == null ? undefined : json['homepage'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'runtime': json['runtime'] == null ? undefined : json['runtime'],
        'tagline': json['tagline'] == null ? undefined : json['tagline'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function MovieTranslations200ResponseTranslationsInnerDataToJSON(value?: MovieTranslations200ResponseTranslationsInnerData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'homepage': value['homepage'],
        'overview': value['overview'],
        'runtime': value['runtime'],
        'tagline': value['tagline'],
        'title': value['title'],
    };
}

