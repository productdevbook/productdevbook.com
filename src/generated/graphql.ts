import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
};


export type QueryFrameworkArgs = {
  filter?: InputMaybe<Framework_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFramework_AggregatedArgs = {
  filter?: InputMaybe<Framework_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFramework_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRepositoryArgs = {
  filter?: InputMaybe<Repository_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRepository_AggregatedArgs = {
  filter?: InputMaybe<Repository_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRepository_By_IdArgs = {
  id: Scalars['ID'];
};

export type Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
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
  _and?: InputMaybe<Array<InputMaybe<Framework_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Framework_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  logo?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
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
  _and?: InputMaybe<Array<InputMaybe<Repository_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Repository_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type FrameworkQueryVariables = Exact<{ [key: string]: never; }>;


export type FrameworkQuery = { __typename?: 'Query', framework?: Array<{ __typename?: 'framework', id?: string | null | undefined, logo?: string | null | undefined, slug?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined };


export const FrameworkDocument = gql`
    query Framework {
  framework {
    id
    logo
    slug
    title
  }
}
    `;

/**
 * __useFrameworkQuery__
 *
 * To run a query within a Vue component, call `useFrameworkQuery` and pass it any options that fit your needs.
 * When your component renders, `useFrameworkQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFrameworkQuery();
 */
export function useFrameworkQuery(options: VueApolloComposable.UseQueryOptions<FrameworkQuery, FrameworkQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FrameworkQuery, FrameworkQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FrameworkQuery, FrameworkQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<FrameworkQuery, FrameworkQueryVariables>(FrameworkDocument, {}, options);
}
export type FrameworkQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<FrameworkQuery, FrameworkQueryVariables>;