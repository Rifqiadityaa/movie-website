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
import type { TvSeriesWatchProviders200ResponseResultsSCFlatrateInner } from './TvSeriesWatchProviders200ResponseResultsSCFlatrateInner';
import {
    TvSeriesWatchProviders200ResponseResultsSCFlatrateInnerFromJSON,
    TvSeriesWatchProviders200ResponseResultsSCFlatrateInnerFromJSONTyped,
    TvSeriesWatchProviders200ResponseResultsSCFlatrateInnerToJSON,
} from './TvSeriesWatchProviders200ResponseResultsSCFlatrateInner';

/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsTZ
 */
export interface TvSeriesWatchProviders200ResponseResultsTZ {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsTZ
     */
    link?: string;
    /**
     * 
     * @type {Array<TvSeriesWatchProviders200ResponseResultsSCFlatrateInner>}
     * @memberof TvSeriesWatchProviders200ResponseResultsTZ
     */
    flatrate?: Array<TvSeriesWatchProviders200ResponseResultsSCFlatrateInner>;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsTZ interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsTZ(value: object): value is TvSeriesWatchProviders200ResponseResultsTZ {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsTZFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsTZ {
    return TvSeriesWatchProviders200ResponseResultsTZFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsTZFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsTZ {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'flatrate': json['flatrate'] == null ? undefined : ((json['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsSCFlatrateInnerFromJSON)),
    };
}

export function TvSeriesWatchProviders200ResponseResultsTZToJSON(value?: TvSeriesWatchProviders200ResponseResultsTZ | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'flatrate': value['flatrate'] == null ? undefined : ((value['flatrate'] as Array<any>).map(TvSeriesWatchProviders200ResponseResultsSCFlatrateInnerToJSON)),
    };
}

