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
 * @interface TvSeriesLatestId200ResponseSeasonsInner
 */
export interface TvSeriesLatestId200ResponseSeasonsInner {
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200ResponseSeasonsInner
     */
    air_date?: any;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesLatestId200ResponseSeasonsInner
     */
    episode_count?: number;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesLatestId200ResponseSeasonsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesLatestId200ResponseSeasonsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesLatestId200ResponseSeasonsInner
     */
    overview?: string;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesLatestId200ResponseSeasonsInner
     */
    poster_path?: any;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesLatestId200ResponseSeasonsInner
     */
    season_number?: number;
}

/**
 * Check if a given object implements the TvSeriesLatestId200ResponseSeasonsInner interface.
 */
export function instanceOfTvSeriesLatestId200ResponseSeasonsInner(value: object): value is TvSeriesLatestId200ResponseSeasonsInner {
    return true;
}

export function TvSeriesLatestId200ResponseSeasonsInnerFromJSON(json: any): TvSeriesLatestId200ResponseSeasonsInner {
    return TvSeriesLatestId200ResponseSeasonsInnerFromJSONTyped(json, false);
}

export function TvSeriesLatestId200ResponseSeasonsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesLatestId200ResponseSeasonsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'air_date': json['air_date'] == null ? undefined : json['air_date'],
        'episode_count': json['episode_count'] == null ? undefined : json['episode_count'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'poster_path': json['poster_path'] == null ? undefined : json['poster_path'],
        'season_number': json['season_number'] == null ? undefined : json['season_number'],
    };
}

export function TvSeriesLatestId200ResponseSeasonsInnerToJSON(value?: TvSeriesLatestId200ResponseSeasonsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'air_date': value['air_date'],
        'episode_count': value['episode_count'],
        'id': value['id'],
        'name': value['name'],
        'overview': value['overview'],
        'poster_path': value['poster_path'],
        'season_number': value['season_number'],
    };
}

