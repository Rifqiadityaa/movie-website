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
import type { TvEpisodeTranslations200ResponseTranslationsInnerData } from './TvEpisodeTranslations200ResponseTranslationsInnerData';
import {
    TvEpisodeTranslations200ResponseTranslationsInnerDataFromJSON,
    TvEpisodeTranslations200ResponseTranslationsInnerDataFromJSONTyped,
    TvEpisodeTranslations200ResponseTranslationsInnerDataToJSON,
} from './TvEpisodeTranslations200ResponseTranslationsInnerData';

/**
 * 
 * @export
 * @interface TvEpisodeTranslations200ResponseTranslationsInner
 */
export interface TvEpisodeTranslations200ResponseTranslationsInner {
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeTranslations200ResponseTranslationsInner
     */
    iso_3166_1?: string;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeTranslations200ResponseTranslationsInner
     */
    iso_639_1?: string;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeTranslations200ResponseTranslationsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeTranslations200ResponseTranslationsInner
     */
    english_name?: string;
    /**
     * 
     * @type {TvEpisodeTranslations200ResponseTranslationsInnerData}
     * @memberof TvEpisodeTranslations200ResponseTranslationsInner
     */
    data?: TvEpisodeTranslations200ResponseTranslationsInnerData;
}

/**
 * Check if a given object implements the TvEpisodeTranslations200ResponseTranslationsInner interface.
 */
export function instanceOfTvEpisodeTranslations200ResponseTranslationsInner(value: object): value is TvEpisodeTranslations200ResponseTranslationsInner {
    return true;
}

export function TvEpisodeTranslations200ResponseTranslationsInnerFromJSON(json: any): TvEpisodeTranslations200ResponseTranslationsInner {
    return TvEpisodeTranslations200ResponseTranslationsInnerFromJSONTyped(json, false);
}

export function TvEpisodeTranslations200ResponseTranslationsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvEpisodeTranslations200ResponseTranslationsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'iso_3166_1': json['iso_3166_1'] == null ? undefined : json['iso_3166_1'],
        'iso_639_1': json['iso_639_1'] == null ? undefined : json['iso_639_1'],
        'name': json['name'] == null ? undefined : json['name'],
        'english_name': json['english_name'] == null ? undefined : json['english_name'],
        'data': json['data'] == null ? undefined : TvEpisodeTranslations200ResponseTranslationsInnerDataFromJSON(json['data']),
    };
}

export function TvEpisodeTranslations200ResponseTranslationsInnerToJSON(value?: TvEpisodeTranslations200ResponseTranslationsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'iso_3166_1': value['iso_3166_1'],
        'iso_639_1': value['iso_639_1'],
        'name': value['name'],
        'english_name': value['english_name'],
        'data': TvEpisodeTranslations200ResponseTranslationsInnerDataToJSON(value['data']),
    };
}

