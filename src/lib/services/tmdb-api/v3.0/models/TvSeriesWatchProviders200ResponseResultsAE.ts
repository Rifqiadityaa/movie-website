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
import type { TvSeriesWatchProviders200ResponseResultsAEFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsAEFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsAEFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsAEFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsAEFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsAEFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsAE
 */
export interface TvSeriesWatchProviders200ResponseResultsAE {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsAE
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsAEFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsAE
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsAEFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsAE interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsAE(value: object): value is TvSeriesWatchProviders200ResponseResultsAE {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsAEFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsAE {
    return TvSeriesWatchProviders200ResponseResultsAEFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsAEFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsAE {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsAEFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsAEToJSON(value?: TvSeriesWatchProviders200ResponseResultsAE | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsAEFlatrateInnerToJSON)),
    };
}

