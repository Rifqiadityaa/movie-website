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
import type { TvSeasonWatchProviders200ResponseResultsEGFlatrateInner } from './TvSeasonWatchProviders200ResponseResultsEGFlatrateInner';
import {
    TvSeasonWatchProviders200ResponseResultsEGFlatrateInnerFromJSON,
    TvSeasonWatchProviders200ResponseResultsEGFlatrateInnerFromJSONTyped,
    TvSeasonWatchProviders200ResponseResultsEGFlatrateInnerToJSON,
} from './TvSeasonWatchProviders200ResponseResultsEGFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeasonWatchProviders200ResponseResultsEG
 */
export interface TvSeasonWatchProviders200ResponseResultsEG {
    /**
     * 
     * @type {string}
     * @memberof TvSeasonWatchProviders200ResponseResultsEG
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeasonWatchProviders200ResponseResultsEGFlatrateInner>}
     * @memberof TvSeasonWatchProviders200ResponseResultsEG
     */
    flatrate?: Array<TvSeasonWatchProviders200ResponseResultsEGFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsEG interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsEG(value: object): value is TvSeasonWatchProviders200ResponseResultsEG {
    return true;
}

export function TvSeasonWatchProviders200ResponseResultsEGFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsEG {
    return TvSeasonWatchProviders200ResponseResultsEGFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsEGFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsEG {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeasonWatchProviders200ResponseResultsEGFlatrateInnerFromJSON)),
    };
}

export function TvSeasonWatchProviders200ResponseResultsEGToJSON(value?: TvSeasonWatchProviders200ResponseResultsEG | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeasonWatchProviders200ResponseResultsEGFlatrateInnerToJSON)),
    };
}

