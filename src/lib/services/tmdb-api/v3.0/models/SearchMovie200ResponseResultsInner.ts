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
 * @interface SearchMovie200ResponseResultsInner
 */
export interface SearchMovie200ResponseResultsInner {
    /**
     * 
     * @type {boolean}
     * @memberof SearchMovie200ResponseResultsInner
     */
    adult?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SearchMovie200ResponseResultsInner
     */
    backdrop_path?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof SearchMovie200ResponseResultsInner
     */
    genre_ids?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof SearchMovie200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchMovie200ResponseResultsInner
     */
    original_language?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchMovie200ResponseResultsInner
     */
    original_title?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchMovie200ResponseResultsInner
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchMovie200ResponseResultsInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchMovie200ResponseResultsInner
     */
    poster_path?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchMovie200ResponseResultsInner
     */
    release_date?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchMovie200ResponseResultsInner
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchMovie200ResponseResultsInner
     */
    video?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMovie200ResponseResultsInner
     */
    vote_average?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMovie200ResponseResultsInner
     */
    vote_count?: number;
}

/**
 * Check if a given object implements the SearchMovie200ResponseResultsInner interface.
 */
export function instanceOfSearchMovie200ResponseResultsInner(value: object): value is SearchMovie200ResponseResultsInner {
    return true;
}

export function SearchMovie200ResponseResultsInnerFromJSON(json: any): SearchMovie200ResponseResultsInner {
    return SearchMovie200ResponseResultsInnerFromJSONTyped(json, false);
}

export function SearchMovie200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMovie200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'adult': json['adult'] == null ? undefined : json['adult'],
        'backdrop_path': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'genre_ids': json['genre_ids'] == null ? undefined : json['genre_ids'],
        'id': json['id'] == null ? undefined : json['id'],
        'original_language': json['original_language'] == null ? undefined : json['original_language'],
        'original_title': json['original_title'] == null ? undefined : json['original_title'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'poster_path': json['poster_path'] == null ? undefined : json['poster_path'],
        'release_date': json['release_date'] == null ? undefined : json['release_date'],
        'title': json['title'] == null ? undefined : json['title'],
        'video': json['video'] == null ? undefined : json['video'],
        'vote_average': json['vote_average'] == null ? undefined : json['vote_average'],
        'vote_count': json['vote_count'] == null ? undefined : json['vote_count'],
    };
}

export function SearchMovie200ResponseResultsInnerToJSON(value?: SearchMovie200ResponseResultsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'adult': value['adult'],
        'backdrop_path': value['backdrop_path'],
        'genre_ids': value['genre_ids'],
        'id': value['id'],
        'original_language': value['original_language'],
        'original_title': value['original_title'],
        'overview': value['overview'],
        'popularity': value['popularity'],
        'poster_path': value['poster_path'],
        'release_date': value['release_date'],
        'title': value['title'],
        'video': value['video'],
        'vote_average': value['vote_average'],
        'vote_count': value['vote_count'],
    };
}

