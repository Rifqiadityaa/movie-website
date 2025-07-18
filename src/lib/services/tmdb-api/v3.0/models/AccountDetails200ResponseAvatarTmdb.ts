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
 * @interface AccountDetails200ResponseAvatarTmdb
 */
export interface AccountDetails200ResponseAvatarTmdb {
    /**
     * 
     * @type {string}
     * @memberof AccountDetails200ResponseAvatarTmdb
     */
    avatar_path?: string;
}

/**
 * Check if a given object implements the AccountDetails200ResponseAvatarTmdb interface.
 */
export function instanceOfAccountDetails200ResponseAvatarTmdb(value: object): value is AccountDetails200ResponseAvatarTmdb {
    return true;
}

export function AccountDetails200ResponseAvatarTmdbFromJSON(json: any): AccountDetails200ResponseAvatarTmdb {
    return AccountDetails200ResponseAvatarTmdbFromJSONTyped(json, false);
}

export function AccountDetails200ResponseAvatarTmdbFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDetails200ResponseAvatarTmdb {
    if (json == null) {
        return json;
    }
    return {
        
        'avatar_path': json['avatar_path'] == null ? undefined : json['avatar_path'],
    };
}

export function AccountDetails200ResponseAvatarTmdbToJSON(value?: AccountDetails200ResponseAvatarTmdb | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'avatar_path': value['avatar_path'],
    };
}

