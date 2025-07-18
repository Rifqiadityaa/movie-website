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
import type { TvSeriesWatchProviders200ResponseResultsKEFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsKEFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsKEFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsKE
 */
export interface TvSeriesWatchProviders200ResponseResultsKE {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsKE
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsKEFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsKE
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsKEFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsKE interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsKE(value: object): value is TvSeriesWatchProviders200ResponseResultsKE {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsKEFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsKE {
    return TvSeriesWatchProviders200ResponseResultsKEFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsKEFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsKE {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsKEToJSON(value?: TvSeriesWatchProviders200ResponseResultsKE | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerToJSON)),
    };
}

