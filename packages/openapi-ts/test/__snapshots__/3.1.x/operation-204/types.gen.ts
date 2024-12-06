// This file is auto-generated by @hey-api/openapi-ts

export type PostFooData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/foo';
};

export type PostFooResponses = {
    /**
     * OK
     */
    200: string;
    /**
     * Created
     */
    204: void;
};

export type PostFooResponse = PostFooResponses[keyof PostFooResponses];