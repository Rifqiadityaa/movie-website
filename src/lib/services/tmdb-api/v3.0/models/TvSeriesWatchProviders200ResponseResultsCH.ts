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
import type { TvSeriesWatchProviders200ResponseResultsCHFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsCHFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsCHFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsCHFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsCHFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsCHFlatrateInner';
import type { MovieWatchProviders200ResponseResultsPERentInner } from './MovieWatchProviders200ResponseResultsPERentInner';
import {
    MovieWatchProviders200ResponseResultsPERentInnerFromJSON,
    MovieWatchProviders200ResponseResultsPERentInnerFromJSONTyped,
    MovieWatchProviders200ResponseResultsPERentInnerToJSON,
} from './MovieWatchProviders200ResponseResultsPERentInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsCH
 */
export interface TvSeriesWatchProviders200ResponseResultsCH {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsCH
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsCHFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsCH
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsCHFlatrateInner>;
    /**
     * 
     * @type {Array<MovieWatchProviders200ResponseResultsPERentInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsCH
     */
    buy?: Array<MovieWatchProviders200ResponseResultsPERentInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsCH interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsCH(value: object): value is TvSeriesWatchProviders200ResponseResultsCH {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsCHFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsCH {
    return TvSeriesWatchProviders200ResponseResultsCHFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsCHFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsCH {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsCHFlatrateInnerFromJSON)),
        'buy': json['buy'] == null ? undefined : ((json['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsPERentInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsCHToJSON(value?: TvSeriesWatchProviders200ResponseResultsCH | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsCHFlatrateInnerToJSON)),
        'buy': value['buy'] == null ? undefined : ((value['buy'] as Array<any>).map(MovieWatchProviders200ResponseResultsPERentInnerToJSON)),
    };
}

