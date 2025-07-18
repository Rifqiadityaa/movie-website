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
import type { TvSeriesWatchProviders200ResponseResultsPHFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsPHFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsPHFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsPHFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsPHFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsPHFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeasonWatchProviders200ResponseResultsTH
 */
export interface TvSeasonWatchProviders200ResponseResultsTH {
    /**
     * 
     * @type {string}
     * @memberof TvSeasonWatchProviders200ResponseResultsTH
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsPHFlatrateInner>}
     * @memberof TvSeasonWatchProviders200ResponseResultsTH
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsPHFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeasonWatchProviders200ResponseResultsTH interface.
 */
export function instanceOfTvSeasonWatchProviders200ResponseResultsTH(value: object): value is TvSeasonWatchProviders200ResponseResultsTH {
    return true;
}

export function TvSeasonWatchProviders200ResponseResultsTHFromJSON(json: any): TvSeasonWatchProviders200ResponseResultsTH {
    return TvSeasonWatchProviders200ResponseResultsTHFromJSONTyped(json, false);
}

export function TvSeasonWatchProviders200ResponseResultsTHFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonWatchProviders200ResponseResultsTH {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsPHFlatrateInnerFromJSON)),
    };
}

export function TvSeasonWatchProviders200ResponseResultsTHToJSON(value?: TvSeasonWatchProviders200ResponseResultsTH | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsPHFlatrateInnerToJSON)),
    };
}

