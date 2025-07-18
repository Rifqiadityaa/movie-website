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
import type { TvSeriesDetails200ResponseNetworksInner } from './TvSeriesDetails200ResponseNetworksInner';
import {
    TvSeriesDetails200ResponseNetworksInnerFromJSON,
    TvSeriesDetails200ResponseNetworksInnerFromJSONTyped,
    TvSeriesDetails200ResponseNetworksInnerToJSON,
} from './TvSeriesDetails200ResponseNetworksInner';
import type { TvSeriesDetails200ResponseCreatedByInner } from './TvSeriesDetails200ResponseCreatedByInner';
import {
    TvSeriesDetails200ResponseCreatedByInnerFromJSON,
    TvSeriesDetails200ResponseCreatedByInnerFromJSONTyped,
    TvSeriesDetails200ResponseCreatedByInnerToJSON,
} from './TvSeriesDetails200ResponseCreatedByInner';
import type { TvSeriesDetails200ResponseGenresInner } from './TvSeriesDetails200ResponseGenresInner';
import {
    TvSeriesDetails200ResponseGenresInnerFromJSON,
    TvSeriesDetails200ResponseGenresInnerFromJSONTyped,
    TvSeriesDetails200ResponseGenresInnerToJSON,
} from './TvSeriesDetails200ResponseGenresInner';
import type { TvSeriesDetails200ResponseProductionCountriesInner } from './TvSeriesDetails200ResponseProductionCountriesInner';
import {
    TvSeriesDetails200ResponseProductionCountriesInnerFromJSON,
    TvSeriesDetails200ResponseProductionCountriesInnerFromJSONTyped,
    TvSeriesDetails200ResponseProductionCountriesInnerToJSON,
} from './TvSeriesDetails200ResponseProductionCountriesInner';
import type { TvSeriesDetails200ResponseProductionCompaniesInner } from './TvSeriesDetails200ResponseProductionCompaniesInner';
import {
    TvSeriesDetails200ResponseProductionCompaniesInnerFromJSON,
    TvSeriesDetails200ResponseProductionCompaniesInnerFromJSONTyped,
    TvSeriesDetails200ResponseProductionCompaniesInnerToJSON,
} from './TvSeriesDetails200ResponseProductionCompaniesInner';
import type { TvSeriesDetails200ResponseLastEpisodeToAir } from './TvSeriesDetails200ResponseLastEpisodeToAir';
import {
    TvSeriesDetails200ResponseLastEpisodeToAirFromJSON,
    TvSeriesDetails200ResponseLastEpisodeToAirFromJSONTyped,
    TvSeriesDetails200ResponseLastEpisodeToAirToJSON,
} from './TvSeriesDetails200ResponseLastEpisodeToAir';
import type { TvSeriesDetails200ResponseSeasonsInner } from './TvSeriesDetails200ResponseSeasonsInner';
import {
    TvSeriesDetails200ResponseSeasonsInnerFromJSON,
    TvSeriesDetails200ResponseSeasonsInnerFromJSONTyped,
    TvSeriesDetails200ResponseSeasonsInnerToJSON,
} from './TvSeriesDetails200ResponseSeasonsInner';
import type { MovieDetails200ResponseSpokenLanguagesInner } from './MovieDetails200ResponseSpokenLanguagesInner';
import {
    MovieDetails200ResponseSpokenLanguagesInnerFromJSON,
    MovieDetails200ResponseSpokenLanguagesInnerFromJSONTyped,
    MovieDetails200ResponseSpokenLanguagesInnerToJSON,
} from './MovieDetails200ResponseSpokenLanguagesInner';

/**
 * 
 * @export
 * @interface TvSeriesDetails200Response
 */
