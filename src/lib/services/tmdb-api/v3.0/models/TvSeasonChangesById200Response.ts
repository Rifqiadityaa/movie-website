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
import type { TvSeasonChangesById200ResponseChangesInner } from './TvSeasonChangesById200ResponseChangesInner';
import {
    TvSeasonChangesById200ResponseChangesInnerFromJSON,
    TvSeasonChangesById200ResponseChangesInnerFromJSONTyped,
    TvSeasonChangesById200ResponseChangesInnerToJSON,
} from './TvSeasonChangesById200ResponseChangesInner';

/**
 * 
 * @export
 * @interface TvSeasonChangesById200Response
 */
export interface TvSeasonChangesById200Response {
    /**
     * 
     * @type {Array<TvSeasonChangesById200ResponseChangesInner>}
     * @memberof TvSeasonChangesById200Response
     */
    changes?: Array<TvSeasonChangesById200ResponseChangesInner>;
}

/**
 * Check if a given object implements the TvSeasonChangesById200Response interface.
 */
export function instanceOfTvSeasonChangesById200Response(value: object): value is TvSeasonChangesById200Response {
    return true;
}

export function TvSeasonChangesById200ResponseFromJSON(json: any): TvSeasonChangesById200Response {
    return TvSeasonChangesById200ResponseFromJSONTyped(json, false);
}

export function TvSeasonChangesById200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeasonChangesById200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'changes': json['changes'] == null ? undefined : ((json['changes'] as Array<any>).map(TvSeasonChangesById200ResponseChangesInnerFromJSON)),
    };
}

export function TvSeasonChangesById200ResponseToJSON(value?: TvSeasonChangesById200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'changes': value['changes'] == null ? undefined : ((value['changes'] as Array<any>).map(TvSeasonChangesById200ResponseChangesInnerToJSON)),
    };
}

