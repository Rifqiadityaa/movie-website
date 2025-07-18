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
 * @interface MovieDetails200ResponseSpokenLanguagesInner
 */
export interface MovieDetails200ResponseSpokenLanguagesInner {
    /**
     * 
     * @type {string}
     * @memberof MovieDetails200ResponseSpokenLanguagesInner
     */
    english_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieDetails200ResponseSpokenLanguagesInner
     */
    iso_639_1?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieDetails200ResponseSpokenLanguagesInner
     */
    name?: string;
}

/**
 * Check if a given object implements the MovieDetails200ResponseSpokenLanguagesInner interface.
 */
export function instanceOfMovieDetails200ResponseSpokenLanguagesInner(value: object): value is MovieDetails200ResponseSpokenLanguagesInner {
    return true;
}

export function MovieDetails200ResponseSpokenLanguagesInnerFromJSON(json: any): MovieDetails200ResponseSpokenLanguagesInner {
    return MovieDetails200ResponseSpokenLanguagesInnerFromJSONTyped(json, false);
}

export function MovieDetails200ResponseSpokenLanguagesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieDetails200ResponseSpokenLanguagesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'english_name': json['english_name'] == null ? undefined : json['english_name'],
        'iso_639_1': json['iso_639_1'] == null ? undefined : json['iso_639_1'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function MovieDetails200ResponseSpokenLanguagesInnerToJSON(value?: MovieDetails200ResponseSpokenLanguagesInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'english_name': value['english_name'],
        'iso_639_1': value['iso_639_1'],
        'name': value['name'],
    };
}

