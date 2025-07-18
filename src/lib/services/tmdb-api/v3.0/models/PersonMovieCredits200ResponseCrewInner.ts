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
 * @interface PersonMovieCredits200ResponseCrewInner
 */
export interface PersonMovieCredits200ResponseCrewInner {
    /**
     * 
     * @type {boolean}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    adult?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    backdrop_path?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    genre_ids?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    original_language?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    original_title?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    poster_path?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    release_date?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    video?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    vote_average?: number;
    /**
     * 
     * @type {number}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    vote_count?: number;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    credit_id?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    department?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonMovieCredits200ResponseCrewInner
     */
    job?: string;
}

/**
 * Check if a given object implements the PersonMovieCredits200ResponseCrewInner interface.
 */
export function instanceOfPersonMovieCredits200ResponseCrewInner(value: object): value is PersonMovieCredits200ResponseCrewInner {
    return true;
}

export function PersonMovieCredits200ResponseCrewInnerFromJSON(json: any): PersonMovieCredits200ResponseCrewInner {
    return PersonMovieCredits200ResponseCrewInnerFromJSONTyped(json, false);
}

export function PersonMovieCredits200ResponseCrewInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonMovieCredits200ResponseCrewInner {
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
        'credit_id': json['credit_id'] == null ? undefined : json['credit_id'],
        'department': json['department'] == null ? undefined : json['department'],
        'job': json['job'] == null ? undefined : json['job'],
    };
}

export function PersonMovieCredits200ResponseCrewInnerToJSON(value?: PersonMovieCredits200ResponseCrewInner | null): any {
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
        'credit_id': value['credit_id'],
        'department': value['department'],
        'job': value['job'],
    };
}