export interface TvSeriesDetails200Response {
    /**
     * 
     * @type {boolean}
     * @memberof TvSeriesDetails200Response
     */
    adult?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    backdrop_path?: string;
    /**
     * 
     * @type {Array<TvSeriesDetails200ResponseCreatedByInner>}
     * @memberof TvSeriesDetails200Response
     */
    created_by?: Array<TvSeriesDetails200ResponseCreatedByInner>;
    /**
     * 
     * @type {Array<number>}
     * @memberof TvSeriesDetails200Response
     */
    episode_run_time?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    first_air_date?: string;
    /**
     * 
     * @type {Array<TvSeriesDetails200ResponseGenresInner>}
     * @memberof TvSeriesDetails200Response
     */
    genres?: Array<TvSeriesDetails200ResponseGenresInner>;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    homepage?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesDetails200Response
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TvSeriesDetails200Response
     */
    in_production?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof TvSeriesDetails200Response
     */
    languages?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    last_air_date?: string;
    /**
     * 
     * @type {TvSeriesDetails200ResponseLastEpisodeToAir}
     * @memberof TvSeriesDetails200Response
     */
    last_episode_to_air?: TvSeriesDetails200ResponseLastEpisodeToAir;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    name?: string;
    /**
     * 
     * @type {any}
     * @memberof TvSeriesDetails200Response
     */
    next_episode_to_air?: any;
    /**
     * 
     * @type {Array<TvSeriesDetails200ResponseNetworksInner>}
     * @memberof TvSeriesDetails200Response
     */
    networks?: Array<TvSeriesDetails200ResponseNetworksInner>;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesDetails200Response
     */
    number_of_episodes?: number;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesDetails200Response
     */
    number_of_seasons?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TvSeriesDetails200Response
     */
    origin_country?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    original_language?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    original_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesDetails200Response
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    poster_path?: string;
    /**
     * 
     * @type {Array<TvSeriesDetails200ResponseProductionCompaniesInner>}
     * @memberof TvSeriesDetails200Response
     */
    production_companies?: Array<TvSeriesDetails200ResponseProductionCompaniesInner>;
    /**
     * 
     * @type {Array<TvSeriesDetails200ResponseProductionCountriesInner>}
     * @memberof TvSeriesDetails200Response
     */
    production_countries?: Array<TvSeriesDetails200ResponseProductionCountriesInner>;
    /**
     * 
     * @type {Array<TvSeriesDetails200ResponseSeasonsInner>}
     * @memberof TvSeriesDetails200Response
     */
    seasons?: Array<TvSeriesDetails200ResponseSeasonsInner>;
    /**
     * 
     * @type {Array<MovieDetails200ResponseSpokenLanguagesInner>}
     * @memberof TvSeriesDetails200Response
     */
    spoken_languages?: Array<MovieDetails200ResponseSpokenLanguagesInner>;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    tagline?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesDetails200Response
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesDetails200Response
     */
    vote_average?: number;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesDetails200Response
     */
    vote_count?: number;
}

/**
 * Check if a given object implements the TvSeriesDetails200Response interface.
 */
export function instanceOfTvSeriesDetails200Response(value: object): value is TvSeriesDetails200Response {
    return true;
}

export function TvSeriesDetails200ResponseFromJSON(json: any): TvSeriesDetails200Response {
    return TvSeriesDetails200ResponseFromJSONTyped(json, false);
}

