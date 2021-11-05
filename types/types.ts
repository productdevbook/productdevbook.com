import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  framework?: Maybe<Array<Maybe<Framework>>>;
  framework_aggregated?: Maybe<Array<Maybe<Framework_Aggregated>>>;
  framework_by_id?: Maybe<Framework>;
  repository?: Maybe<Array<Maybe<Repository>>>;
  repository_aggregated?: Maybe<Array<Maybe<Repository_Aggregated>>>;
  repository_by_id?: Maybe<Repository>;
  version?: Maybe<Array<Maybe<Version>>>;
  version_aggregated?: Maybe<Array<Maybe<Version_Aggregated>>>;
  version_by_id?: Maybe<Version>;
  version_framework?: Maybe<Array<Maybe<Version_Framework>>>;
  version_framework_aggregated?: Maybe<Array<Maybe<Version_Framework_Aggregated>>>;
  version_framework_by_id?: Maybe<Version_Framework>;
};


export type QueryFrameworkArgs = {
  filter?: Maybe<Framework_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryFramework_AggregatedArgs = {
  filter?: Maybe<Framework_Filter>;
  groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryFramework_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRepositoryArgs = {
  filter?: Maybe<Repository_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryRepository_AggregatedArgs = {
  filter?: Maybe<Repository_Filter>;
  groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryRepository_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryVersionArgs = {
  filter?: Maybe<Version_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryVersion_AggregatedArgs = {
  filter?: Maybe<Version_Filter>;
  groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryVersion_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryVersion_FrameworkArgs = {
  filter?: Maybe<Version_Framework_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryVersion_Framework_AggregatedArgs = {
  filter?: Maybe<Version_Framework_Filter>;
  groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryVersion_Framework_By_IdArgs = {
  id: Scalars['ID'];
};

export type Date_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _null?: Maybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: Maybe<Number_Filter_Operators>;
  hour?: Maybe<Number_Filter_Operators>;
  minute?: Maybe<Number_Filter_Operators>;
  month?: Maybe<Number_Filter_Operators>;
  second?: Maybe<Number_Filter_Operators>;
  week?: Maybe<Number_Filter_Operators>;
  weekday?: Maybe<Number_Filter_Operators>;
  year?: Maybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Framework = {
  __typename?: 'framework';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
  versions?: Maybe<Array<Maybe<Version_Framework>>>;
};


export type FrameworkVersionsArgs = {
  filter?: Maybe<Version_Framework_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Framework_Aggregated = {
  __typename?: 'framework_aggregated';
  avg?: Maybe<Framework_Aggregated_Fields>;
  avgDistinct?: Maybe<Framework_Aggregated_Fields>;
  count?: Maybe<Framework_Aggregated_Fields>;
  countDistinct?: Maybe<Framework_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Framework_Aggregated_Fields>;
  min?: Maybe<Framework_Aggregated_Fields>;
  sum?: Maybe<Framework_Aggregated_Fields>;
  sumDistinct?: Maybe<Framework_Aggregated_Fields>;
};

export type Framework_Aggregated_Fields = {
  __typename?: 'framework_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
};

export type Framework_Filter = {
  _and?: Maybe<Array<Maybe<Framework_Filter>>>;
  _or?: Maybe<Array<Maybe<Framework_Filter>>>;
  date_created?: Maybe<Date_Filter_Operators>;
  date_created_func?: Maybe<Datetime_Function_Filter_Operators>;
  date_updated?: Maybe<Date_Filter_Operators>;
  date_updated_func?: Maybe<Datetime_Function_Filter_Operators>;
  id?: Maybe<String_Filter_Operators>;
  logo?: Maybe<String_Filter_Operators>;
  slug?: Maybe<String_Filter_Operators>;
  sort?: Maybe<Number_Filter_Operators>;
  status?: Maybe<String_Filter_Operators>;
  title?: Maybe<String_Filter_Operators>;
  user_created?: Maybe<String_Filter_Operators>;
  user_updated?: Maybe<String_Filter_Operators>;
  versions?: Maybe<Version_Framework_Filter>;
};

export type Number_Filter_Operators = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _null?: Maybe<Scalars['Boolean']>;
};

export type Repository = {
  __typename?: 'repository';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Repository_Aggregated = {
  __typename?: 'repository_aggregated';
  avg?: Maybe<Repository_Aggregated_Fields>;
  avgDistinct?: Maybe<Repository_Aggregated_Fields>;
  count?: Maybe<Repository_Aggregated_Fields>;
  countDistinct?: Maybe<Repository_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Repository_Aggregated_Fields>;
  min?: Maybe<Repository_Aggregated_Fields>;
  sum?: Maybe<Repository_Aggregated_Fields>;
  sumDistinct?: Maybe<Repository_Aggregated_Fields>;
};

export type Repository_Aggregated_Fields = {
  __typename?: 'repository_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
};

export type Repository_Filter = {
  _and?: Maybe<Array<Maybe<Repository_Filter>>>;
  _or?: Maybe<Array<Maybe<Repository_Filter>>>;
  date_created?: Maybe<Date_Filter_Operators>;
  date_created_func?: Maybe<Datetime_Function_Filter_Operators>;
  date_updated?: Maybe<Date_Filter_Operators>;
  date_updated_func?: Maybe<Datetime_Function_Filter_Operators>;
  description?: Maybe<String_Filter_Operators>;
  id?: Maybe<String_Filter_Operators>;
  sort?: Maybe<Number_Filter_Operators>;
  status?: Maybe<String_Filter_Operators>;
  title?: Maybe<String_Filter_Operators>;
  user_created?: Maybe<String_Filter_Operators>;
  user_updated?: Maybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: Maybe<Scalars['String']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _ends_with?: Maybe<Scalars['String']>;
  _eq?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _ncontains?: Maybe<Scalars['String']>;
  _nempty?: Maybe<Scalars['Boolean']>;
  _nends_with?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _nstarts_with?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _starts_with?: Maybe<Scalars['String']>;
};

export type Version = {
  __typename?: 'version';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  frameworks?: Maybe<Array<Maybe<Version_Framework>>>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};


export type VersionFrameworksArgs = {
  filter?: Maybe<Version_Framework_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Version_Aggregated = {
  __typename?: 'version_aggregated';
  avg?: Maybe<Version_Aggregated_Fields>;
  avgDistinct?: Maybe<Version_Aggregated_Fields>;
  count?: Maybe<Version_Aggregated_Fields>;
  countDistinct?: Maybe<Version_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Version_Aggregated_Fields>;
  min?: Maybe<Version_Aggregated_Fields>;
  sum?: Maybe<Version_Aggregated_Fields>;
  sumDistinct?: Maybe<Version_Aggregated_Fields>;
};

export type Version_Aggregated_Fields = {
  __typename?: 'version_aggregated_fields';
  sort?: Maybe<Scalars['Float']>;
};

export type Version_Filter = {
  _and?: Maybe<Array<Maybe<Version_Filter>>>;
  _or?: Maybe<Array<Maybe<Version_Filter>>>;
  date_created?: Maybe<Date_Filter_Operators>;
  date_created_func?: Maybe<Datetime_Function_Filter_Operators>;
  frameworks?: Maybe<Version_Framework_Filter>;
  id?: Maybe<String_Filter_Operators>;
  sort?: Maybe<Number_Filter_Operators>;
  status?: Maybe<String_Filter_Operators>;
  title?: Maybe<String_Filter_Operators>;
};

export type Version_Framework = {
  __typename?: 'version_framework';
  framework_id?: Maybe<Framework>;
  id?: Maybe<Scalars['ID']>;
  version_id?: Maybe<Version>;
};


export type Version_FrameworkFramework_IdArgs = {
  filter?: Maybe<Framework_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Version_FrameworkVersion_IdArgs = {
  filter?: Maybe<Version_Filter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Version_Framework_Aggregated = {
  __typename?: 'version_framework_aggregated';
  avg?: Maybe<Version_Framework_Aggregated_Fields>;
  avgDistinct?: Maybe<Version_Framework_Aggregated_Fields>;
  count?: Maybe<Version_Framework_Aggregated_Fields>;
  countDistinct?: Maybe<Version_Framework_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Version_Framework_Aggregated_Fields>;
  min?: Maybe<Version_Framework_Aggregated_Fields>;
  sum?: Maybe<Version_Framework_Aggregated_Fields>;
  sumDistinct?: Maybe<Version_Framework_Aggregated_Fields>;
};

export type Version_Framework_Aggregated_Fields = {
  __typename?: 'version_framework_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Version_Framework_Filter = {
  _and?: Maybe<Array<Maybe<Version_Framework_Filter>>>;
  _or?: Maybe<Array<Maybe<Version_Framework_Filter>>>;
  framework_id?: Maybe<Framework_Filter>;
  id?: Maybe<Number_Filter_Operators>;
  version_id?: Maybe<Version_Filter>;
};

export type FrameworksQueryVariables = Exact<{ [key: string]: never; }>;


export type FrameworksQuery = { __typename?: 'Query', framework?: Array<{ __typename?: 'framework', id?: string | null | undefined, title?: string | null | undefined, logo?: string | null | undefined } | null | undefined> | null | undefined };


export const FrameworksDocument = gql`
    query frameworks {
  framework {
    id
    title
    logo
  }
}
    `;

/**
 * __useFrameworksQuery__
 *
 * To run a query within a Vue component, call `useFrameworksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFrameworksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFrameworksQuery();
 */
export function useFrameworksQuery(options: VueApolloComposable.UseQueryOptions<FrameworksQuery, FrameworksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FrameworksQuery, FrameworksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FrameworksQuery, FrameworksQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<FrameworksQuery, FrameworksQueryVariables>(FrameworksDocument, {}, options);
}
export type FrameworksQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<FrameworksQuery, FrameworksQueryVariables>;