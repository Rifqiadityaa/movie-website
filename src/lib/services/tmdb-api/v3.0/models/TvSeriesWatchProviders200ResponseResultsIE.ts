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
import type { TvSeriesWatchProviders200ResponseResultsIEFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsIEFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsIEFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsIEFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsIEFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsIEFlatrateInner';
import type { TvSeriesWatchProviders200ResponseResultsIEBuyInner } from './TvSeriesWatchProviders200ResponseResultsIEBuyInner';
import {
    TvSeriesWatchProviders200ResponseResultsIEBuyInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsIEBuyInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsIEBuyInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsIEBuyInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsIE
 */
export interface TvSeriesWatchProviders200ResponseResultsIE {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsIE
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsIEFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsIE
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsIEFlatrateInner>;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsIEBuyInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsIE
     */
    buy?: Array<TvSeriesWatchProviders200ResponseResultsIEBuyInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsIE interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsIE(value: object): value is TvSeriesWatchProviders200ResponseResultsIE {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsIEFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsIE {
    return TvSeriesWatchProviders200ResponseResultsIEFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsIEFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsIE {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIEFlatrateInnerFromJSON)),
        'buy': json['buy'] == null ? undefined : ((json['buy'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIEBuyInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsIEToJSON(value?: TvSeriesWatchProviders200ResponseResultsIE | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIEFlatrateInnerToJSON)),
        'buy': value['buy'] == null ? undefined : ((value['buy'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsIEBuyInnerToJSON)),
    };
}

