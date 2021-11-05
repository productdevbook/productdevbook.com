import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from '@apollo/client/core'
import { defineNuxtPlugin, NuxtApp } from '#app'
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxt: NuxtApp) => {
    const httpLink = createHttpLink({
        uri: 'http://localhost:8055/graphql',
        fetch: (uri, options) => {
            return fetch(uri, options)
        }
    })

    const apolloClient = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })
    provideApolloClient(apolloClient)
    nuxt.provide("apollo", { DefaultApolloClient, apolloClient })
})
