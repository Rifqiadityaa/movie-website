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
import type { TvSeriesAggregateCredits200ResponseCastInner } from './TvSeriesAggregateCredits200ResponseCastInner';
import {
    TvSeriesAggregateCredits200ResponseCastInnerFromJSON,
    TvSeriesAggregateCredits200ResponseCastInnerFromJSONTyped,
    TvSeriesAggregateCredits200ResponseCastInnerToJSON,
} from './TvSeriesAggregateCredits200ResponseCastInner';
import type { TvSeriesAggregateCredits200ResponseCrewInner } from './TvSeriesAggregateCredits200ResponseCrewInner';
import {
    TvSeriesAggregateCredits200ResponseCrewInnerFromJSON,
    TvSeriesAggregateCredits200ResponseCrewInnerFromJSONTyped,
    TvSeriesAggregateCredits200ResponseCrewInnerToJSON,
} from './TvSeriesAggregateCredits200ResponseCrewInner';

/**
 * 
 * @export
 * @interface TvSeriesAggregateCredits200Response
 */
export interface TvSeriesAggregateCredits200Response {
    /**
     * 
     * @type {Array<TvSeriesAggregateCredits200ResponseCastInner>}
     * @memberof TvSeriesAggregateCredits200Response
     */
    cast?: Array<TvSeriesAggregateCredits200ResponseCastInner>;
    /**
     * 
     * @type {Array<TvSeriesAggregateCredits200ResponseCrewInner>}
     * @memberof TvSeriesAggregateCredits200Response
     */
    crew?: Array<TvSeriesAggregateCredits200ResponseCrewInner>;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesAggregateCredits200Response
     */
    id?: number;
}

/**
 * Check if a given object implements the TvSeriesAggregateCredits200Response interface.
 */
export function instanceOfTvSeriesAggregateCredits200Response(value: object): value is TvSeriesAggregateCredits200Response {
    return true;
}

export function TvSeriesAggregateCredits200ResponseFromJSON(json: any): TvSeriesAggregateCredits200Response {
    return TvSeriesAggregateCredits200ResponseFromJSONTyped(json, false);
}

export function TvSeriesAggregateCredits200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesAggregateCredits200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'cast': json['cast'] == null ? undefined : ((json['cast'] as Array<any>).map(TvSeriesAggregateCredits200ResponseCastInnerFromJSON)),
        'crew': json['crew'] == null ? undefined : ((json['crew'] as Array<any>).map(TvSeriesAggregateCredits200ResponseCrewInnerFromJSON)),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function TvSeriesAggregateCredits200ResponseToJSON(value?: TvSeriesAggregateCredits200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cast': value['cast'] == null ? undefined : ((value['cast'] as Array<any>).map(TvSeriesAggregateCredits200ResponseCastInnerToJSON)),
        'crew': value['crew'] == null ? undefined : ((value['crew'] as Array<any>).map(TvSeriesAggregateCredits200ResponseCrewInnerToJSON)),
        'id': value['id'],
    };
}

