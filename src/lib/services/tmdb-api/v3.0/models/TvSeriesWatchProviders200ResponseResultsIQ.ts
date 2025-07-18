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
import type { TvSeriesWatchProviders200ResponseResultsIQFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsIQFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsIQFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsIQ
 */
export interface TvSeriesWatchProviders200ResponseResultsIQ {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsIQ
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsIQFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsIQ
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsIQFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsIQ interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsIQ(value: object): value is TvSeriesWatchProviders200ResponseResultsIQ {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsIQFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsIQ {
    return TvSeriesWatchProviders200ResponseResultsIQFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsIQFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsIQ {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsIQToJSON(value?: TvSeriesWatchProviders200ResponseResultsIQ | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIQFlatrateInnerToJSON)),
    };
}

