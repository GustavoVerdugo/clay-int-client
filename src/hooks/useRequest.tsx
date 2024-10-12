/* eslint-disable max-params */
"use client"
import {
  QueryKey,
  useInfiniteQuery,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

export type usePostQueryOptions = UseMutationOptions<
  AxiosResponse,
  AxiosError,
  any
>

export type useGetQueryOptions = UseQueryOptions<
  AxiosResponse<any, any>,
  AxiosError<unknown, any>,
  AxiosResponse<any, any>,
  QueryKey
>

export const baseUrl = process.env.NEXT_PUBLIC_API

export const useGetQuery = (
  name: string,
  url: string,
  options?: useGetQueryOptions,
  params?: unknown[],
) => {
  return useQuery({
    queryKey: params ? [name, ...params] : [name],
    queryFn: async () => {
      const finalUrl = `${baseUrl}${url}`
      try {
        return await axios.get(finalUrl);
      } catch (error: unknown) {
        const axiosError = error as AxiosError;
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    networkMode: 'always',
    retry: true,
    refetchOnReconnect: true,
    ...options
  })
}

export const usePostQuery = (
  name: string,
  url: string,
  options?: usePostQueryOptions,
  headers?: Record<string, string>,
) => {
  return useMutation({
    mutationKey: [name],
    mutationFn: async (values: any) => {
      try {
        return await axios.post(`${baseUrl}${url}`, values, {
          headers: {
            ...headers,
          },
        });
      }
      catch (error: any) {
        const axiosError = error as AxiosError;
        console.error(axiosError)
      }
    }
  });
};

export const usePatchQuery = (
  name: string,
  url: string,
  options?: usePostQueryOptions,
  headers?: Record<string, string>,
) => {
  return useMutation({
    mutationKey: [name],
    mutationFn: async (values: any) => {
      try {
        return await axios.patch(`${baseUrl}${url}`, values, {
          headers: {
            ...headers,
          },
        });
      }
      catch (error: any) {
        const axiosError = error as AxiosError;
        console.error(axiosError)
      }
    }
  });
};