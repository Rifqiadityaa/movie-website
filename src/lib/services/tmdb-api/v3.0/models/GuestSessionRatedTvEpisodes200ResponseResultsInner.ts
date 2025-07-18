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
 * @interface GuestSessionRatedTvEpisodes200ResponseResultsInner
 */
export interface GuestSessionRatedTvEpisodes200ResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    air_date?: string;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    episode_number?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    overview?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    production_code?: string;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    runtime?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    season_number?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    show_id?: number;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    still_path?: string;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    vote_average?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    vote_count?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTvEpisodes200ResponseResultsInner
     */
    rating?: number;
}

/**
 * Check if a given object implements the GuestSessionRatedTvEpisodes200ResponseResultsInner interface.
 */
export function instanceOfGuestSessionRatedTvEpisodes200ResponseResultsInner(value: object): value is GuestSessionRatedTvEpisodes200ResponseResultsInner {
    return true;
}

export function GuestSessionRatedTvEpisodes200ResponseResultsInnerFromJSON(json: any): GuestSessionRatedTvEpisodes200ResponseResultsInner {
    return GuestSessionRatedTvEpisodes200ResponseResultsInnerFromJSONTyped(json, false);
}

export function GuestSessionRatedTvEpisodes200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestSessionRatedTvEpisodes200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'air_date': json['air_date'] == null ? undefined : json['air_date'],
        'episode_number': json['episode_number'] == null ? undefined : json['episode_number'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'production_code': json['production_code'] == null ? undefined : json['production_code'],
        'runtime': json['runtime'] == null ? undefined : json['runtime'],
        'season_number': json['season_number'] == null ? undefined : json['season_number'],
        'show_id': json['show_id'] == null ? undefined : json['show_id'],
        'still_path': json['still_path'] == null ? undefined : json['still_path'],
        'vote_average': json['vote_average'] == null ? undefined : json['vote_average'],
        'vote_count': json['vote_count'] == null ? undefined : json['vote_count'],
        'rating': json['rating'] == null ? undefined : json['rating'],
    };
}

export function GuestSessionRatedTvEpisodes200ResponseResultsInnerToJSON(value?: GuestSessionRatedTvEpisodes200ResponseResultsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'air_date': value['air_date'],
        'episode_number': value['episode_number'],
        'id': value['id'],
        'name': value['name'],
        'overview': value['overview'],
        'production_code': value['production_code'],
        'runtime': value['runtime'],
        'season_number': value['season_number'],
        'show_id': value['show_id'],
        'still_path': value['still_path'],
        'vote_average': value['vote_average'],
        'vote_count': value['vote_count'],
        'rating': value['rating'],
    };
}

