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
import type { TvSeriesVideos200ResponseResultsInner } from './TvSeriesVideos200ResponseResultsInner';
import {
    TvSeriesVideos200ResponseResultsInnerFromJSON,
    TvSeriesVideos200ResponseResultsInnerFromJSONTyped,
    TvSeriesVideos200ResponseResultsInnerToJSON,
} from './TvSeriesVideos200ResponseResultsInner';

/**
 * 
 * @export
 * @interface TvSeriesVideos200Response
 */
export interface TvSeriesVideos200Response {
    /**
     * 
     * @type {number}
     * @memberof TvSeriesVideos200Response
     */
    id?: number;
    /**
     * 
     * @type {Array<TvSeriesVideos200ResponseResultsInner>}
     * @memberof TvSeriesVideos200Response
     */
    results?: Array<TvSeriesVideos200ResponseResultsInner>;
}

/**
 * Check if a given object implements the TvSeriesVideos200Response interface.
 */
export function instanceOfTvSeriesVideos200Response(value: object): value is TvSeriesVideos200Response {
    return true;
}

export function TvSeriesVideos200ResponseFromJSON(json: any): TvSeriesVideos200Response {
    return TvSeriesVideos200ResponseFromJSONTyped(json, false);
}

export function TvSeriesVideos200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesVideos200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(TvSeriesVideos200ResponseResultsInnerFromJSON)),
    };
}

export function TvSeriesVideos200ResponseToJSON(value?: TvSeriesVideos200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(TvSeriesVideos200ResponseResultsInnerToJSON)),
    };
}

