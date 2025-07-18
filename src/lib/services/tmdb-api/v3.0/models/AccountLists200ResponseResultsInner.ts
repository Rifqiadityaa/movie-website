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
/**
 * 
 * @export
 * @interface AccountLists200ResponseResultsInner
 */
export interface AccountLists200ResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof AccountLists200ResponseResultsInner
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountLists200ResponseResultsInner
     */
    favorite_count?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountLists200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountLists200ResponseResultsInner
     */
    item_count?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountLists200ResponseResultsInner
     */
    iso_639_1?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountLists200ResponseResultsInner
     */
    list_type?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountLists200ResponseResultsInner
     */
    name?: string;
    /**
     * 
     * @type {any}
     * @memberof AccountLists200ResponseResultsInner
     */
    poster_path?: any;
}

/**
 * Check if a given object implements the AccountLists200ResponseResultsInner interface.
 */
export function instanceOfAccountLists200ResponseResultsInner(value: object): value is AccountLists200ResponseResultsInner {
    return true;
}

export function AccountLists200ResponseResultsInnerFromJSON(json: any): AccountLists200ResponseResultsInner {
    return AccountLists200ResponseResultsInnerFromJSONTyped(json, false);
}

export function AccountLists200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLists200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'favorite_count': json['favorite_count'] == null ? undefined : json['favorite_count'],
        'id': json['id'] == null ? undefined : json['id'],
        'item_count': json['item_count'] == null ? undefined : json['item_count'],
        'iso_639_1': json['iso_639_1'] == null ? undefined : json['iso_639_1'],
        'list_type': json['list_type'] == null ? undefined : json['list_type'],
        'name': json['name'] == null ? undefined : json['name'],
        'poster_path': json['poster_path'] == null ? undefined : json['poster_path'],
    };
}

export function AccountLists200ResponseResultsInnerToJSON(value?: AccountLists200ResponseResultsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'favorite_count': value['favorite_count'],
        'id': value['id'],
        'item_count': value['item_count'],
        'iso_639_1': value['iso_639_1'],
        'list_type': value['list_type'],
        'name': value['name'],
        'poster_path': value['poster_path'],
    };
}