export function TvSeriesDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesDetails200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'adult': json['adult'] == null ? undefined : json['adult'],
        'backdrop_path': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'created_by': json['created_by'] == null ? undefined : ((json['created_by'] as Array<any>).map(TvSeriesDetails200ResponseCreatedByInnerFromJSON)),
        'episode_run_time': json['episode_run_time'] == null ? undefined : json['episode_run_time'],
        'first_air_date': json['first_air_date'] == null ? undefined : json['first_air_date'],
        'genres': json['genres'] == null ? undefined : ((json['genres'] as Array<any>).map(TvSeriesDetails200ResponseGenresInnerFromJSON)),
        'homepage': json['homepage'] == null ? undefined : json['homepage'],
        'id': json['id'] == null ? undefined : json['id'],
        'in_production': json['in_production'] == null ? undefined : json['in_production'],
        'languages': json['languages'] == null ? undefined : json['languages'],
        'last_air_date': json['last_air_date'] == null ? undefined : json['last_air_date'],
        'last_episode_to_air': json['last_episode_to_air'] == null ? undefined : TvSeriesDetails200ResponseLastEpisodeToAirFromJSON(json['last_episode_to_air']),
        'name': json['name'] == null ? undefined : json['name'],
        'next_episode_to_air': json['next_episode_to_air'] == null ? undefined : json['next_episode_to_air'],
        'networks': json['networks'] == null ? undefined : ((json['networks'] as Array<any>).map(TvSeriesDetails200ResponseNetworksInnerFromJSON)),
        'number_of_episodes': json['number_of_episodes'] == null ? undefined : json['number_of_episodes'],
        'number_of_seasons': json['number_of_seasons'] == null ? undefined : json['number_of_seasons'],
        'origin_country': json['origin_country'] == null ? undefined : json['origin_country'],
        'original_language': json['original_language'] == null ? undefined : json['original_language'],
        'original_name': json['original_name'] == null ? undefined : json['original_name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'poster_path': json['poster_path'] == null ? undefined : json['poster_path'],
        'production_companies': json['production_companies'] == null ? undefined : ((json['production_companies'] as Array<any>).map(TvSeriesDetails200ResponseProductionCompaniesInnerFromJSON)),
        'production_countries': json['production_countries'] == null ? undefined : ((json['production_countries'] as Array<any>).map(TvSeriesDetails200ResponseProductionCountriesInnerFromJSON)),
        'seasons': json['seasons'] == null ? undefined : ((json['seasons'] as Array<any>).map(TvSeriesDetails200ResponseSeasonsInnerFromJSON)),
        'spoken_languages': json['spoken_languages'] == null ? undefined : ((json['spoken_languages'] as Array<any>).map(MovieDetails200ResponseSpokenLanguagesInnerFromJSON)),
        'status': json['status'] == null ? undefined : json['status'],
        'tagline': json['tagline'] == null ? undefined : json['tagline'],
        'type': json['type'] == null ? undefined : json['type'],
        'vote_average': json['vote_average'] == null ? undefined : json['vote_average'],
        'vote_count': json['vote_count'] == null ? undefined : json['vote_count'],
    };
}

export function TvSeriesDetails200ResponseToJSON(value?: TvSeriesDetails200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'adult': value['adult'],
        'backdrop_path': value['backdrop_path'],
        'created_by': value['created_by'] == null ? undefined : ((value['created_by'] as Array<any>).map(TvSeriesDetails200ResponseCreatedByInnerToJSON)),
        'episode_run_time': value['episode_run_time'],
        'first_air_date': value['first_air_date'],
        'genres': value['genres'] == null ? undefined : ((value['genres'] as Array<any>).map(TvSeriesDetails200ResponseGenresInnerToJSON)),
        'homepage': value['homepage'],
        'id': value['id'],
        'in_production': value['in_production'],
        'languages': value['languages'],
        'last_air_date': value['last_air_date'],
        'last_episode_to_air': TvSeriesDetails200ResponseLastEpisodeToAirToJSON(value['last_episode_to_air']),
        'name': value['name'],
        'next_episode_to_air': value['next_episode_to_air'],
        'networks': value['networks'] == null ? undefined : ((value['networks'] as Array<any>).map(TvSeriesDetails200ResponseNetworksInnerToJSON)),
        'number_of_episodes': value['number_of_episodes'],
        'number_of_seasons': value['number_of_seasons'],
        'origin_country': value['origin_country'],
        'original_language': value['original_language'],
        'original_name': value['original_name'],
        'overview': value['overview'],
        'popularity': value['popularity'],
        'poster_path': value['poster_path'],
        'production_companies': value['production_companies'] == null ? undefined : ((value['production_companies'] as Array<any>).map(TvSeriesDetails200ResponseProductionCompaniesInnerToJSON)),
        'production_countries': value['production_countries'] == null ? undefined : ((value['production_countries'] as Array<any>).map(TvSeriesDetails200ResponseProductionCountriesInnerToJSON)),
        'seasons': value['seasons'] == null ? undefined : ((value['seasons'] as Array<any>).map(TvSeriesDetails200ResponseSeasonsInnerToJSON)),
        'spoken_languages': value['spoken_languages'] == null ? undefined : ((value['spoken_languages'] as Array<any>).map(MovieDetails200ResponseSpokenLanguagesInnerToJSON)),
        'status': value['status'],
        'tagline': value['tagline'],
        'type': value['type'],
        'vote_average': value['vote_average'],
        'vote_count': value['vote_count'],
    };
}

