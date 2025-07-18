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
import type { AccountWatchlistMovies200ResponseResultsInner } from './AccountWatchlistMovies200ResponseResultsInner';
import {
    AccountWatchlistMovies200ResponseResultsInnerFromJSON,
    AccountWatchlistMovies200ResponseResultsInnerFromJSONTyped,
    AccountWatchlistMovies200ResponseResultsInnerToJSON,
} from './AccountWatchlistMovies200ResponseResultsInner';

/**
 * 
 * @export
 * @interface AccountWatchlistMovies200Response
 */
export interface AccountWatchlistMovies200Response {
    /**
     * 
     * @type {number}
     * @memberof AccountWatchlistMovies200Response
     */
    page?: number;
    /**
     * 
     * @type {Array<AccountWatchlistMovies200ResponseResultsInner>}
     * @memberof AccountWatchlistMovies200Response
     */
    results?: Array<AccountWatchlistMovies200ResponseResultsInner>;
    /**
     * 
     * @type {number}
     * @memberof AccountWatchlistMovies200Response
     */
    total_pages?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountWatchlistMovies200Response
     */
    total_results?: number;
}

/**
 * Check if a given object implements the AccountWatchlistMovies200Response interface.
 */
export function instanceOfAccountWatchlistMovies200Response(value: object): value is AccountWatchlistMovies200Response {
    return true;
}

export function AccountWatchlistMovies200ResponseFromJSON(json: any): AccountWatchlistMovies200Response {
    return AccountWatchlistMovies200ResponseFromJSONTyped(json, false);
}

export function AccountWatchlistMovies200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountWatchlistMovies200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'] == null ? undefined : json['page'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(AccountWatchlistMovies200ResponseResultsInnerFromJSON)),
        'total_pages': json['total_pages'] == null ? undefined : json['total_pages'],
        'total_results': json['total_results'] == null ? undefined : json['total_results'],
    };
}

export function AccountWatchlistMovies200ResponseToJSON(value?: AccountWatchlistMovies200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'page': value['page'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(AccountWatchlistMovies200ResponseResultsInnerToJSON)),
        'total_pages': value['total_pages'],
        'total_results': value['total_results'],
    };
}

