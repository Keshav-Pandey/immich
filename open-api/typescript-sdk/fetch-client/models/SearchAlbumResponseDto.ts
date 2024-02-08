/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AlbumResponseDto } from './AlbumResponseDto';
import {
    AlbumResponseDtoFromJSON,
    AlbumResponseDtoFromJSONTyped,
    AlbumResponseDtoToJSON,
} from './AlbumResponseDto';
import type { SearchFacetResponseDto } from './SearchFacetResponseDto';
import {
    SearchFacetResponseDtoFromJSON,
    SearchFacetResponseDtoFromJSONTyped,
    SearchFacetResponseDtoToJSON,
} from './SearchFacetResponseDto';

/**
 * 
 * @export
 * @interface SearchAlbumResponseDto
 */
export interface SearchAlbumResponseDto {
    /**
     * 
     * @type {number}
     * @memberof SearchAlbumResponseDto
     */
    count: number;
    /**
     * 
     * @type {Array<SearchFacetResponseDto>}
     * @memberof SearchAlbumResponseDto
     */
    facets: Array<SearchFacetResponseDto>;
    /**
     * 
     * @type {Array<AlbumResponseDto>}
     * @memberof SearchAlbumResponseDto
     */
    items: Array<AlbumResponseDto>;
    /**
     * 
     * @type {number}
     * @memberof SearchAlbumResponseDto
     */
    total: number;
}

/**
 * Check if a given object implements the SearchAlbumResponseDto interface.
 */
export function instanceOfSearchAlbumResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "facets" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function SearchAlbumResponseDtoFromJSON(json: any): SearchAlbumResponseDto {
    return SearchAlbumResponseDtoFromJSONTyped(json, false);
}

export function SearchAlbumResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchAlbumResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'facets': ((json['facets'] as Array<any>).map(SearchFacetResponseDtoFromJSON)),
        'items': ((json['items'] as Array<any>).map(AlbumResponseDtoFromJSON)),
        'total': json['total'],
    };
}

export function SearchAlbumResponseDtoToJSON(value?: SearchAlbumResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'facets': ((value.facets as Array<any>).map(SearchFacetResponseDtoToJSON)),
        'items': ((value.items as Array<any>).map(AlbumResponseDtoToJSON)),
        'total': value.total,
    };
}
