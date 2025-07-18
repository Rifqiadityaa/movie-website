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
import type { TvSeriesCredits200ResponseCrewInner } from './TvSeriesCredits200ResponseCrewInner';
import {
    TvSeriesCredits200ResponseCrewInnerFromJSON,
    TvSeriesCredits200ResponseCrewInnerFromJSONTyped,
    TvSeriesCredits200ResponseCrewInnerToJSON,
} from './TvSeriesCredits200ResponseCrewInner';
import type { TvSeriesCredits200ResponseCastInner } from './TvSeriesCredits200ResponseCastInner';
import {
    TvSeriesCredits200ResponseCastInnerFromJSON,
    TvSeriesCredits200ResponseCastInnerFromJSONTyped,
    TvSeriesCredits200ResponseCastInnerToJSON,
} from './TvSeriesCredits200ResponseCastInner';

/**
 * 
 * @export
 * @interface TvSeriesCredits200Response
 */
export interface TvSeriesCredits200Response {
    /**
     * 
     * @type {Array<TvSeriesCredits200ResponseCastInner>}
     * @memberof TvSeriesCredits200Response
     */
    cast?: Array<TvSeriesCredits200ResponseCastInner>;
    /**
     * 
     * @type {Array<TvSeriesCredits200ResponseCrewInner>}
     * @memberof TvSeriesCredits200Response
     */
    crew?: Array<TvSeriesCredits200ResponseCrewInner>;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesCredits200Response
     */
    id?: number;
}

/**
 * Check if a given object implements the TvSeriesCredits200Response interface.
 */
export function instanceOfTvSeriesCredits200Response(value: object): value is TvSeriesCredits200Response {
    return true;
}

export function TvSeriesCredits200ResponseFromJSON(json: any): TvSeriesCredits200Response {
    return TvSeriesCredits200ResponseFromJSONTyped(json, false);
}

export function TvSeriesCredits200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesCredits200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'cast': json['cast'] == null ? undefined : ((json['cast'] as Array<any>).map(TvSeriesCredits200ResponseCastInnerFromJSON)),
        'crew': json['crew'] == null ? undefined : ((json['crew'] as Array<any>).map(TvSeriesCredits200ResponseCrewInnerFromJSON)),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function TvSeriesCredits200ResponseToJSON(value?: TvSeriesCredits200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cast': value['cast'] == null ? undefined : ((value['cast'] as Array<any>).map(TvSeriesCredits200ResponseCastInnerToJSON)),
        'crew': value['crew'] == null ? undefined : ((value['crew'] as Array<any>).map(TvSeriesCredits200ResponseCrewInnerToJSON)),
        'id': value['id'],
    };
}

