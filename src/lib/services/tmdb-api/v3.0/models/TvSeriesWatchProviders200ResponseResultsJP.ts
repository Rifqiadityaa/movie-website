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
import type { TvSeriesWatchProviders200ResponseResultsJPBuyInner } from './TvSeriesWatchProviders200ResponseResultsJPBuyInner';
import {
    TvSeriesWatchProviders200ResponseResultsJPBuyInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsJPBuyInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsJPBuyInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsJPBuyInner';
import type { TvSeriesWatchProviders200ResponseResultsJPFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsJPFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsJPFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsJPFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsJPFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsJPFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsJP
 */
export interface TvSeriesWatchProviders200ResponseResultsJP {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsJPFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsJPFlatrateInner>;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsJPBuyInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    buy?: Array<TvSeriesWatchProviders200ResponseResultsJPBuyInner>;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsJPBuyInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsJP
     */
    rent?: Array<TvSeriesWatchProviders200ResponseResultsJPBuyInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsJP interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsJP(value: object): value is TvSeriesWatchProviders200ResponseResultsJP {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsJPFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsJP {
    return TvSeriesWatchProviders200ResponseResultsJPFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsJPFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsJP {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsJPFlatrateInnerFromJSON)),
        'buy': json['buy'] == null ? undefined : ((json['buy'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsJPBuyInnerFromJSON)),
        'rent': json['rent'] == null ? undefined : ((json['rent'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsJPBuyInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsJPToJSON(value?: TvSeriesWatchProviders200ResponseResultsJP | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsJPFlatrateInnerToJSON)),
        'buy': value['buy'] == null ? undefined : ((value['buy'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsJPBuyInnerToJSON)),
        'rent': value['rent'] == null ? undefined : ((value['rent'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsJPBuyInnerToJSON)),
    };
}

