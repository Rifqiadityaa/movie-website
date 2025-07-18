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
import type { TvSeriesWatchProviders200ResponseResultsROFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsROFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsROFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsROFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsROFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsROFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsRO
 */
export interface TvSeriesWatchProviders200ResponseResultsRO {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsRO
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsROFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsRO
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsROFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsRO interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsRO(value: object): value is TvSeriesWatchProviders200ResponseResultsRO {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsROFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsRO {
    return TvSeriesWatchProviders200ResponseResultsROFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsROFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsRO {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsROFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsROToJSON(value?: TvSeriesWatchProviders200ResponseResultsRO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsROFlatrateInnerToJSON)),
    };
}

