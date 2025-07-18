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
import type { TvSeriesChanges200ResponseChangesInner } from './TvSeriesChanges200ResponseChangesInner';
import {
    TvSeriesChanges200ResponseChangesInnerFromJSON,
    TvSeriesChanges200ResponseChangesInnerFromJSONTyped,
    TvSeriesChanges200ResponseChangesInnerToJSON,
} from './TvSeriesChanges200ResponseChangesInner';

/**
 * 
 * @export
 * @interface TvSeriesChanges200Response
 */
export interface TvSeriesChanges200Response {
    /**
     * 
     * @type {Array<TvSeriesChanges200ResponseChangesInner>}
     * @memberof TvSeriesChanges200Response
     */
    changes?: Array<TvSeriesChanges200ResponseChangesInner>;
}

/**
 * Check if a given object implements the TvSeriesChanges200Response interface.
 */
export function instanceOfTvSeriesChanges200Response(value: object): value is TvSeriesChanges200Response {
    return true;
}

export function TvSeriesChanges200ResponseFromJSON(json: any): TvSeriesChanges200Response {
    return TvSeriesChanges200ResponseFromJSONTyped(json, false);
}

export function TvSeriesChanges200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesChanges200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'changes': json['changes'] == null ? undefined : ((json['changes'] as Array<any>).map(TvSeriesChanges200ResponseChangesInnerFromJSON)),
    };
}

export function TvSeriesChanges200ResponseToJSON(value?: TvSeriesChanges200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'changes': value['changes'] == null ? undefined : ((value['changes'] as Array<any>).map(TvSeriesChanges200ResponseChangesInnerToJSON)),
    };
}

