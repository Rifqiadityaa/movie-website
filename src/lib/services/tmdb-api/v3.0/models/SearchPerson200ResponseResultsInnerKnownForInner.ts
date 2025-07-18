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
 * @interface SearchPerson200ResponseResultsInnerKnownForInner
 */
export interface SearchPerson200ResponseResultsInnerKnownForInner {
    /**
     * 
     * @type {boolean}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    adult?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    backdrop_path?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    original_language?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    original_title?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    overview?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    poster_path?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    media_type?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    genre_ids?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    release_date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    video?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    vote_average?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchPerson200ResponseResultsInnerKnownForInner
     */
    vote_count?: number;
}

/**
 * Check if a given object implements the SearchPerson200ResponseResultsInnerKnownForInner interface.
 */
export function instanceOfSearchPerson200ResponseResultsInnerKnownForInner(value: object): value is SearchPerson200ResponseResultsInnerKnownForInner {
    return true;
}

export function SearchPerson200ResponseResultsInnerKnownForInnerFromJSON(json: any): SearchPerson200ResponseResultsInnerKnownForInner {
    return SearchPerson200ResponseResultsInnerKnownForInnerFromJSONTyped(json, false);
}

export function SearchPerson200ResponseResultsInnerKnownForInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchPerson200ResponseResultsInnerKnownForInner {
    if (json == null) {
        return json;
    }
    return {
        
        'adult': json['adult'] == null ? undefined : json['adult'],
        'backdrop_path': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'original_language': json['original_language'] == null ? undefined : json['original_language'],
        'original_title': json['original_title'] == null ? undefined : json['original_title'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'poster_path': json['poster_path'] == null ? undefined : json['poster_path'],
        'media_type': json['media_type'] == null ? undefined : json['media_type'],
        'genre_ids': json['genre_ids'] == null ? undefined : json['genre_ids'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'release_date': json['release_date'] == null ? undefined : json['release_date'],
        'video': json['video'] == null ? undefined : json['video'],
        'vote_average': json['vote_average'] == null ? undefined : json['vote_average'],
        'vote_count': json['vote_count'] == null ? undefined : json['vote_count'],
    };
}

export function SearchPerson200ResponseResultsInnerKnownForInnerToJSON(value?: SearchPerson200ResponseResultsInnerKnownForInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'adult': value['adult'],
        'backdrop_path': value['backdrop_path'],
        'id': value['id'],
        'title': value['title'],
        'original_language': value['original_language'],
        'original_title': value['original_title'],
        'overview': value['overview'],
        'poster_path': value['poster_path'],
        'media_type': value['media_type'],
        'genre_ids': value['genre_ids'],
        'popularity': value['popularity'],
        'release_date': value['release_date'],
        'video': value['video'],
        'vote_average': value['vote_average'],
        'vote_count': value['vote_count'],
    };
}

