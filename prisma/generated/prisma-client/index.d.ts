
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Jwks
 * 
 */
export type Jwks = $Result.DefaultSelection<Prisma.$JwksPayload>
/**
 * Model OauthApplication
 * 
 */
export type OauthApplication = $Result.DefaultSelection<Prisma.$OauthApplicationPayload>
/**
 * Model OauthAccessToken
 * 
 */
export type OauthAccessToken = $Result.DefaultSelection<Prisma.$OauthAccessTokenPayload>
/**
 * Model OauthConsent
 * 
 */
export type OauthConsent = $Result.DefaultSelection<Prisma.$OauthConsentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwks`: Exposes CRUD operations for the **Jwks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jwks
    * const jwks = await prisma.jwks.findMany()
    * ```
    */
  get jwks(): Prisma.JwksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oauthApplication`: Exposes CRUD operations for the **OauthApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OauthApplications
    * const oauthApplications = await prisma.oauthApplication.findMany()
    * ```
    */
  get oauthApplication(): Prisma.OauthApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oauthAccessToken`: Exposes CRUD operations for the **OauthAccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OauthAccessTokens
    * const oauthAccessTokens = await prisma.oauthAccessToken.findMany()
    * ```
    */
  get oauthAccessToken(): Prisma.OauthAccessTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oauthConsent`: Exposes CRUD operations for the **OauthConsent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OauthConsents
    * const oauthConsents = await prisma.oauthConsent.findMany()
    * ```
    */
  get oauthConsent(): Prisma.OauthConsentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Jwks: 'Jwks',
    OauthApplication: 'OauthApplication',
    OauthAccessToken: 'OauthAccessToken',
    OauthConsent: 'OauthConsent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "jwks" | "oauthApplication" | "oauthAccessToken" | "oauthConsent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Jwks: {
        payload: Prisma.$JwksPayload<ExtArgs>
        fields: Prisma.JwksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JwksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JwksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          findFirst: {
            args: Prisma.JwksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JwksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          findMany: {
            args: Prisma.JwksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>[]
          }
          create: {
            args: Prisma.JwksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          createMany: {
            args: Prisma.JwksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JwksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>[]
          }
          delete: {
            args: Prisma.JwksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          update: {
            args: Prisma.JwksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          deleteMany: {
            args: Prisma.JwksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JwksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JwksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>[]
          }
          upsert: {
            args: Prisma.JwksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwksPayload>
          }
          aggregate: {
            args: Prisma.JwksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwks>
          }
          groupBy: {
            args: Prisma.JwksGroupByArgs<ExtArgs>
            result: $Utils.Optional<JwksGroupByOutputType>[]
          }
          count: {
            args: Prisma.JwksCountArgs<ExtArgs>
            result: $Utils.Optional<JwksCountAggregateOutputType> | number
          }
        }
      }
      OauthApplication: {
        payload: Prisma.$OauthApplicationPayload<ExtArgs>
        fields: Prisma.OauthApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OauthApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OauthApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>
          }
          findFirst: {
            args: Prisma.OauthApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OauthApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>
          }
          findMany: {
            args: Prisma.OauthApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>[]
          }
          create: {
            args: Prisma.OauthApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>
          }
          createMany: {
            args: Prisma.OauthApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OauthApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>[]
          }
          delete: {
            args: Prisma.OauthApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>
          }
          update: {
            args: Prisma.OauthApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>
          }
          deleteMany: {
            args: Prisma.OauthApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OauthApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OauthApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>[]
          }
          upsert: {
            args: Prisma.OauthApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthApplicationPayload>
          }
          aggregate: {
            args: Prisma.OauthApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOauthApplication>
          }
          groupBy: {
            args: Prisma.OauthApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OauthApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OauthApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<OauthApplicationCountAggregateOutputType> | number
          }
        }
      }
      OauthAccessToken: {
        payload: Prisma.$OauthAccessTokenPayload<ExtArgs>
        fields: Prisma.OauthAccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OauthAccessTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OauthAccessTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>
          }
          findFirst: {
            args: Prisma.OauthAccessTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OauthAccessTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>
          }
          findMany: {
            args: Prisma.OauthAccessTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>[]
          }
          create: {
            args: Prisma.OauthAccessTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>
          }
          createMany: {
            args: Prisma.OauthAccessTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OauthAccessTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>[]
          }
          delete: {
            args: Prisma.OauthAccessTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>
          }
          update: {
            args: Prisma.OauthAccessTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.OauthAccessTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OauthAccessTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OauthAccessTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>[]
          }
          upsert: {
            args: Prisma.OauthAccessTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccessTokenPayload>
          }
          aggregate: {
            args: Prisma.OauthAccessTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOauthAccessToken>
          }
          groupBy: {
            args: Prisma.OauthAccessTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OauthAccessTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OauthAccessTokenCountArgs<ExtArgs>
            result: $Utils.Optional<OauthAccessTokenCountAggregateOutputType> | number
          }
        }
      }
      OauthConsent: {
        payload: Prisma.$OauthConsentPayload<ExtArgs>
        fields: Prisma.OauthConsentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OauthConsentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OauthConsentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>
          }
          findFirst: {
            args: Prisma.OauthConsentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OauthConsentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>
          }
          findMany: {
            args: Prisma.OauthConsentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>[]
          }
          create: {
            args: Prisma.OauthConsentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>
          }
          createMany: {
            args: Prisma.OauthConsentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OauthConsentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>[]
          }
          delete: {
            args: Prisma.OauthConsentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>
          }
          update: {
            args: Prisma.OauthConsentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>
          }
          deleteMany: {
            args: Prisma.OauthConsentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OauthConsentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OauthConsentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>[]
          }
          upsert: {
            args: Prisma.OauthConsentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthConsentPayload>
          }
          aggregate: {
            args: Prisma.OauthConsentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOauthConsent>
          }
          groupBy: {
            args: Prisma.OauthConsentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OauthConsentGroupByOutputType>[]
          }
          count: {
            args: Prisma.OauthConsentCountArgs<ExtArgs>
            result: $Utils.Optional<OauthConsentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    jwks?: JwksOmit
    oauthApplication?: OauthApplicationOmit
    oauthAccessToken?: OauthAccessTokenOmit
    oauthConsent?: OauthConsentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    oauthapplications: number
    oauthaccesstokens: number
    oauthconsents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    oauthapplications?: boolean | UserCountOutputTypeCountOauthapplicationsArgs
    oauthaccesstokens?: boolean | UserCountOutputTypeCountOauthaccesstokensArgs
    oauthconsents?: boolean | UserCountOutputTypeCountOauthconsentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthapplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthaccesstokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthAccessTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthconsentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthConsentWhereInput
  }


  /**
   * Count Type OauthApplicationCountOutputType
   */

  export type OauthApplicationCountOutputType = {
    oauthaccesstokens: number
    oauthconsents: number
  }

  export type OauthApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthaccesstokens?: boolean | OauthApplicationCountOutputTypeCountOauthaccesstokensArgs
    oauthconsents?: boolean | OauthApplicationCountOutputTypeCountOauthconsentsArgs
  }

  // Custom InputTypes
  /**
   * OauthApplicationCountOutputType without action
   */
  export type OauthApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplicationCountOutputType
     */
    select?: OauthApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OauthApplicationCountOutputType without action
   */
  export type OauthApplicationCountOutputTypeCountOauthaccesstokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthAccessTokenWhereInput
  }

  /**
   * OauthApplicationCountOutputType without action
   */
  export type OauthApplicationCountOutputTypeCountOauthconsentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthConsentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    oauthapplications?: boolean | User$oauthapplicationsArgs<ExtArgs>
    oauthaccesstokens?: boolean | User$oauthaccesstokensArgs<ExtArgs>
    oauthconsents?: boolean | User$oauthconsentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    oauthapplications?: boolean | User$oauthapplicationsArgs<ExtArgs>
    oauthaccesstokens?: boolean | User$oauthaccesstokensArgs<ExtArgs>
    oauthconsents?: boolean | User$oauthconsentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      oauthapplications: Prisma.$OauthApplicationPayload<ExtArgs>[]
      oauthaccesstokens: Prisma.$OauthAccessTokenPayload<ExtArgs>[]
      oauthconsents: Prisma.$OauthConsentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthapplications<T extends User$oauthapplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthapplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthaccesstokens<T extends User$oauthaccesstokensArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthaccesstokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthconsents<T extends User$oauthconsentsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthconsentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.oauthapplications
   */
  export type User$oauthapplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    where?: OauthApplicationWhereInput
    orderBy?: OauthApplicationOrderByWithRelationInput | OauthApplicationOrderByWithRelationInput[]
    cursor?: OauthApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthApplicationScalarFieldEnum | OauthApplicationScalarFieldEnum[]
  }

  /**
   * User.oauthaccesstokens
   */
  export type User$oauthaccesstokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    where?: OauthAccessTokenWhereInput
    orderBy?: OauthAccessTokenOrderByWithRelationInput | OauthAccessTokenOrderByWithRelationInput[]
    cursor?: OauthAccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthAccessTokenScalarFieldEnum | OauthAccessTokenScalarFieldEnum[]
  }

  /**
   * User.oauthconsents
   */
  export type User$oauthconsentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    where?: OauthConsentWhereInput
    orderBy?: OauthConsentOrderByWithRelationInput | OauthConsentOrderByWithRelationInput[]
    cursor?: OauthConsentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthConsentScalarFieldEnum | OauthConsentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    providerId: number
    accessToken: number
    refreshToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    idToken: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountId" | "providerId" | "accessToken" | "refreshToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "idToken" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      providerId: string
      accessToken: string | null
      refreshToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      idToken: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Jwks
   */

  export type AggregateJwks = {
    _count: JwksCountAggregateOutputType | null
    _min: JwksMinAggregateOutputType | null
    _max: JwksMaxAggregateOutputType | null
  }

  export type JwksMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    createdAt: Date | null
  }

  export type JwksMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    createdAt: Date | null
  }

  export type JwksCountAggregateOutputType = {
    id: number
    publicKey: number
    privateKey: number
    createdAt: number
    _all: number
  }


  export type JwksMinAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
  }

  export type JwksMaxAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
  }

  export type JwksCountAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
    _all?: true
  }

  export type JwksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jwks to aggregate.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jwks
    **/
    _count?: true | JwksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JwksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JwksMaxAggregateInputType
  }

  export type GetJwksAggregateType<T extends JwksAggregateArgs> = {
        [P in keyof T & keyof AggregateJwks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwks[P]>
      : GetScalarType<T[P], AggregateJwks[P]>
  }




  export type JwksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwksWhereInput
    orderBy?: JwksOrderByWithAggregationInput | JwksOrderByWithAggregationInput[]
    by: JwksScalarFieldEnum[] | JwksScalarFieldEnum
    having?: JwksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JwksCountAggregateInputType | true
    _min?: JwksMinAggregateInputType
    _max?: JwksMaxAggregateInputType
  }

  export type JwksGroupByOutputType = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date
    _count: JwksCountAggregateOutputType | null
    _min: JwksMinAggregateOutputType | null
    _max: JwksMaxAggregateOutputType | null
  }

  type GetJwksGroupByPayload<T extends JwksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JwksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JwksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JwksGroupByOutputType[P]>
            : GetScalarType<T[P], JwksGroupByOutputType[P]>
        }
      >
    >


  export type JwksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jwks"]>

  export type JwksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jwks"]>

  export type JwksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jwks"]>

  export type JwksSelectScalar = {
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
  }

  export type JwksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "privateKey" | "createdAt", ExtArgs["result"]["jwks"]>

  export type $JwksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jwks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      privateKey: string
      createdAt: Date
    }, ExtArgs["result"]["jwks"]>
    composites: {}
  }

  type JwksGetPayload<S extends boolean | null | undefined | JwksDefaultArgs> = $Result.GetResult<Prisma.$JwksPayload, S>

  type JwksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JwksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JwksCountAggregateInputType | true
    }

  export interface JwksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jwks'], meta: { name: 'Jwks' } }
    /**
     * Find zero or one Jwks that matches the filter.
     * @param {JwksFindUniqueArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JwksFindUniqueArgs>(args: SelectSubset<T, JwksFindUniqueArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jwks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JwksFindUniqueOrThrowArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JwksFindUniqueOrThrowArgs>(args: SelectSubset<T, JwksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jwks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksFindFirstArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JwksFindFirstArgs>(args?: SelectSubset<T, JwksFindFirstArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jwks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksFindFirstOrThrowArgs} args - Arguments to find a Jwks
     * @example
     * // Get one Jwks
     * const jwks = await prisma.jwks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JwksFindFirstOrThrowArgs>(args?: SelectSubset<T, JwksFindFirstOrThrowArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jwks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jwks
     * const jwks = await prisma.jwks.findMany()
     * 
     * // Get first 10 Jwks
     * const jwks = await prisma.jwks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jwksWithIdOnly = await prisma.jwks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JwksFindManyArgs>(args?: SelectSubset<T, JwksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jwks.
     * @param {JwksCreateArgs} args - Arguments to create a Jwks.
     * @example
     * // Create one Jwks
     * const Jwks = await prisma.jwks.create({
     *   data: {
     *     // ... data to create a Jwks
     *   }
     * })
     * 
     */
    create<T extends JwksCreateArgs>(args: SelectSubset<T, JwksCreateArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jwks.
     * @param {JwksCreateManyArgs} args - Arguments to create many Jwks.
     * @example
     * // Create many Jwks
     * const jwks = await prisma.jwks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JwksCreateManyArgs>(args?: SelectSubset<T, JwksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jwks and returns the data saved in the database.
     * @param {JwksCreateManyAndReturnArgs} args - Arguments to create many Jwks.
     * @example
     * // Create many Jwks
     * const jwks = await prisma.jwks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jwks and only return the `id`
     * const jwksWithIdOnly = await prisma.jwks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JwksCreateManyAndReturnArgs>(args?: SelectSubset<T, JwksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jwks.
     * @param {JwksDeleteArgs} args - Arguments to delete one Jwks.
     * @example
     * // Delete one Jwks
     * const Jwks = await prisma.jwks.delete({
     *   where: {
     *     // ... filter to delete one Jwks
     *   }
     * })
     * 
     */
    delete<T extends JwksDeleteArgs>(args: SelectSubset<T, JwksDeleteArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jwks.
     * @param {JwksUpdateArgs} args - Arguments to update one Jwks.
     * @example
     * // Update one Jwks
     * const jwks = await prisma.jwks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JwksUpdateArgs>(args: SelectSubset<T, JwksUpdateArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jwks.
     * @param {JwksDeleteManyArgs} args - Arguments to filter Jwks to delete.
     * @example
     * // Delete a few Jwks
     * const { count } = await prisma.jwks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JwksDeleteManyArgs>(args?: SelectSubset<T, JwksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jwks
     * const jwks = await prisma.jwks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JwksUpdateManyArgs>(args: SelectSubset<T, JwksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jwks and returns the data updated in the database.
     * @param {JwksUpdateManyAndReturnArgs} args - Arguments to update many Jwks.
     * @example
     * // Update many Jwks
     * const jwks = await prisma.jwks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jwks and only return the `id`
     * const jwksWithIdOnly = await prisma.jwks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JwksUpdateManyAndReturnArgs>(args: SelectSubset<T, JwksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jwks.
     * @param {JwksUpsertArgs} args - Arguments to update or create a Jwks.
     * @example
     * // Update or create a Jwks
     * const jwks = await prisma.jwks.upsert({
     *   create: {
     *     // ... data to create a Jwks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jwks we want to update
     *   }
     * })
     */
    upsert<T extends JwksUpsertArgs>(args: SelectSubset<T, JwksUpsertArgs<ExtArgs>>): Prisma__JwksClient<$Result.GetResult<Prisma.$JwksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksCountArgs} args - Arguments to filter Jwks to count.
     * @example
     * // Count the number of Jwks
     * const count = await prisma.jwks.count({
     *   where: {
     *     // ... the filter for the Jwks we want to count
     *   }
     * })
    **/
    count<T extends JwksCountArgs>(
      args?: Subset<T, JwksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JwksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JwksAggregateArgs>(args: Subset<T, JwksAggregateArgs>): Prisma.PrismaPromise<GetJwksAggregateType<T>>

    /**
     * Group by Jwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JwksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JwksGroupByArgs['orderBy'] }
        : { orderBy?: JwksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JwksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jwks model
   */
  readonly fields: JwksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jwks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JwksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jwks model
   */
  interface JwksFieldRefs {
    readonly id: FieldRef<"Jwks", 'String'>
    readonly publicKey: FieldRef<"Jwks", 'String'>
    readonly privateKey: FieldRef<"Jwks", 'String'>
    readonly createdAt: FieldRef<"Jwks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jwks findUnique
   */
  export type JwksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks findUniqueOrThrow
   */
  export type JwksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks findFirst
   */
  export type JwksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jwks.
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jwks.
     */
    distinct?: JwksScalarFieldEnum | JwksScalarFieldEnum[]
  }

  /**
   * Jwks findFirstOrThrow
   */
  export type JwksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jwks.
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jwks.
     */
    distinct?: JwksScalarFieldEnum | JwksScalarFieldEnum[]
  }

  /**
   * Jwks findMany
   */
  export type JwksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter, which Jwks to fetch.
     */
    where?: JwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jwks to fetch.
     */
    orderBy?: JwksOrderByWithRelationInput | JwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jwks.
     */
    cursor?: JwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jwks.
     */
    skip?: number
    distinct?: JwksScalarFieldEnum | JwksScalarFieldEnum[]
  }

  /**
   * Jwks create
   */
  export type JwksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data needed to create a Jwks.
     */
    data: XOR<JwksCreateInput, JwksUncheckedCreateInput>
  }

  /**
   * Jwks createMany
   */
  export type JwksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jwks.
     */
    data: JwksCreateManyInput | JwksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jwks createManyAndReturn
   */
  export type JwksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data used to create many Jwks.
     */
    data: JwksCreateManyInput | JwksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jwks update
   */
  export type JwksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data needed to update a Jwks.
     */
    data: XOR<JwksUpdateInput, JwksUncheckedUpdateInput>
    /**
     * Choose, which Jwks to update.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks updateMany
   */
  export type JwksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jwks.
     */
    data: XOR<JwksUpdateManyMutationInput, JwksUncheckedUpdateManyInput>
    /**
     * Filter which Jwks to update
     */
    where?: JwksWhereInput
    /**
     * Limit how many Jwks to update.
     */
    limit?: number
  }

  /**
   * Jwks updateManyAndReturn
   */
  export type JwksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The data used to update Jwks.
     */
    data: XOR<JwksUpdateManyMutationInput, JwksUncheckedUpdateManyInput>
    /**
     * Filter which Jwks to update
     */
    where?: JwksWhereInput
    /**
     * Limit how many Jwks to update.
     */
    limit?: number
  }

  /**
   * Jwks upsert
   */
  export type JwksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * The filter to search for the Jwks to update in case it exists.
     */
    where: JwksWhereUniqueInput
    /**
     * In case the Jwks found by the `where` argument doesn't exist, create a new Jwks with this data.
     */
    create: XOR<JwksCreateInput, JwksUncheckedCreateInput>
    /**
     * In case the Jwks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JwksUpdateInput, JwksUncheckedUpdateInput>
  }

  /**
   * Jwks delete
   */
  export type JwksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
    /**
     * Filter which Jwks to delete.
     */
    where: JwksWhereUniqueInput
  }

  /**
   * Jwks deleteMany
   */
  export type JwksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jwks to delete
     */
    where?: JwksWhereInput
    /**
     * Limit how many Jwks to delete.
     */
    limit?: number
  }

  /**
   * Jwks without action
   */
  export type JwksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jwks
     */
    select?: JwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jwks
     */
    omit?: JwksOmit<ExtArgs> | null
  }


  /**
   * Model OauthApplication
   */

  export type AggregateOauthApplication = {
    _count: OauthApplicationCountAggregateOutputType | null
    _min: OauthApplicationMinAggregateOutputType | null
    _max: OauthApplicationMaxAggregateOutputType | null
  }

  export type OauthApplicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    metadata: string | null
    clientId: string | null
    clientSecret: string | null
    redirectURLs: string | null
    type: string | null
    disabled: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OauthApplicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    metadata: string | null
    clientId: string | null
    clientSecret: string | null
    redirectURLs: string | null
    type: string | null
    disabled: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OauthApplicationCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    metadata: number
    clientId: number
    clientSecret: number
    redirectURLs: number
    type: number
    disabled: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OauthApplicationMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    metadata?: true
    clientId?: true
    clientSecret?: true
    redirectURLs?: true
    type?: true
    disabled?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OauthApplicationMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    metadata?: true
    clientId?: true
    clientSecret?: true
    redirectURLs?: true
    type?: true
    disabled?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OauthApplicationCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    metadata?: true
    clientId?: true
    clientSecret?: true
    redirectURLs?: true
    type?: true
    disabled?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OauthApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthApplication to aggregate.
     */
    where?: OauthApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthApplications to fetch.
     */
    orderBy?: OauthApplicationOrderByWithRelationInput | OauthApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OauthApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OauthApplications
    **/
    _count?: true | OauthApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OauthApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OauthApplicationMaxAggregateInputType
  }

  export type GetOauthApplicationAggregateType<T extends OauthApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateOauthApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauthApplication[P]>
      : GetScalarType<T[P], AggregateOauthApplication[P]>
  }




  export type OauthApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthApplicationWhereInput
    orderBy?: OauthApplicationOrderByWithAggregationInput | OauthApplicationOrderByWithAggregationInput[]
    by: OauthApplicationScalarFieldEnum[] | OauthApplicationScalarFieldEnum
    having?: OauthApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OauthApplicationCountAggregateInputType | true
    _min?: OauthApplicationMinAggregateInputType
    _max?: OauthApplicationMaxAggregateInputType
  }

  export type OauthApplicationGroupByOutputType = {
    id: string
    name: string | null
    icon: string | null
    metadata: string | null
    clientId: string | null
    clientSecret: string | null
    redirectURLs: string | null
    type: string | null
    disabled: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: OauthApplicationCountAggregateOutputType | null
    _min: OauthApplicationMinAggregateOutputType | null
    _max: OauthApplicationMaxAggregateOutputType | null
  }

  type GetOauthApplicationGroupByPayload<T extends OauthApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OauthApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OauthApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OauthApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], OauthApplicationGroupByOutputType[P]>
        }
      >
    >


  export type OauthApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    metadata?: boolean
    clientId?: boolean
    clientSecret?: boolean
    redirectURLs?: boolean
    type?: boolean
    disabled?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | OauthApplication$userArgs<ExtArgs>
    oauthaccesstokens?: boolean | OauthApplication$oauthaccesstokensArgs<ExtArgs>
    oauthconsents?: boolean | OauthApplication$oauthconsentsArgs<ExtArgs>
    _count?: boolean | OauthApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oauthApplication"]>

  export type OauthApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    metadata?: boolean
    clientId?: boolean
    clientSecret?: boolean
    redirectURLs?: boolean
    type?: boolean
    disabled?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | OauthApplication$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthApplication"]>

  export type OauthApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    metadata?: boolean
    clientId?: boolean
    clientSecret?: boolean
    redirectURLs?: boolean
    type?: boolean
    disabled?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | OauthApplication$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthApplication"]>

  export type OauthApplicationSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    metadata?: boolean
    clientId?: boolean
    clientSecret?: boolean
    redirectURLs?: boolean
    type?: boolean
    disabled?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OauthApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "metadata" | "clientId" | "clientSecret" | "redirectURLs" | "type" | "disabled" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["oauthApplication"]>
  export type OauthApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OauthApplication$userArgs<ExtArgs>
    oauthaccesstokens?: boolean | OauthApplication$oauthaccesstokensArgs<ExtArgs>
    oauthconsents?: boolean | OauthApplication$oauthconsentsArgs<ExtArgs>
    _count?: boolean | OauthApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OauthApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OauthApplication$userArgs<ExtArgs>
  }
  export type OauthApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OauthApplication$userArgs<ExtArgs>
  }

  export type $OauthApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OauthApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      oauthaccesstokens: Prisma.$OauthAccessTokenPayload<ExtArgs>[]
      oauthconsents: Prisma.$OauthConsentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      icon: string | null
      metadata: string | null
      clientId: string | null
      clientSecret: string | null
      redirectURLs: string | null
      type: string | null
      disabled: boolean | null
      userId: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["oauthApplication"]>
    composites: {}
  }

  type OauthApplicationGetPayload<S extends boolean | null | undefined | OauthApplicationDefaultArgs> = $Result.GetResult<Prisma.$OauthApplicationPayload, S>

  type OauthApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OauthApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OauthApplicationCountAggregateInputType | true
    }

  export interface OauthApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OauthApplication'], meta: { name: 'OauthApplication' } }
    /**
     * Find zero or one OauthApplication that matches the filter.
     * @param {OauthApplicationFindUniqueArgs} args - Arguments to find a OauthApplication
     * @example
     * // Get one OauthApplication
     * const oauthApplication = await prisma.oauthApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OauthApplicationFindUniqueArgs>(args: SelectSubset<T, OauthApplicationFindUniqueArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OauthApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OauthApplicationFindUniqueOrThrowArgs} args - Arguments to find a OauthApplication
     * @example
     * // Get one OauthApplication
     * const oauthApplication = await prisma.oauthApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OauthApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, OauthApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OauthApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthApplicationFindFirstArgs} args - Arguments to find a OauthApplication
     * @example
     * // Get one OauthApplication
     * const oauthApplication = await prisma.oauthApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OauthApplicationFindFirstArgs>(args?: SelectSubset<T, OauthApplicationFindFirstArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OauthApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthApplicationFindFirstOrThrowArgs} args - Arguments to find a OauthApplication
     * @example
     * // Get one OauthApplication
     * const oauthApplication = await prisma.oauthApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OauthApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, OauthApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OauthApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OauthApplications
     * const oauthApplications = await prisma.oauthApplication.findMany()
     * 
     * // Get first 10 OauthApplications
     * const oauthApplications = await prisma.oauthApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oauthApplicationWithIdOnly = await prisma.oauthApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OauthApplicationFindManyArgs>(args?: SelectSubset<T, OauthApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OauthApplication.
     * @param {OauthApplicationCreateArgs} args - Arguments to create a OauthApplication.
     * @example
     * // Create one OauthApplication
     * const OauthApplication = await prisma.oauthApplication.create({
     *   data: {
     *     // ... data to create a OauthApplication
     *   }
     * })
     * 
     */
    create<T extends OauthApplicationCreateArgs>(args: SelectSubset<T, OauthApplicationCreateArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OauthApplications.
     * @param {OauthApplicationCreateManyArgs} args - Arguments to create many OauthApplications.
     * @example
     * // Create many OauthApplications
     * const oauthApplication = await prisma.oauthApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OauthApplicationCreateManyArgs>(args?: SelectSubset<T, OauthApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OauthApplications and returns the data saved in the database.
     * @param {OauthApplicationCreateManyAndReturnArgs} args - Arguments to create many OauthApplications.
     * @example
     * // Create many OauthApplications
     * const oauthApplication = await prisma.oauthApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OauthApplications and only return the `id`
     * const oauthApplicationWithIdOnly = await prisma.oauthApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OauthApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, OauthApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OauthApplication.
     * @param {OauthApplicationDeleteArgs} args - Arguments to delete one OauthApplication.
     * @example
     * // Delete one OauthApplication
     * const OauthApplication = await prisma.oauthApplication.delete({
     *   where: {
     *     // ... filter to delete one OauthApplication
     *   }
     * })
     * 
     */
    delete<T extends OauthApplicationDeleteArgs>(args: SelectSubset<T, OauthApplicationDeleteArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OauthApplication.
     * @param {OauthApplicationUpdateArgs} args - Arguments to update one OauthApplication.
     * @example
     * // Update one OauthApplication
     * const oauthApplication = await prisma.oauthApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OauthApplicationUpdateArgs>(args: SelectSubset<T, OauthApplicationUpdateArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OauthApplications.
     * @param {OauthApplicationDeleteManyArgs} args - Arguments to filter OauthApplications to delete.
     * @example
     * // Delete a few OauthApplications
     * const { count } = await prisma.oauthApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OauthApplicationDeleteManyArgs>(args?: SelectSubset<T, OauthApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OauthApplications
     * const oauthApplication = await prisma.oauthApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OauthApplicationUpdateManyArgs>(args: SelectSubset<T, OauthApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthApplications and returns the data updated in the database.
     * @param {OauthApplicationUpdateManyAndReturnArgs} args - Arguments to update many OauthApplications.
     * @example
     * // Update many OauthApplications
     * const oauthApplication = await prisma.oauthApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OauthApplications and only return the `id`
     * const oauthApplicationWithIdOnly = await prisma.oauthApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OauthApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, OauthApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OauthApplication.
     * @param {OauthApplicationUpsertArgs} args - Arguments to update or create a OauthApplication.
     * @example
     * // Update or create a OauthApplication
     * const oauthApplication = await prisma.oauthApplication.upsert({
     *   create: {
     *     // ... data to create a OauthApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OauthApplication we want to update
     *   }
     * })
     */
    upsert<T extends OauthApplicationUpsertArgs>(args: SelectSubset<T, OauthApplicationUpsertArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OauthApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthApplicationCountArgs} args - Arguments to filter OauthApplications to count.
     * @example
     * // Count the number of OauthApplications
     * const count = await prisma.oauthApplication.count({
     *   where: {
     *     // ... the filter for the OauthApplications we want to count
     *   }
     * })
    **/
    count<T extends OauthApplicationCountArgs>(
      args?: Subset<T, OauthApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OauthApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OauthApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OauthApplicationAggregateArgs>(args: Subset<T, OauthApplicationAggregateArgs>): Prisma.PrismaPromise<GetOauthApplicationAggregateType<T>>

    /**
     * Group by OauthApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OauthApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OauthApplicationGroupByArgs['orderBy'] }
        : { orderBy?: OauthApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OauthApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OauthApplication model
   */
  readonly fields: OauthApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OauthApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OauthApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends OauthApplication$userArgs<ExtArgs> = {}>(args?: Subset<T, OauthApplication$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    oauthaccesstokens<T extends OauthApplication$oauthaccesstokensArgs<ExtArgs> = {}>(args?: Subset<T, OauthApplication$oauthaccesstokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthconsents<T extends OauthApplication$oauthconsentsArgs<ExtArgs> = {}>(args?: Subset<T, OauthApplication$oauthconsentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OauthApplication model
   */
  interface OauthApplicationFieldRefs {
    readonly id: FieldRef<"OauthApplication", 'String'>
    readonly name: FieldRef<"OauthApplication", 'String'>
    readonly icon: FieldRef<"OauthApplication", 'String'>
    readonly metadata: FieldRef<"OauthApplication", 'String'>
    readonly clientId: FieldRef<"OauthApplication", 'String'>
    readonly clientSecret: FieldRef<"OauthApplication", 'String'>
    readonly redirectURLs: FieldRef<"OauthApplication", 'String'>
    readonly type: FieldRef<"OauthApplication", 'String'>
    readonly disabled: FieldRef<"OauthApplication", 'Boolean'>
    readonly userId: FieldRef<"OauthApplication", 'String'>
    readonly createdAt: FieldRef<"OauthApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"OauthApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OauthApplication findUnique
   */
  export type OauthApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * Filter, which OauthApplication to fetch.
     */
    where: OauthApplicationWhereUniqueInput
  }

  /**
   * OauthApplication findUniqueOrThrow
   */
  export type OauthApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * Filter, which OauthApplication to fetch.
     */
    where: OauthApplicationWhereUniqueInput
  }

  /**
   * OauthApplication findFirst
   */
  export type OauthApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * Filter, which OauthApplication to fetch.
     */
    where?: OauthApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthApplications to fetch.
     */
    orderBy?: OauthApplicationOrderByWithRelationInput | OauthApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthApplications.
     */
    cursor?: OauthApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthApplications.
     */
    distinct?: OauthApplicationScalarFieldEnum | OauthApplicationScalarFieldEnum[]
  }

  /**
   * OauthApplication findFirstOrThrow
   */
  export type OauthApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * Filter, which OauthApplication to fetch.
     */
    where?: OauthApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthApplications to fetch.
     */
    orderBy?: OauthApplicationOrderByWithRelationInput | OauthApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthApplications.
     */
    cursor?: OauthApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthApplications.
     */
    distinct?: OauthApplicationScalarFieldEnum | OauthApplicationScalarFieldEnum[]
  }

  /**
   * OauthApplication findMany
   */
  export type OauthApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * Filter, which OauthApplications to fetch.
     */
    where?: OauthApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthApplications to fetch.
     */
    orderBy?: OauthApplicationOrderByWithRelationInput | OauthApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OauthApplications.
     */
    cursor?: OauthApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthApplications.
     */
    skip?: number
    distinct?: OauthApplicationScalarFieldEnum | OauthApplicationScalarFieldEnum[]
  }

  /**
   * OauthApplication create
   */
  export type OauthApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a OauthApplication.
     */
    data: XOR<OauthApplicationCreateInput, OauthApplicationUncheckedCreateInput>
  }

  /**
   * OauthApplication createMany
   */
  export type OauthApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OauthApplications.
     */
    data: OauthApplicationCreateManyInput | OauthApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OauthApplication createManyAndReturn
   */
  export type OauthApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many OauthApplications.
     */
    data: OauthApplicationCreateManyInput | OauthApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OauthApplication update
   */
  export type OauthApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a OauthApplication.
     */
    data: XOR<OauthApplicationUpdateInput, OauthApplicationUncheckedUpdateInput>
    /**
     * Choose, which OauthApplication to update.
     */
    where: OauthApplicationWhereUniqueInput
  }

  /**
   * OauthApplication updateMany
   */
  export type OauthApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OauthApplications.
     */
    data: XOR<OauthApplicationUpdateManyMutationInput, OauthApplicationUncheckedUpdateManyInput>
    /**
     * Filter which OauthApplications to update
     */
    where?: OauthApplicationWhereInput
    /**
     * Limit how many OauthApplications to update.
     */
    limit?: number
  }

  /**
   * OauthApplication updateManyAndReturn
   */
  export type OauthApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * The data used to update OauthApplications.
     */
    data: XOR<OauthApplicationUpdateManyMutationInput, OauthApplicationUncheckedUpdateManyInput>
    /**
     * Filter which OauthApplications to update
     */
    where?: OauthApplicationWhereInput
    /**
     * Limit how many OauthApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OauthApplication upsert
   */
  export type OauthApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the OauthApplication to update in case it exists.
     */
    where: OauthApplicationWhereUniqueInput
    /**
     * In case the OauthApplication found by the `where` argument doesn't exist, create a new OauthApplication with this data.
     */
    create: XOR<OauthApplicationCreateInput, OauthApplicationUncheckedCreateInput>
    /**
     * In case the OauthApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OauthApplicationUpdateInput, OauthApplicationUncheckedUpdateInput>
  }

  /**
   * OauthApplication delete
   */
  export type OauthApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    /**
     * Filter which OauthApplication to delete.
     */
    where: OauthApplicationWhereUniqueInput
  }

  /**
   * OauthApplication deleteMany
   */
  export type OauthApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthApplications to delete
     */
    where?: OauthApplicationWhereInput
    /**
     * Limit how many OauthApplications to delete.
     */
    limit?: number
  }

  /**
   * OauthApplication.user
   */
  export type OauthApplication$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OauthApplication.oauthaccesstokens
   */
  export type OauthApplication$oauthaccesstokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    where?: OauthAccessTokenWhereInput
    orderBy?: OauthAccessTokenOrderByWithRelationInput | OauthAccessTokenOrderByWithRelationInput[]
    cursor?: OauthAccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthAccessTokenScalarFieldEnum | OauthAccessTokenScalarFieldEnum[]
  }

  /**
   * OauthApplication.oauthconsents
   */
  export type OauthApplication$oauthconsentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    where?: OauthConsentWhereInput
    orderBy?: OauthConsentOrderByWithRelationInput | OauthConsentOrderByWithRelationInput[]
    cursor?: OauthConsentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthConsentScalarFieldEnum | OauthConsentScalarFieldEnum[]
  }

  /**
   * OauthApplication without action
   */
  export type OauthApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
  }


  /**
   * Model OauthAccessToken
   */

  export type AggregateOauthAccessToken = {
    _count: OauthAccessTokenCountAggregateOutputType | null
    _min: OauthAccessTokenMinAggregateOutputType | null
    _max: OauthAccessTokenMaxAggregateOutputType | null
  }

  export type OauthAccessTokenMinAggregateOutputType = {
    id: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    clientId: string | null
    userId: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OauthAccessTokenMaxAggregateOutputType = {
    id: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    clientId: string | null
    userId: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OauthAccessTokenCountAggregateOutputType = {
    id: number
    accessToken: number
    refreshToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    clientId: number
    userId: number
    scopes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OauthAccessTokenMinAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    clientId?: true
    userId?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OauthAccessTokenMaxAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    clientId?: true
    userId?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OauthAccessTokenCountAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    clientId?: true
    userId?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OauthAccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthAccessToken to aggregate.
     */
    where?: OauthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessTokens to fetch.
     */
    orderBy?: OauthAccessTokenOrderByWithRelationInput | OauthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OauthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OauthAccessTokens
    **/
    _count?: true | OauthAccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OauthAccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OauthAccessTokenMaxAggregateInputType
  }

  export type GetOauthAccessTokenAggregateType<T extends OauthAccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOauthAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauthAccessToken[P]>
      : GetScalarType<T[P], AggregateOauthAccessToken[P]>
  }




  export type OauthAccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthAccessTokenWhereInput
    orderBy?: OauthAccessTokenOrderByWithAggregationInput | OauthAccessTokenOrderByWithAggregationInput[]
    by: OauthAccessTokenScalarFieldEnum[] | OauthAccessTokenScalarFieldEnum
    having?: OauthAccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OauthAccessTokenCountAggregateInputType | true
    _min?: OauthAccessTokenMinAggregateInputType
    _max?: OauthAccessTokenMaxAggregateInputType
  }

  export type OauthAccessTokenGroupByOutputType = {
    id: string
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    clientId: string | null
    userId: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: OauthAccessTokenCountAggregateOutputType | null
    _min: OauthAccessTokenMinAggregateOutputType | null
    _max: OauthAccessTokenMaxAggregateOutputType | null
  }

  type GetOauthAccessTokenGroupByPayload<T extends OauthAccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OauthAccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OauthAccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OauthAccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OauthAccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type OauthAccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    oauthapplication?: boolean | OauthAccessToken$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthAccessToken$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthAccessToken"]>

  export type OauthAccessTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    oauthapplication?: boolean | OauthAccessToken$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthAccessToken$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthAccessToken"]>

  export type OauthAccessTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    oauthapplication?: boolean | OauthAccessToken$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthAccessToken$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthAccessToken"]>

  export type OauthAccessTokenSelectScalar = {
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OauthAccessTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessToken" | "refreshToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "clientId" | "userId" | "scopes" | "createdAt" | "updatedAt", ExtArgs["result"]["oauthAccessToken"]>
  export type OauthAccessTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthapplication?: boolean | OauthAccessToken$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthAccessToken$userArgs<ExtArgs>
  }
  export type OauthAccessTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthapplication?: boolean | OauthAccessToken$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthAccessToken$userArgs<ExtArgs>
  }
  export type OauthAccessTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthapplication?: boolean | OauthAccessToken$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthAccessToken$userArgs<ExtArgs>
  }

  export type $OauthAccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OauthAccessToken"
    objects: {
      oauthapplication: Prisma.$OauthApplicationPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accessToken: string | null
      refreshToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      clientId: string | null
      userId: string | null
      scopes: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["oauthAccessToken"]>
    composites: {}
  }

  type OauthAccessTokenGetPayload<S extends boolean | null | undefined | OauthAccessTokenDefaultArgs> = $Result.GetResult<Prisma.$OauthAccessTokenPayload, S>

  type OauthAccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OauthAccessTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OauthAccessTokenCountAggregateInputType | true
    }

  export interface OauthAccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OauthAccessToken'], meta: { name: 'OauthAccessToken' } }
    /**
     * Find zero or one OauthAccessToken that matches the filter.
     * @param {OauthAccessTokenFindUniqueArgs} args - Arguments to find a OauthAccessToken
     * @example
     * // Get one OauthAccessToken
     * const oauthAccessToken = await prisma.oauthAccessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OauthAccessTokenFindUniqueArgs>(args: SelectSubset<T, OauthAccessTokenFindUniqueArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OauthAccessToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OauthAccessTokenFindUniqueOrThrowArgs} args - Arguments to find a OauthAccessToken
     * @example
     * // Get one OauthAccessToken
     * const oauthAccessToken = await prisma.oauthAccessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OauthAccessTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, OauthAccessTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OauthAccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessTokenFindFirstArgs} args - Arguments to find a OauthAccessToken
     * @example
     * // Get one OauthAccessToken
     * const oauthAccessToken = await prisma.oauthAccessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OauthAccessTokenFindFirstArgs>(args?: SelectSubset<T, OauthAccessTokenFindFirstArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OauthAccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessTokenFindFirstOrThrowArgs} args - Arguments to find a OauthAccessToken
     * @example
     * // Get one OauthAccessToken
     * const oauthAccessToken = await prisma.oauthAccessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OauthAccessTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, OauthAccessTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OauthAccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OauthAccessTokens
     * const oauthAccessTokens = await prisma.oauthAccessToken.findMany()
     * 
     * // Get first 10 OauthAccessTokens
     * const oauthAccessTokens = await prisma.oauthAccessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oauthAccessTokenWithIdOnly = await prisma.oauthAccessToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OauthAccessTokenFindManyArgs>(args?: SelectSubset<T, OauthAccessTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OauthAccessToken.
     * @param {OauthAccessTokenCreateArgs} args - Arguments to create a OauthAccessToken.
     * @example
     * // Create one OauthAccessToken
     * const OauthAccessToken = await prisma.oauthAccessToken.create({
     *   data: {
     *     // ... data to create a OauthAccessToken
     *   }
     * })
     * 
     */
    create<T extends OauthAccessTokenCreateArgs>(args: SelectSubset<T, OauthAccessTokenCreateArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OauthAccessTokens.
     * @param {OauthAccessTokenCreateManyArgs} args - Arguments to create many OauthAccessTokens.
     * @example
     * // Create many OauthAccessTokens
     * const oauthAccessToken = await prisma.oauthAccessToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OauthAccessTokenCreateManyArgs>(args?: SelectSubset<T, OauthAccessTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OauthAccessTokens and returns the data saved in the database.
     * @param {OauthAccessTokenCreateManyAndReturnArgs} args - Arguments to create many OauthAccessTokens.
     * @example
     * // Create many OauthAccessTokens
     * const oauthAccessToken = await prisma.oauthAccessToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OauthAccessTokens and only return the `id`
     * const oauthAccessTokenWithIdOnly = await prisma.oauthAccessToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OauthAccessTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, OauthAccessTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OauthAccessToken.
     * @param {OauthAccessTokenDeleteArgs} args - Arguments to delete one OauthAccessToken.
     * @example
     * // Delete one OauthAccessToken
     * const OauthAccessToken = await prisma.oauthAccessToken.delete({
     *   where: {
     *     // ... filter to delete one OauthAccessToken
     *   }
     * })
     * 
     */
    delete<T extends OauthAccessTokenDeleteArgs>(args: SelectSubset<T, OauthAccessTokenDeleteArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OauthAccessToken.
     * @param {OauthAccessTokenUpdateArgs} args - Arguments to update one OauthAccessToken.
     * @example
     * // Update one OauthAccessToken
     * const oauthAccessToken = await prisma.oauthAccessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OauthAccessTokenUpdateArgs>(args: SelectSubset<T, OauthAccessTokenUpdateArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OauthAccessTokens.
     * @param {OauthAccessTokenDeleteManyArgs} args - Arguments to filter OauthAccessTokens to delete.
     * @example
     * // Delete a few OauthAccessTokens
     * const { count } = await prisma.oauthAccessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OauthAccessTokenDeleteManyArgs>(args?: SelectSubset<T, OauthAccessTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OauthAccessTokens
     * const oauthAccessToken = await prisma.oauthAccessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OauthAccessTokenUpdateManyArgs>(args: SelectSubset<T, OauthAccessTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthAccessTokens and returns the data updated in the database.
     * @param {OauthAccessTokenUpdateManyAndReturnArgs} args - Arguments to update many OauthAccessTokens.
     * @example
     * // Update many OauthAccessTokens
     * const oauthAccessToken = await prisma.oauthAccessToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OauthAccessTokens and only return the `id`
     * const oauthAccessTokenWithIdOnly = await prisma.oauthAccessToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OauthAccessTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, OauthAccessTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OauthAccessToken.
     * @param {OauthAccessTokenUpsertArgs} args - Arguments to update or create a OauthAccessToken.
     * @example
     * // Update or create a OauthAccessToken
     * const oauthAccessToken = await prisma.oauthAccessToken.upsert({
     *   create: {
     *     // ... data to create a OauthAccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OauthAccessToken we want to update
     *   }
     * })
     */
    upsert<T extends OauthAccessTokenUpsertArgs>(args: SelectSubset<T, OauthAccessTokenUpsertArgs<ExtArgs>>): Prisma__OauthAccessTokenClient<$Result.GetResult<Prisma.$OauthAccessTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OauthAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessTokenCountArgs} args - Arguments to filter OauthAccessTokens to count.
     * @example
     * // Count the number of OauthAccessTokens
     * const count = await prisma.oauthAccessToken.count({
     *   where: {
     *     // ... the filter for the OauthAccessTokens we want to count
     *   }
     * })
    **/
    count<T extends OauthAccessTokenCountArgs>(
      args?: Subset<T, OauthAccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OauthAccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OauthAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OauthAccessTokenAggregateArgs>(args: Subset<T, OauthAccessTokenAggregateArgs>): Prisma.PrismaPromise<GetOauthAccessTokenAggregateType<T>>

    /**
     * Group by OauthAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccessTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OauthAccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OauthAccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: OauthAccessTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OauthAccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OauthAccessToken model
   */
  readonly fields: OauthAccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OauthAccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OauthAccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oauthapplication<T extends OauthAccessToken$oauthapplicationArgs<ExtArgs> = {}>(args?: Subset<T, OauthAccessToken$oauthapplicationArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends OauthAccessToken$userArgs<ExtArgs> = {}>(args?: Subset<T, OauthAccessToken$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OauthAccessToken model
   */
  interface OauthAccessTokenFieldRefs {
    readonly id: FieldRef<"OauthAccessToken", 'String'>
    readonly accessToken: FieldRef<"OauthAccessToken", 'String'>
    readonly refreshToken: FieldRef<"OauthAccessToken", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"OauthAccessToken", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"OauthAccessToken", 'DateTime'>
    readonly clientId: FieldRef<"OauthAccessToken", 'String'>
    readonly userId: FieldRef<"OauthAccessToken", 'String'>
    readonly scopes: FieldRef<"OauthAccessToken", 'String'>
    readonly createdAt: FieldRef<"OauthAccessToken", 'DateTime'>
    readonly updatedAt: FieldRef<"OauthAccessToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OauthAccessToken findUnique
   */
  export type OauthAccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccessToken to fetch.
     */
    where: OauthAccessTokenWhereUniqueInput
  }

  /**
   * OauthAccessToken findUniqueOrThrow
   */
  export type OauthAccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccessToken to fetch.
     */
    where: OauthAccessTokenWhereUniqueInput
  }

  /**
   * OauthAccessToken findFirst
   */
  export type OauthAccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccessToken to fetch.
     */
    where?: OauthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessTokens to fetch.
     */
    orderBy?: OauthAccessTokenOrderByWithRelationInput | OauthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccessTokens.
     */
    cursor?: OauthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccessTokens.
     */
    distinct?: OauthAccessTokenScalarFieldEnum | OauthAccessTokenScalarFieldEnum[]
  }

  /**
   * OauthAccessToken findFirstOrThrow
   */
  export type OauthAccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccessToken to fetch.
     */
    where?: OauthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessTokens to fetch.
     */
    orderBy?: OauthAccessTokenOrderByWithRelationInput | OauthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccessTokens.
     */
    cursor?: OauthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccessTokens.
     */
    distinct?: OauthAccessTokenScalarFieldEnum | OauthAccessTokenScalarFieldEnum[]
  }

  /**
   * OauthAccessToken findMany
   */
  export type OauthAccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccessTokens to fetch.
     */
    where?: OauthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccessTokens to fetch.
     */
    orderBy?: OauthAccessTokenOrderByWithRelationInput | OauthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OauthAccessTokens.
     */
    cursor?: OauthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccessTokens.
     */
    skip?: number
    distinct?: OauthAccessTokenScalarFieldEnum | OauthAccessTokenScalarFieldEnum[]
  }

  /**
   * OauthAccessToken create
   */
  export type OauthAccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a OauthAccessToken.
     */
    data: XOR<OauthAccessTokenCreateInput, OauthAccessTokenUncheckedCreateInput>
  }

  /**
   * OauthAccessToken createMany
   */
  export type OauthAccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OauthAccessTokens.
     */
    data: OauthAccessTokenCreateManyInput | OauthAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OauthAccessToken createManyAndReturn
   */
  export type OauthAccessTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * The data used to create many OauthAccessTokens.
     */
    data: OauthAccessTokenCreateManyInput | OauthAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OauthAccessToken update
   */
  export type OauthAccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a OauthAccessToken.
     */
    data: XOR<OauthAccessTokenUpdateInput, OauthAccessTokenUncheckedUpdateInput>
    /**
     * Choose, which OauthAccessToken to update.
     */
    where: OauthAccessTokenWhereUniqueInput
  }

  /**
   * OauthAccessToken updateMany
   */
  export type OauthAccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OauthAccessTokens.
     */
    data: XOR<OauthAccessTokenUpdateManyMutationInput, OauthAccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which OauthAccessTokens to update
     */
    where?: OauthAccessTokenWhereInput
    /**
     * Limit how many OauthAccessTokens to update.
     */
    limit?: number
  }

  /**
   * OauthAccessToken updateManyAndReturn
   */
  export type OauthAccessTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * The data used to update OauthAccessTokens.
     */
    data: XOR<OauthAccessTokenUpdateManyMutationInput, OauthAccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which OauthAccessTokens to update
     */
    where?: OauthAccessTokenWhereInput
    /**
     * Limit how many OauthAccessTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OauthAccessToken upsert
   */
  export type OauthAccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the OauthAccessToken to update in case it exists.
     */
    where: OauthAccessTokenWhereUniqueInput
    /**
     * In case the OauthAccessToken found by the `where` argument doesn't exist, create a new OauthAccessToken with this data.
     */
    create: XOR<OauthAccessTokenCreateInput, OauthAccessTokenUncheckedCreateInput>
    /**
     * In case the OauthAccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OauthAccessTokenUpdateInput, OauthAccessTokenUncheckedUpdateInput>
  }

  /**
   * OauthAccessToken delete
   */
  export type OauthAccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter which OauthAccessToken to delete.
     */
    where: OauthAccessTokenWhereUniqueInput
  }

  /**
   * OauthAccessToken deleteMany
   */
  export type OauthAccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthAccessTokens to delete
     */
    where?: OauthAccessTokenWhereInput
    /**
     * Limit how many OauthAccessTokens to delete.
     */
    limit?: number
  }

  /**
   * OauthAccessToken.oauthapplication
   */
  export type OauthAccessToken$oauthapplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    where?: OauthApplicationWhereInput
  }

  /**
   * OauthAccessToken.user
   */
  export type OauthAccessToken$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OauthAccessToken without action
   */
  export type OauthAccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccessToken
     */
    select?: OauthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthAccessToken
     */
    omit?: OauthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccessTokenInclude<ExtArgs> | null
  }


  /**
   * Model OauthConsent
   */

  export type AggregateOauthConsent = {
    _count: OauthConsentCountAggregateOutputType | null
    _min: OauthConsentMinAggregateOutputType | null
    _max: OauthConsentMaxAggregateOutputType | null
  }

  export type OauthConsentMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    userId: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    consentGiven: boolean | null
  }

  export type OauthConsentMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    userId: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    consentGiven: boolean | null
  }

  export type OauthConsentCountAggregateOutputType = {
    id: number
    clientId: number
    userId: number
    scopes: number
    createdAt: number
    updatedAt: number
    consentGiven: number
    _all: number
  }


  export type OauthConsentMinAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
    consentGiven?: true
  }

  export type OauthConsentMaxAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
    consentGiven?: true
  }

  export type OauthConsentCountAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
    scopes?: true
    createdAt?: true
    updatedAt?: true
    consentGiven?: true
    _all?: true
  }

  export type OauthConsentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthConsent to aggregate.
     */
    where?: OauthConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthConsents to fetch.
     */
    orderBy?: OauthConsentOrderByWithRelationInput | OauthConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OauthConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OauthConsents
    **/
    _count?: true | OauthConsentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OauthConsentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OauthConsentMaxAggregateInputType
  }

  export type GetOauthConsentAggregateType<T extends OauthConsentAggregateArgs> = {
        [P in keyof T & keyof AggregateOauthConsent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauthConsent[P]>
      : GetScalarType<T[P], AggregateOauthConsent[P]>
  }




  export type OauthConsentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthConsentWhereInput
    orderBy?: OauthConsentOrderByWithAggregationInput | OauthConsentOrderByWithAggregationInput[]
    by: OauthConsentScalarFieldEnum[] | OauthConsentScalarFieldEnum
    having?: OauthConsentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OauthConsentCountAggregateInputType | true
    _min?: OauthConsentMinAggregateInputType
    _max?: OauthConsentMaxAggregateInputType
  }

  export type OauthConsentGroupByOutputType = {
    id: string
    clientId: string | null
    userId: string | null
    scopes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    consentGiven: boolean | null
    _count: OauthConsentCountAggregateOutputType | null
    _min: OauthConsentMinAggregateOutputType | null
    _max: OauthConsentMaxAggregateOutputType | null
  }

  type GetOauthConsentGroupByPayload<T extends OauthConsentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OauthConsentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OauthConsentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OauthConsentGroupByOutputType[P]>
            : GetScalarType<T[P], OauthConsentGroupByOutputType[P]>
        }
      >
    >


  export type OauthConsentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consentGiven?: boolean
    oauthapplication?: boolean | OauthConsent$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthConsent$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthConsent"]>

  export type OauthConsentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consentGiven?: boolean
    oauthapplication?: boolean | OauthConsent$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthConsent$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthConsent"]>

  export type OauthConsentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consentGiven?: boolean
    oauthapplication?: boolean | OauthConsent$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthConsent$userArgs<ExtArgs>
  }, ExtArgs["result"]["oauthConsent"]>

  export type OauthConsentSelectScalar = {
    id?: boolean
    clientId?: boolean
    userId?: boolean
    scopes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consentGiven?: boolean
  }

  export type OauthConsentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "userId" | "scopes" | "createdAt" | "updatedAt" | "consentGiven", ExtArgs["result"]["oauthConsent"]>
  export type OauthConsentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthapplication?: boolean | OauthConsent$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthConsent$userArgs<ExtArgs>
  }
  export type OauthConsentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthapplication?: boolean | OauthConsent$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthConsent$userArgs<ExtArgs>
  }
  export type OauthConsentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthapplication?: boolean | OauthConsent$oauthapplicationArgs<ExtArgs>
    user?: boolean | OauthConsent$userArgs<ExtArgs>
  }

  export type $OauthConsentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OauthConsent"
    objects: {
      oauthapplication: Prisma.$OauthApplicationPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string | null
      userId: string | null
      scopes: string | null
      createdAt: Date | null
      updatedAt: Date | null
      consentGiven: boolean | null
    }, ExtArgs["result"]["oauthConsent"]>
    composites: {}
  }

  type OauthConsentGetPayload<S extends boolean | null | undefined | OauthConsentDefaultArgs> = $Result.GetResult<Prisma.$OauthConsentPayload, S>

  type OauthConsentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OauthConsentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OauthConsentCountAggregateInputType | true
    }

  export interface OauthConsentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OauthConsent'], meta: { name: 'OauthConsent' } }
    /**
     * Find zero or one OauthConsent that matches the filter.
     * @param {OauthConsentFindUniqueArgs} args - Arguments to find a OauthConsent
     * @example
     * // Get one OauthConsent
     * const oauthConsent = await prisma.oauthConsent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OauthConsentFindUniqueArgs>(args: SelectSubset<T, OauthConsentFindUniqueArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OauthConsent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OauthConsentFindUniqueOrThrowArgs} args - Arguments to find a OauthConsent
     * @example
     * // Get one OauthConsent
     * const oauthConsent = await prisma.oauthConsent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OauthConsentFindUniqueOrThrowArgs>(args: SelectSubset<T, OauthConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OauthConsent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthConsentFindFirstArgs} args - Arguments to find a OauthConsent
     * @example
     * // Get one OauthConsent
     * const oauthConsent = await prisma.oauthConsent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OauthConsentFindFirstArgs>(args?: SelectSubset<T, OauthConsentFindFirstArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OauthConsent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthConsentFindFirstOrThrowArgs} args - Arguments to find a OauthConsent
     * @example
     * // Get one OauthConsent
     * const oauthConsent = await prisma.oauthConsent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OauthConsentFindFirstOrThrowArgs>(args?: SelectSubset<T, OauthConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OauthConsents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthConsentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OauthConsents
     * const oauthConsents = await prisma.oauthConsent.findMany()
     * 
     * // Get first 10 OauthConsents
     * const oauthConsents = await prisma.oauthConsent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oauthConsentWithIdOnly = await prisma.oauthConsent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OauthConsentFindManyArgs>(args?: SelectSubset<T, OauthConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OauthConsent.
     * @param {OauthConsentCreateArgs} args - Arguments to create a OauthConsent.
     * @example
     * // Create one OauthConsent
     * const OauthConsent = await prisma.oauthConsent.create({
     *   data: {
     *     // ... data to create a OauthConsent
     *   }
     * })
     * 
     */
    create<T extends OauthConsentCreateArgs>(args: SelectSubset<T, OauthConsentCreateArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OauthConsents.
     * @param {OauthConsentCreateManyArgs} args - Arguments to create many OauthConsents.
     * @example
     * // Create many OauthConsents
     * const oauthConsent = await prisma.oauthConsent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OauthConsentCreateManyArgs>(args?: SelectSubset<T, OauthConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OauthConsents and returns the data saved in the database.
     * @param {OauthConsentCreateManyAndReturnArgs} args - Arguments to create many OauthConsents.
     * @example
     * // Create many OauthConsents
     * const oauthConsent = await prisma.oauthConsent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OauthConsents and only return the `id`
     * const oauthConsentWithIdOnly = await prisma.oauthConsent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OauthConsentCreateManyAndReturnArgs>(args?: SelectSubset<T, OauthConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OauthConsent.
     * @param {OauthConsentDeleteArgs} args - Arguments to delete one OauthConsent.
     * @example
     * // Delete one OauthConsent
     * const OauthConsent = await prisma.oauthConsent.delete({
     *   where: {
     *     // ... filter to delete one OauthConsent
     *   }
     * })
     * 
     */
    delete<T extends OauthConsentDeleteArgs>(args: SelectSubset<T, OauthConsentDeleteArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OauthConsent.
     * @param {OauthConsentUpdateArgs} args - Arguments to update one OauthConsent.
     * @example
     * // Update one OauthConsent
     * const oauthConsent = await prisma.oauthConsent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OauthConsentUpdateArgs>(args: SelectSubset<T, OauthConsentUpdateArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OauthConsents.
     * @param {OauthConsentDeleteManyArgs} args - Arguments to filter OauthConsents to delete.
     * @example
     * // Delete a few OauthConsents
     * const { count } = await prisma.oauthConsent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OauthConsentDeleteManyArgs>(args?: SelectSubset<T, OauthConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthConsentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OauthConsents
     * const oauthConsent = await prisma.oauthConsent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OauthConsentUpdateManyArgs>(args: SelectSubset<T, OauthConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthConsents and returns the data updated in the database.
     * @param {OauthConsentUpdateManyAndReturnArgs} args - Arguments to update many OauthConsents.
     * @example
     * // Update many OauthConsents
     * const oauthConsent = await prisma.oauthConsent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OauthConsents and only return the `id`
     * const oauthConsentWithIdOnly = await prisma.oauthConsent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OauthConsentUpdateManyAndReturnArgs>(args: SelectSubset<T, OauthConsentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OauthConsent.
     * @param {OauthConsentUpsertArgs} args - Arguments to update or create a OauthConsent.
     * @example
     * // Update or create a OauthConsent
     * const oauthConsent = await prisma.oauthConsent.upsert({
     *   create: {
     *     // ... data to create a OauthConsent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OauthConsent we want to update
     *   }
     * })
     */
    upsert<T extends OauthConsentUpsertArgs>(args: SelectSubset<T, OauthConsentUpsertArgs<ExtArgs>>): Prisma__OauthConsentClient<$Result.GetResult<Prisma.$OauthConsentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OauthConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthConsentCountArgs} args - Arguments to filter OauthConsents to count.
     * @example
     * // Count the number of OauthConsents
     * const count = await prisma.oauthConsent.count({
     *   where: {
     *     // ... the filter for the OauthConsents we want to count
     *   }
     * })
    **/
    count<T extends OauthConsentCountArgs>(
      args?: Subset<T, OauthConsentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OauthConsentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OauthConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthConsentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OauthConsentAggregateArgs>(args: Subset<T, OauthConsentAggregateArgs>): Prisma.PrismaPromise<GetOauthConsentAggregateType<T>>

    /**
     * Group by OauthConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthConsentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OauthConsentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OauthConsentGroupByArgs['orderBy'] }
        : { orderBy?: OauthConsentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OauthConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OauthConsent model
   */
  readonly fields: OauthConsentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OauthConsent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OauthConsentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oauthapplication<T extends OauthConsent$oauthapplicationArgs<ExtArgs> = {}>(args?: Subset<T, OauthConsent$oauthapplicationArgs<ExtArgs>>): Prisma__OauthApplicationClient<$Result.GetResult<Prisma.$OauthApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends OauthConsent$userArgs<ExtArgs> = {}>(args?: Subset<T, OauthConsent$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OauthConsent model
   */
  interface OauthConsentFieldRefs {
    readonly id: FieldRef<"OauthConsent", 'String'>
    readonly clientId: FieldRef<"OauthConsent", 'String'>
    readonly userId: FieldRef<"OauthConsent", 'String'>
    readonly scopes: FieldRef<"OauthConsent", 'String'>
    readonly createdAt: FieldRef<"OauthConsent", 'DateTime'>
    readonly updatedAt: FieldRef<"OauthConsent", 'DateTime'>
    readonly consentGiven: FieldRef<"OauthConsent", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OauthConsent findUnique
   */
  export type OauthConsentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * Filter, which OauthConsent to fetch.
     */
    where: OauthConsentWhereUniqueInput
  }

  /**
   * OauthConsent findUniqueOrThrow
   */
  export type OauthConsentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * Filter, which OauthConsent to fetch.
     */
    where: OauthConsentWhereUniqueInput
  }

  /**
   * OauthConsent findFirst
   */
  export type OauthConsentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * Filter, which OauthConsent to fetch.
     */
    where?: OauthConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthConsents to fetch.
     */
    orderBy?: OauthConsentOrderByWithRelationInput | OauthConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthConsents.
     */
    cursor?: OauthConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthConsents.
     */
    distinct?: OauthConsentScalarFieldEnum | OauthConsentScalarFieldEnum[]
  }

  /**
   * OauthConsent findFirstOrThrow
   */
  export type OauthConsentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * Filter, which OauthConsent to fetch.
     */
    where?: OauthConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthConsents to fetch.
     */
    orderBy?: OauthConsentOrderByWithRelationInput | OauthConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthConsents.
     */
    cursor?: OauthConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthConsents.
     */
    distinct?: OauthConsentScalarFieldEnum | OauthConsentScalarFieldEnum[]
  }

  /**
   * OauthConsent findMany
   */
  export type OauthConsentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * Filter, which OauthConsents to fetch.
     */
    where?: OauthConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthConsents to fetch.
     */
    orderBy?: OauthConsentOrderByWithRelationInput | OauthConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OauthConsents.
     */
    cursor?: OauthConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthConsents.
     */
    skip?: number
    distinct?: OauthConsentScalarFieldEnum | OauthConsentScalarFieldEnum[]
  }

  /**
   * OauthConsent create
   */
  export type OauthConsentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * The data needed to create a OauthConsent.
     */
    data: XOR<OauthConsentCreateInput, OauthConsentUncheckedCreateInput>
  }

  /**
   * OauthConsent createMany
   */
  export type OauthConsentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OauthConsents.
     */
    data: OauthConsentCreateManyInput | OauthConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OauthConsent createManyAndReturn
   */
  export type OauthConsentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * The data used to create many OauthConsents.
     */
    data: OauthConsentCreateManyInput | OauthConsentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OauthConsent update
   */
  export type OauthConsentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * The data needed to update a OauthConsent.
     */
    data: XOR<OauthConsentUpdateInput, OauthConsentUncheckedUpdateInput>
    /**
     * Choose, which OauthConsent to update.
     */
    where: OauthConsentWhereUniqueInput
  }

  /**
   * OauthConsent updateMany
   */
  export type OauthConsentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OauthConsents.
     */
    data: XOR<OauthConsentUpdateManyMutationInput, OauthConsentUncheckedUpdateManyInput>
    /**
     * Filter which OauthConsents to update
     */
    where?: OauthConsentWhereInput
    /**
     * Limit how many OauthConsents to update.
     */
    limit?: number
  }

  /**
   * OauthConsent updateManyAndReturn
   */
  export type OauthConsentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * The data used to update OauthConsents.
     */
    data: XOR<OauthConsentUpdateManyMutationInput, OauthConsentUncheckedUpdateManyInput>
    /**
     * Filter which OauthConsents to update
     */
    where?: OauthConsentWhereInput
    /**
     * Limit how many OauthConsents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OauthConsent upsert
   */
  export type OauthConsentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * The filter to search for the OauthConsent to update in case it exists.
     */
    where: OauthConsentWhereUniqueInput
    /**
     * In case the OauthConsent found by the `where` argument doesn't exist, create a new OauthConsent with this data.
     */
    create: XOR<OauthConsentCreateInput, OauthConsentUncheckedCreateInput>
    /**
     * In case the OauthConsent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OauthConsentUpdateInput, OauthConsentUncheckedUpdateInput>
  }

  /**
   * OauthConsent delete
   */
  export type OauthConsentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
    /**
     * Filter which OauthConsent to delete.
     */
    where: OauthConsentWhereUniqueInput
  }

  /**
   * OauthConsent deleteMany
   */
  export type OauthConsentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthConsents to delete
     */
    where?: OauthConsentWhereInput
    /**
     * Limit how many OauthConsents to delete.
     */
    limit?: number
  }

  /**
   * OauthConsent.oauthapplication
   */
  export type OauthConsent$oauthapplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthApplication
     */
    select?: OauthApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthApplication
     */
    omit?: OauthApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthApplicationInclude<ExtArgs> | null
    where?: OauthApplicationWhereInput
  }

  /**
   * OauthConsent.user
   */
  export type OauthConsent$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OauthConsent without action
   */
  export type OauthConsentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthConsent
     */
    select?: OauthConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OauthConsent
     */
    omit?: OauthConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthConsentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    idToken: 'idToken',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const JwksScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    createdAt: 'createdAt'
  };

  export type JwksScalarFieldEnum = (typeof JwksScalarFieldEnum)[keyof typeof JwksScalarFieldEnum]


  export const OauthApplicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    metadata: 'metadata',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    redirectURLs: 'redirectURLs',
    type: 'type',
    disabled: 'disabled',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OauthApplicationScalarFieldEnum = (typeof OauthApplicationScalarFieldEnum)[keyof typeof OauthApplicationScalarFieldEnum]


  export const OauthAccessTokenScalarFieldEnum: {
    id: 'id',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    clientId: 'clientId',
    userId: 'userId',
    scopes: 'scopes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OauthAccessTokenScalarFieldEnum = (typeof OauthAccessTokenScalarFieldEnum)[keyof typeof OauthAccessTokenScalarFieldEnum]


  export const OauthConsentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    userId: 'userId',
    scopes: 'scopes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    consentGiven: 'consentGiven'
  };

  export type OauthConsentScalarFieldEnum = (typeof OauthConsentScalarFieldEnum)[keyof typeof OauthConsentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    oauthapplications?: OauthApplicationListRelationFilter
    oauthaccesstokens?: OauthAccessTokenListRelationFilter
    oauthconsents?: OauthConsentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    oauthapplications?: OauthApplicationOrderByRelationAggregateInput
    oauthaccesstokens?: OauthAccessTokenOrderByRelationAggregateInput
    oauthconsents?: OauthConsentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    oauthapplications?: OauthApplicationListRelationFilter
    oauthaccesstokens?: OauthAccessTokenListRelationFilter
    oauthconsents?: OauthConsentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type JwksWhereInput = {
    AND?: JwksWhereInput | JwksWhereInput[]
    OR?: JwksWhereInput[]
    NOT?: JwksWhereInput | JwksWhereInput[]
    id?: StringFilter<"Jwks"> | string
    publicKey?: StringFilter<"Jwks"> | string
    privateKey?: StringFilter<"Jwks"> | string
    createdAt?: DateTimeFilter<"Jwks"> | Date | string
  }

  export type JwksOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type JwksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JwksWhereInput | JwksWhereInput[]
    OR?: JwksWhereInput[]
    NOT?: JwksWhereInput | JwksWhereInput[]
    publicKey?: StringFilter<"Jwks"> | string
    privateKey?: StringFilter<"Jwks"> | string
    createdAt?: DateTimeFilter<"Jwks"> | Date | string
  }, "id">

  export type JwksOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
    _count?: JwksCountOrderByAggregateInput
    _max?: JwksMaxOrderByAggregateInput
    _min?: JwksMinOrderByAggregateInput
  }

  export type JwksScalarWhereWithAggregatesInput = {
    AND?: JwksScalarWhereWithAggregatesInput | JwksScalarWhereWithAggregatesInput[]
    OR?: JwksScalarWhereWithAggregatesInput[]
    NOT?: JwksScalarWhereWithAggregatesInput | JwksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jwks"> | string
    publicKey?: StringWithAggregatesFilter<"Jwks"> | string
    privateKey?: StringWithAggregatesFilter<"Jwks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Jwks"> | Date | string
  }

  export type OauthApplicationWhereInput = {
    AND?: OauthApplicationWhereInput | OauthApplicationWhereInput[]
    OR?: OauthApplicationWhereInput[]
    NOT?: OauthApplicationWhereInput | OauthApplicationWhereInput[]
    id?: StringFilter<"OauthApplication"> | string
    name?: StringNullableFilter<"OauthApplication"> | string | null
    icon?: StringNullableFilter<"OauthApplication"> | string | null
    metadata?: StringNullableFilter<"OauthApplication"> | string | null
    clientId?: StringNullableFilter<"OauthApplication"> | string | null
    clientSecret?: StringNullableFilter<"OauthApplication"> | string | null
    redirectURLs?: StringNullableFilter<"OauthApplication"> | string | null
    type?: StringNullableFilter<"OauthApplication"> | string | null
    disabled?: BoolNullableFilter<"OauthApplication"> | boolean | null
    userId?: StringNullableFilter<"OauthApplication"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthApplication"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthApplication"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    oauthaccesstokens?: OauthAccessTokenListRelationFilter
    oauthconsents?: OauthConsentListRelationFilter
  }

  export type OauthApplicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    clientSecret?: SortOrderInput | SortOrder
    redirectURLs?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    disabled?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    oauthaccesstokens?: OauthAccessTokenOrderByRelationAggregateInput
    oauthconsents?: OauthConsentOrderByRelationAggregateInput
  }

  export type OauthApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    AND?: OauthApplicationWhereInput | OauthApplicationWhereInput[]
    OR?: OauthApplicationWhereInput[]
    NOT?: OauthApplicationWhereInput | OauthApplicationWhereInput[]
    name?: StringNullableFilter<"OauthApplication"> | string | null
    icon?: StringNullableFilter<"OauthApplication"> | string | null
    metadata?: StringNullableFilter<"OauthApplication"> | string | null
    clientSecret?: StringNullableFilter<"OauthApplication"> | string | null
    redirectURLs?: StringNullableFilter<"OauthApplication"> | string | null
    type?: StringNullableFilter<"OauthApplication"> | string | null
    disabled?: BoolNullableFilter<"OauthApplication"> | boolean | null
    userId?: StringNullableFilter<"OauthApplication"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthApplication"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthApplication"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    oauthaccesstokens?: OauthAccessTokenListRelationFilter
    oauthconsents?: OauthConsentListRelationFilter
  }, "id" | "clientId">

  export type OauthApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    clientSecret?: SortOrderInput | SortOrder
    redirectURLs?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    disabled?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: OauthApplicationCountOrderByAggregateInput
    _max?: OauthApplicationMaxOrderByAggregateInput
    _min?: OauthApplicationMinOrderByAggregateInput
  }

  export type OauthApplicationScalarWhereWithAggregatesInput = {
    AND?: OauthApplicationScalarWhereWithAggregatesInput | OauthApplicationScalarWhereWithAggregatesInput[]
    OR?: OauthApplicationScalarWhereWithAggregatesInput[]
    NOT?: OauthApplicationScalarWhereWithAggregatesInput | OauthApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OauthApplication"> | string
    name?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    icon?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    clientSecret?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    redirectURLs?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    type?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    disabled?: BoolNullableWithAggregatesFilter<"OauthApplication"> | boolean | null
    userId?: StringNullableWithAggregatesFilter<"OauthApplication"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"OauthApplication"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"OauthApplication"> | Date | string | null
  }

  export type OauthAccessTokenWhereInput = {
    AND?: OauthAccessTokenWhereInput | OauthAccessTokenWhereInput[]
    OR?: OauthAccessTokenWhereInput[]
    NOT?: OauthAccessTokenWhereInput | OauthAccessTokenWhereInput[]
    id?: StringFilter<"OauthAccessToken"> | string
    accessToken?: StringNullableFilter<"OauthAccessToken"> | string | null
    refreshToken?: StringNullableFilter<"OauthAccessToken"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    clientId?: StringNullableFilter<"OauthAccessToken"> | string | null
    userId?: StringNullableFilter<"OauthAccessToken"> | string | null
    scopes?: StringNullableFilter<"OauthAccessToken"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    oauthapplication?: XOR<OauthApplicationNullableScalarRelationFilter, OauthApplicationWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type OauthAccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    oauthapplication?: OauthApplicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OauthAccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accessToken?: string
    refreshToken?: string
    AND?: OauthAccessTokenWhereInput | OauthAccessTokenWhereInput[]
    OR?: OauthAccessTokenWhereInput[]
    NOT?: OauthAccessTokenWhereInput | OauthAccessTokenWhereInput[]
    accessTokenExpiresAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    clientId?: StringNullableFilter<"OauthAccessToken"> | string | null
    userId?: StringNullableFilter<"OauthAccessToken"> | string | null
    scopes?: StringNullableFilter<"OauthAccessToken"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    oauthapplication?: XOR<OauthApplicationNullableScalarRelationFilter, OauthApplicationWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "accessToken" | "refreshToken">

  export type OauthAccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: OauthAccessTokenCountOrderByAggregateInput
    _max?: OauthAccessTokenMaxOrderByAggregateInput
    _min?: OauthAccessTokenMinOrderByAggregateInput
  }

  export type OauthAccessTokenScalarWhereWithAggregatesInput = {
    AND?: OauthAccessTokenScalarWhereWithAggregatesInput | OauthAccessTokenScalarWhereWithAggregatesInput[]
    OR?: OauthAccessTokenScalarWhereWithAggregatesInput[]
    NOT?: OauthAccessTokenScalarWhereWithAggregatesInput | OauthAccessTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OauthAccessToken"> | string
    accessToken?: StringNullableWithAggregatesFilter<"OauthAccessToken"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"OauthAccessToken"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"OauthAccessToken"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"OauthAccessToken"> | Date | string | null
    clientId?: StringNullableWithAggregatesFilter<"OauthAccessToken"> | string | null
    userId?: StringNullableWithAggregatesFilter<"OauthAccessToken"> | string | null
    scopes?: StringNullableWithAggregatesFilter<"OauthAccessToken"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"OauthAccessToken"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"OauthAccessToken"> | Date | string | null
  }

  export type OauthConsentWhereInput = {
    AND?: OauthConsentWhereInput | OauthConsentWhereInput[]
    OR?: OauthConsentWhereInput[]
    NOT?: OauthConsentWhereInput | OauthConsentWhereInput[]
    id?: StringFilter<"OauthConsent"> | string
    clientId?: StringNullableFilter<"OauthConsent"> | string | null
    userId?: StringNullableFilter<"OauthConsent"> | string | null
    scopes?: StringNullableFilter<"OauthConsent"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthConsent"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthConsent"> | Date | string | null
    consentGiven?: BoolNullableFilter<"OauthConsent"> | boolean | null
    oauthapplication?: XOR<OauthApplicationNullableScalarRelationFilter, OauthApplicationWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type OauthConsentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    consentGiven?: SortOrderInput | SortOrder
    oauthapplication?: OauthApplicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OauthConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OauthConsentWhereInput | OauthConsentWhereInput[]
    OR?: OauthConsentWhereInput[]
    NOT?: OauthConsentWhereInput | OauthConsentWhereInput[]
    clientId?: StringNullableFilter<"OauthConsent"> | string | null
    userId?: StringNullableFilter<"OauthConsent"> | string | null
    scopes?: StringNullableFilter<"OauthConsent"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthConsent"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthConsent"> | Date | string | null
    consentGiven?: BoolNullableFilter<"OauthConsent"> | boolean | null
    oauthapplication?: XOR<OauthApplicationNullableScalarRelationFilter, OauthApplicationWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type OauthConsentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    scopes?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    consentGiven?: SortOrderInput | SortOrder
    _count?: OauthConsentCountOrderByAggregateInput
    _max?: OauthConsentMaxOrderByAggregateInput
    _min?: OauthConsentMinOrderByAggregateInput
  }

  export type OauthConsentScalarWhereWithAggregatesInput = {
    AND?: OauthConsentScalarWhereWithAggregatesInput | OauthConsentScalarWhereWithAggregatesInput[]
    OR?: OauthConsentScalarWhereWithAggregatesInput[]
    NOT?: OauthConsentScalarWhereWithAggregatesInput | OauthConsentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OauthConsent"> | string
    clientId?: StringNullableWithAggregatesFilter<"OauthConsent"> | string | null
    userId?: StringNullableWithAggregatesFilter<"OauthConsent"> | string | null
    scopes?: StringNullableWithAggregatesFilter<"OauthConsent"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"OauthConsent"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"OauthConsent"> | Date | string | null
    consentGiven?: BoolNullableWithAggregatesFilter<"OauthConsent"> | boolean | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationUncheckedCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUncheckedUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    userId: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    userId: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwksCreateInput = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date | string
  }

  export type JwksUncheckedCreateInput = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date | string
  }

  export type JwksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwksCreateManyInput = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date | string
  }

  export type JwksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthApplicationCreateInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutOauthapplicationsInput
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutOauthapplicationInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationUncheckedCreateInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    userId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutOauthapplicationInput
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutOauthapplicationsNestedInput
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutOauthapplicationNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutOauthapplicationNestedInput
  }

  export type OauthApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutOauthapplicationNestedInput
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutOauthapplicationNestedInput
  }

  export type OauthApplicationCreateManyInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    userId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthAccessTokenCreateInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    oauthapplication?: OauthApplicationCreateNestedOneWithoutOauthaccesstokensInput
    user?: UserCreateNestedOneWithoutOauthaccesstokensInput
  }

  export type OauthAccessTokenUncheckedCreateInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    clientId?: string | null
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthAccessTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthapplication?: OauthApplicationUpdateOneWithoutOauthaccesstokensNestedInput
    user?: UserUpdateOneWithoutOauthaccesstokensNestedInput
  }

  export type OauthAccessTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthAccessTokenCreateManyInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    clientId?: string | null
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthAccessTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthAccessTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthConsentCreateInput = {
    id: string
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
    oauthapplication?: OauthApplicationCreateNestedOneWithoutOauthconsentsInput
    user?: UserCreateNestedOneWithoutOauthconsentsInput
  }

  export type OauthConsentUncheckedCreateInput = {
    id: string
    clientId?: string | null
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
  }

  export type OauthConsentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oauthapplication?: OauthApplicationUpdateOneWithoutOauthconsentsNestedInput
    user?: UserUpdateOneWithoutOauthconsentsNestedInput
  }

  export type OauthConsentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OauthConsentCreateManyInput = {
    id: string
    clientId?: string | null
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
  }

  export type OauthConsentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OauthConsentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type OauthApplicationListRelationFilter = {
    every?: OauthApplicationWhereInput
    some?: OauthApplicationWhereInput
    none?: OauthApplicationWhereInput
  }

  export type OauthAccessTokenListRelationFilter = {
    every?: OauthAccessTokenWhereInput
    some?: OauthAccessTokenWhereInput
    none?: OauthAccessTokenWhereInput
  }

  export type OauthConsentListRelationFilter = {
    every?: OauthConsentWhereInput
    some?: OauthConsentWhereInput
    none?: OauthConsentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OauthApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OauthAccessTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OauthConsentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JwksCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type JwksMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type JwksMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OauthApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    metadata?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    redirectURLs?: SortOrder
    type?: SortOrder
    disabled?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OauthApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    metadata?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    redirectURLs?: SortOrder
    type?: SortOrder
    disabled?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OauthApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    metadata?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    redirectURLs?: SortOrder
    type?: SortOrder
    disabled?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type OauthApplicationNullableScalarRelationFilter = {
    is?: OauthApplicationWhereInput | null
    isNot?: OauthApplicationWhereInput | null
  }

  export type OauthAccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OauthAccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OauthAccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OauthConsentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consentGiven?: SortOrder
  }

  export type OauthConsentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consentGiven?: SortOrder
  }

  export type OauthConsentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    scopes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consentGiven?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type OauthApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthApplicationCreateWithoutUserInput, OauthApplicationUncheckedCreateWithoutUserInput> | OauthApplicationCreateWithoutUserInput[] | OauthApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutUserInput | OauthApplicationCreateOrConnectWithoutUserInput[]
    createMany?: OauthApplicationCreateManyUserInputEnvelope
    connect?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
  }

  export type OauthAccessTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthAccessTokenCreateWithoutUserInput, OauthAccessTokenUncheckedCreateWithoutUserInput> | OauthAccessTokenCreateWithoutUserInput[] | OauthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutUserInput | OauthAccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: OauthAccessTokenCreateManyUserInputEnvelope
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
  }

  export type OauthConsentCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthConsentCreateWithoutUserInput, OauthConsentUncheckedCreateWithoutUserInput> | OauthConsentCreateWithoutUserInput[] | OauthConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutUserInput | OauthConsentCreateOrConnectWithoutUserInput[]
    createMany?: OauthConsentCreateManyUserInputEnvelope
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type OauthApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthApplicationCreateWithoutUserInput, OauthApplicationUncheckedCreateWithoutUserInput> | OauthApplicationCreateWithoutUserInput[] | OauthApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutUserInput | OauthApplicationCreateOrConnectWithoutUserInput[]
    createMany?: OauthApplicationCreateManyUserInputEnvelope
    connect?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
  }

  export type OauthAccessTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthAccessTokenCreateWithoutUserInput, OauthAccessTokenUncheckedCreateWithoutUserInput> | OauthAccessTokenCreateWithoutUserInput[] | OauthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutUserInput | OauthAccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: OauthAccessTokenCreateManyUserInputEnvelope
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
  }

  export type OauthConsentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthConsentCreateWithoutUserInput, OauthConsentUncheckedCreateWithoutUserInput> | OauthConsentCreateWithoutUserInput[] | OauthConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutUserInput | OauthConsentCreateOrConnectWithoutUserInput[]
    createMany?: OauthConsentCreateManyUserInputEnvelope
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type OauthApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthApplicationCreateWithoutUserInput, OauthApplicationUncheckedCreateWithoutUserInput> | OauthApplicationCreateWithoutUserInput[] | OauthApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutUserInput | OauthApplicationCreateOrConnectWithoutUserInput[]
    upsert?: OauthApplicationUpsertWithWhereUniqueWithoutUserInput | OauthApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthApplicationCreateManyUserInputEnvelope
    set?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    disconnect?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    delete?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    connect?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    update?: OauthApplicationUpdateWithWhereUniqueWithoutUserInput | OauthApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthApplicationUpdateManyWithWhereWithoutUserInput | OauthApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthApplicationScalarWhereInput | OauthApplicationScalarWhereInput[]
  }

  export type OauthAccessTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthAccessTokenCreateWithoutUserInput, OauthAccessTokenUncheckedCreateWithoutUserInput> | OauthAccessTokenCreateWithoutUserInput[] | OauthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutUserInput | OauthAccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: OauthAccessTokenUpsertWithWhereUniqueWithoutUserInput | OauthAccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthAccessTokenCreateManyUserInputEnvelope
    set?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    disconnect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    delete?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    update?: OauthAccessTokenUpdateWithWhereUniqueWithoutUserInput | OauthAccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthAccessTokenUpdateManyWithWhereWithoutUserInput | OauthAccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthAccessTokenScalarWhereInput | OauthAccessTokenScalarWhereInput[]
  }

  export type OauthConsentUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthConsentCreateWithoutUserInput, OauthConsentUncheckedCreateWithoutUserInput> | OauthConsentCreateWithoutUserInput[] | OauthConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutUserInput | OauthConsentCreateOrConnectWithoutUserInput[]
    upsert?: OauthConsentUpsertWithWhereUniqueWithoutUserInput | OauthConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthConsentCreateManyUserInputEnvelope
    set?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    disconnect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    delete?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    update?: OauthConsentUpdateWithWhereUniqueWithoutUserInput | OauthConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthConsentUpdateManyWithWhereWithoutUserInput | OauthConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthConsentScalarWhereInput | OauthConsentScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type OauthApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthApplicationCreateWithoutUserInput, OauthApplicationUncheckedCreateWithoutUserInput> | OauthApplicationCreateWithoutUserInput[] | OauthApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutUserInput | OauthApplicationCreateOrConnectWithoutUserInput[]
    upsert?: OauthApplicationUpsertWithWhereUniqueWithoutUserInput | OauthApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthApplicationCreateManyUserInputEnvelope
    set?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    disconnect?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    delete?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    connect?: OauthApplicationWhereUniqueInput | OauthApplicationWhereUniqueInput[]
    update?: OauthApplicationUpdateWithWhereUniqueWithoutUserInput | OauthApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthApplicationUpdateManyWithWhereWithoutUserInput | OauthApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthApplicationScalarWhereInput | OauthApplicationScalarWhereInput[]
  }

  export type OauthAccessTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthAccessTokenCreateWithoutUserInput, OauthAccessTokenUncheckedCreateWithoutUserInput> | OauthAccessTokenCreateWithoutUserInput[] | OauthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutUserInput | OauthAccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: OauthAccessTokenUpsertWithWhereUniqueWithoutUserInput | OauthAccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthAccessTokenCreateManyUserInputEnvelope
    set?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    disconnect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    delete?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    update?: OauthAccessTokenUpdateWithWhereUniqueWithoutUserInput | OauthAccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthAccessTokenUpdateManyWithWhereWithoutUserInput | OauthAccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthAccessTokenScalarWhereInput | OauthAccessTokenScalarWhereInput[]
  }

  export type OauthConsentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthConsentCreateWithoutUserInput, OauthConsentUncheckedCreateWithoutUserInput> | OauthConsentCreateWithoutUserInput[] | OauthConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutUserInput | OauthConsentCreateOrConnectWithoutUserInput[]
    upsert?: OauthConsentUpsertWithWhereUniqueWithoutUserInput | OauthConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthConsentCreateManyUserInputEnvelope
    set?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    disconnect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    delete?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    update?: OauthConsentUpdateWithWhereUniqueWithoutUserInput | OauthConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthConsentUpdateManyWithWhereWithoutUserInput | OauthConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthConsentScalarWhereInput | OauthConsentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutOauthapplicationsInput = {
    create?: XOR<UserCreateWithoutOauthapplicationsInput, UserUncheckedCreateWithoutOauthapplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthapplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type OauthAccessTokenCreateNestedManyWithoutOauthapplicationInput = {
    create?: XOR<OauthAccessTokenCreateWithoutOauthapplicationInput, OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput> | OauthAccessTokenCreateWithoutOauthapplicationInput[] | OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput | OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput[]
    createMany?: OauthAccessTokenCreateManyOauthapplicationInputEnvelope
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
  }

  export type OauthConsentCreateNestedManyWithoutOauthapplicationInput = {
    create?: XOR<OauthConsentCreateWithoutOauthapplicationInput, OauthConsentUncheckedCreateWithoutOauthapplicationInput> | OauthConsentCreateWithoutOauthapplicationInput[] | OauthConsentUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutOauthapplicationInput | OauthConsentCreateOrConnectWithoutOauthapplicationInput[]
    createMany?: OauthConsentCreateManyOauthapplicationInputEnvelope
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
  }

  export type OauthAccessTokenUncheckedCreateNestedManyWithoutOauthapplicationInput = {
    create?: XOR<OauthAccessTokenCreateWithoutOauthapplicationInput, OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput> | OauthAccessTokenCreateWithoutOauthapplicationInput[] | OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput | OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput[]
    createMany?: OauthAccessTokenCreateManyOauthapplicationInputEnvelope
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
  }

  export type OauthConsentUncheckedCreateNestedManyWithoutOauthapplicationInput = {
    create?: XOR<OauthConsentCreateWithoutOauthapplicationInput, OauthConsentUncheckedCreateWithoutOauthapplicationInput> | OauthConsentCreateWithoutOauthapplicationInput[] | OauthConsentUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutOauthapplicationInput | OauthConsentCreateOrConnectWithoutOauthapplicationInput[]
    createMany?: OauthConsentCreateManyOauthapplicationInputEnvelope
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneWithoutOauthapplicationsNestedInput = {
    create?: XOR<UserCreateWithoutOauthapplicationsInput, UserUncheckedCreateWithoutOauthapplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthapplicationsInput
    upsert?: UserUpsertWithoutOauthapplicationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthapplicationsInput, UserUpdateWithoutOauthapplicationsInput>, UserUncheckedUpdateWithoutOauthapplicationsInput>
  }

  export type OauthAccessTokenUpdateManyWithoutOauthapplicationNestedInput = {
    create?: XOR<OauthAccessTokenCreateWithoutOauthapplicationInput, OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput> | OauthAccessTokenCreateWithoutOauthapplicationInput[] | OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput | OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput[]
    upsert?: OauthAccessTokenUpsertWithWhereUniqueWithoutOauthapplicationInput | OauthAccessTokenUpsertWithWhereUniqueWithoutOauthapplicationInput[]
    createMany?: OauthAccessTokenCreateManyOauthapplicationInputEnvelope
    set?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    disconnect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    delete?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    update?: OauthAccessTokenUpdateWithWhereUniqueWithoutOauthapplicationInput | OauthAccessTokenUpdateWithWhereUniqueWithoutOauthapplicationInput[]
    updateMany?: OauthAccessTokenUpdateManyWithWhereWithoutOauthapplicationInput | OauthAccessTokenUpdateManyWithWhereWithoutOauthapplicationInput[]
    deleteMany?: OauthAccessTokenScalarWhereInput | OauthAccessTokenScalarWhereInput[]
  }

  export type OauthConsentUpdateManyWithoutOauthapplicationNestedInput = {
    create?: XOR<OauthConsentCreateWithoutOauthapplicationInput, OauthConsentUncheckedCreateWithoutOauthapplicationInput> | OauthConsentCreateWithoutOauthapplicationInput[] | OauthConsentUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutOauthapplicationInput | OauthConsentCreateOrConnectWithoutOauthapplicationInput[]
    upsert?: OauthConsentUpsertWithWhereUniqueWithoutOauthapplicationInput | OauthConsentUpsertWithWhereUniqueWithoutOauthapplicationInput[]
    createMany?: OauthConsentCreateManyOauthapplicationInputEnvelope
    set?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    disconnect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    delete?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    update?: OauthConsentUpdateWithWhereUniqueWithoutOauthapplicationInput | OauthConsentUpdateWithWhereUniqueWithoutOauthapplicationInput[]
    updateMany?: OauthConsentUpdateManyWithWhereWithoutOauthapplicationInput | OauthConsentUpdateManyWithWhereWithoutOauthapplicationInput[]
    deleteMany?: OauthConsentScalarWhereInput | OauthConsentScalarWhereInput[]
  }

  export type OauthAccessTokenUncheckedUpdateManyWithoutOauthapplicationNestedInput = {
    create?: XOR<OauthAccessTokenCreateWithoutOauthapplicationInput, OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput> | OauthAccessTokenCreateWithoutOauthapplicationInput[] | OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput | OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput[]
    upsert?: OauthAccessTokenUpsertWithWhereUniqueWithoutOauthapplicationInput | OauthAccessTokenUpsertWithWhereUniqueWithoutOauthapplicationInput[]
    createMany?: OauthAccessTokenCreateManyOauthapplicationInputEnvelope
    set?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    disconnect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    delete?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    connect?: OauthAccessTokenWhereUniqueInput | OauthAccessTokenWhereUniqueInput[]
    update?: OauthAccessTokenUpdateWithWhereUniqueWithoutOauthapplicationInput | OauthAccessTokenUpdateWithWhereUniqueWithoutOauthapplicationInput[]
    updateMany?: OauthAccessTokenUpdateManyWithWhereWithoutOauthapplicationInput | OauthAccessTokenUpdateManyWithWhereWithoutOauthapplicationInput[]
    deleteMany?: OauthAccessTokenScalarWhereInput | OauthAccessTokenScalarWhereInput[]
  }

  export type OauthConsentUncheckedUpdateManyWithoutOauthapplicationNestedInput = {
    create?: XOR<OauthConsentCreateWithoutOauthapplicationInput, OauthConsentUncheckedCreateWithoutOauthapplicationInput> | OauthConsentCreateWithoutOauthapplicationInput[] | OauthConsentUncheckedCreateWithoutOauthapplicationInput[]
    connectOrCreate?: OauthConsentCreateOrConnectWithoutOauthapplicationInput | OauthConsentCreateOrConnectWithoutOauthapplicationInput[]
    upsert?: OauthConsentUpsertWithWhereUniqueWithoutOauthapplicationInput | OauthConsentUpsertWithWhereUniqueWithoutOauthapplicationInput[]
    createMany?: OauthConsentCreateManyOauthapplicationInputEnvelope
    set?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    disconnect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    delete?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    connect?: OauthConsentWhereUniqueInput | OauthConsentWhereUniqueInput[]
    update?: OauthConsentUpdateWithWhereUniqueWithoutOauthapplicationInput | OauthConsentUpdateWithWhereUniqueWithoutOauthapplicationInput[]
    updateMany?: OauthConsentUpdateManyWithWhereWithoutOauthapplicationInput | OauthConsentUpdateManyWithWhereWithoutOauthapplicationInput[]
    deleteMany?: OauthConsentScalarWhereInput | OauthConsentScalarWhereInput[]
  }

  export type OauthApplicationCreateNestedOneWithoutOauthaccesstokensInput = {
    create?: XOR<OauthApplicationCreateWithoutOauthaccesstokensInput, OauthApplicationUncheckedCreateWithoutOauthaccesstokensInput>
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutOauthaccesstokensInput
    connect?: OauthApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOauthaccesstokensInput = {
    create?: XOR<UserCreateWithoutOauthaccesstokensInput, UserUncheckedCreateWithoutOauthaccesstokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthaccesstokensInput
    connect?: UserWhereUniqueInput
  }

  export type OauthApplicationUpdateOneWithoutOauthaccesstokensNestedInput = {
    create?: XOR<OauthApplicationCreateWithoutOauthaccesstokensInput, OauthApplicationUncheckedCreateWithoutOauthaccesstokensInput>
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutOauthaccesstokensInput
    upsert?: OauthApplicationUpsertWithoutOauthaccesstokensInput
    disconnect?: OauthApplicationWhereInput | boolean
    delete?: OauthApplicationWhereInput | boolean
    connect?: OauthApplicationWhereUniqueInput
    update?: XOR<XOR<OauthApplicationUpdateToOneWithWhereWithoutOauthaccesstokensInput, OauthApplicationUpdateWithoutOauthaccesstokensInput>, OauthApplicationUncheckedUpdateWithoutOauthaccesstokensInput>
  }

  export type UserUpdateOneWithoutOauthaccesstokensNestedInput = {
    create?: XOR<UserCreateWithoutOauthaccesstokensInput, UserUncheckedCreateWithoutOauthaccesstokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthaccesstokensInput
    upsert?: UserUpsertWithoutOauthaccesstokensInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthaccesstokensInput, UserUpdateWithoutOauthaccesstokensInput>, UserUncheckedUpdateWithoutOauthaccesstokensInput>
  }

  export type OauthApplicationCreateNestedOneWithoutOauthconsentsInput = {
    create?: XOR<OauthApplicationCreateWithoutOauthconsentsInput, OauthApplicationUncheckedCreateWithoutOauthconsentsInput>
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutOauthconsentsInput
    connect?: OauthApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOauthconsentsInput = {
    create?: XOR<UserCreateWithoutOauthconsentsInput, UserUncheckedCreateWithoutOauthconsentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthconsentsInput
    connect?: UserWhereUniqueInput
  }

  export type OauthApplicationUpdateOneWithoutOauthconsentsNestedInput = {
    create?: XOR<OauthApplicationCreateWithoutOauthconsentsInput, OauthApplicationUncheckedCreateWithoutOauthconsentsInput>
    connectOrCreate?: OauthApplicationCreateOrConnectWithoutOauthconsentsInput
    upsert?: OauthApplicationUpsertWithoutOauthconsentsInput
    disconnect?: OauthApplicationWhereInput | boolean
    delete?: OauthApplicationWhereInput | boolean
    connect?: OauthApplicationWhereUniqueInput
    update?: XOR<XOR<OauthApplicationUpdateToOneWithWhereWithoutOauthconsentsInput, OauthApplicationUpdateWithoutOauthconsentsInput>, OauthApplicationUncheckedUpdateWithoutOauthconsentsInput>
  }

  export type UserUpdateOneWithoutOauthconsentsNestedInput = {
    create?: XOR<UserCreateWithoutOauthconsentsInput, UserUncheckedCreateWithoutOauthconsentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthconsentsInput
    upsert?: UserUpsertWithoutOauthconsentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthconsentsInput, UserUpdateWithoutOauthconsentsInput>, UserUncheckedUpdateWithoutOauthconsentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OauthApplicationCreateWithoutUserInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutOauthapplicationInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationUncheckedCreateWithoutUserInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutOauthapplicationInput
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationCreateOrConnectWithoutUserInput = {
    where: OauthApplicationWhereUniqueInput
    create: XOR<OauthApplicationCreateWithoutUserInput, OauthApplicationUncheckedCreateWithoutUserInput>
  }

  export type OauthApplicationCreateManyUserInputEnvelope = {
    data: OauthApplicationCreateManyUserInput | OauthApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OauthAccessTokenCreateWithoutUserInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    oauthapplication?: OauthApplicationCreateNestedOneWithoutOauthaccesstokensInput
  }

  export type OauthAccessTokenUncheckedCreateWithoutUserInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    clientId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthAccessTokenCreateOrConnectWithoutUserInput = {
    where: OauthAccessTokenWhereUniqueInput
    create: XOR<OauthAccessTokenCreateWithoutUserInput, OauthAccessTokenUncheckedCreateWithoutUserInput>
  }

  export type OauthAccessTokenCreateManyUserInputEnvelope = {
    data: OauthAccessTokenCreateManyUserInput | OauthAccessTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OauthConsentCreateWithoutUserInput = {
    id: string
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
    oauthapplication?: OauthApplicationCreateNestedOneWithoutOauthconsentsInput
  }

  export type OauthConsentUncheckedCreateWithoutUserInput = {
    id: string
    clientId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
  }

  export type OauthConsentCreateOrConnectWithoutUserInput = {
    where: OauthConsentWhereUniqueInput
    create: XOR<OauthConsentCreateWithoutUserInput, OauthConsentUncheckedCreateWithoutUserInput>
  }

  export type OauthConsentCreateManyUserInputEnvelope = {
    data: OauthConsentCreateManyUserInput | OauthConsentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type OauthApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: OauthApplicationWhereUniqueInput
    update: XOR<OauthApplicationUpdateWithoutUserInput, OauthApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<OauthApplicationCreateWithoutUserInput, OauthApplicationUncheckedCreateWithoutUserInput>
  }

  export type OauthApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: OauthApplicationWhereUniqueInput
    data: XOR<OauthApplicationUpdateWithoutUserInput, OauthApplicationUncheckedUpdateWithoutUserInput>
  }

  export type OauthApplicationUpdateManyWithWhereWithoutUserInput = {
    where: OauthApplicationScalarWhereInput
    data: XOR<OauthApplicationUpdateManyMutationInput, OauthApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type OauthApplicationScalarWhereInput = {
    AND?: OauthApplicationScalarWhereInput | OauthApplicationScalarWhereInput[]
    OR?: OauthApplicationScalarWhereInput[]
    NOT?: OauthApplicationScalarWhereInput | OauthApplicationScalarWhereInput[]
    id?: StringFilter<"OauthApplication"> | string
    name?: StringNullableFilter<"OauthApplication"> | string | null
    icon?: StringNullableFilter<"OauthApplication"> | string | null
    metadata?: StringNullableFilter<"OauthApplication"> | string | null
    clientId?: StringNullableFilter<"OauthApplication"> | string | null
    clientSecret?: StringNullableFilter<"OauthApplication"> | string | null
    redirectURLs?: StringNullableFilter<"OauthApplication"> | string | null
    type?: StringNullableFilter<"OauthApplication"> | string | null
    disabled?: BoolNullableFilter<"OauthApplication"> | boolean | null
    userId?: StringNullableFilter<"OauthApplication"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthApplication"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthApplication"> | Date | string | null
  }

  export type OauthAccessTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: OauthAccessTokenWhereUniqueInput
    update: XOR<OauthAccessTokenUpdateWithoutUserInput, OauthAccessTokenUncheckedUpdateWithoutUserInput>
    create: XOR<OauthAccessTokenCreateWithoutUserInput, OauthAccessTokenUncheckedCreateWithoutUserInput>
  }

  export type OauthAccessTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: OauthAccessTokenWhereUniqueInput
    data: XOR<OauthAccessTokenUpdateWithoutUserInput, OauthAccessTokenUncheckedUpdateWithoutUserInput>
  }

  export type OauthAccessTokenUpdateManyWithWhereWithoutUserInput = {
    where: OauthAccessTokenScalarWhereInput
    data: XOR<OauthAccessTokenUpdateManyMutationInput, OauthAccessTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type OauthAccessTokenScalarWhereInput = {
    AND?: OauthAccessTokenScalarWhereInput | OauthAccessTokenScalarWhereInput[]
    OR?: OauthAccessTokenScalarWhereInput[]
    NOT?: OauthAccessTokenScalarWhereInput | OauthAccessTokenScalarWhereInput[]
    id?: StringFilter<"OauthAccessToken"> | string
    accessToken?: StringNullableFilter<"OauthAccessToken"> | string | null
    refreshToken?: StringNullableFilter<"OauthAccessToken"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    clientId?: StringNullableFilter<"OauthAccessToken"> | string | null
    userId?: StringNullableFilter<"OauthAccessToken"> | string | null
    scopes?: StringNullableFilter<"OauthAccessToken"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthAccessToken"> | Date | string | null
  }

  export type OauthConsentUpsertWithWhereUniqueWithoutUserInput = {
    where: OauthConsentWhereUniqueInput
    update: XOR<OauthConsentUpdateWithoutUserInput, OauthConsentUncheckedUpdateWithoutUserInput>
    create: XOR<OauthConsentCreateWithoutUserInput, OauthConsentUncheckedCreateWithoutUserInput>
  }

  export type OauthConsentUpdateWithWhereUniqueWithoutUserInput = {
    where: OauthConsentWhereUniqueInput
    data: XOR<OauthConsentUpdateWithoutUserInput, OauthConsentUncheckedUpdateWithoutUserInput>
  }

  export type OauthConsentUpdateManyWithWhereWithoutUserInput = {
    where: OauthConsentScalarWhereInput
    data: XOR<OauthConsentUpdateManyMutationInput, OauthConsentUncheckedUpdateManyWithoutUserInput>
  }

  export type OauthConsentScalarWhereInput = {
    AND?: OauthConsentScalarWhereInput | OauthConsentScalarWhereInput[]
    OR?: OauthConsentScalarWhereInput[]
    NOT?: OauthConsentScalarWhereInput | OauthConsentScalarWhereInput[]
    id?: StringFilter<"OauthConsent"> | string
    clientId?: StringNullableFilter<"OauthConsent"> | string | null
    userId?: StringNullableFilter<"OauthConsent"> | string | null
    scopes?: StringNullableFilter<"OauthConsent"> | string | null
    createdAt?: DateTimeNullableFilter<"OauthConsent"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"OauthConsent"> | Date | string | null
    consentGiven?: BoolNullableFilter<"OauthConsent"> | boolean | null
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationUncheckedCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUncheckedUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationUncheckedCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUncheckedUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOauthapplicationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthapplicationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthapplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthapplicationsInput, UserUncheckedCreateWithoutOauthapplicationsInput>
  }

  export type OauthAccessTokenCreateWithoutOauthapplicationInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutOauthaccesstokensInput
  }

  export type OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthAccessTokenCreateOrConnectWithoutOauthapplicationInput = {
    where: OauthAccessTokenWhereUniqueInput
    create: XOR<OauthAccessTokenCreateWithoutOauthapplicationInput, OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput>
  }

  export type OauthAccessTokenCreateManyOauthapplicationInputEnvelope = {
    data: OauthAccessTokenCreateManyOauthapplicationInput | OauthAccessTokenCreateManyOauthapplicationInput[]
    skipDuplicates?: boolean
  }

  export type OauthConsentCreateWithoutOauthapplicationInput = {
    id: string
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
    user?: UserCreateNestedOneWithoutOauthconsentsInput
  }

  export type OauthConsentUncheckedCreateWithoutOauthapplicationInput = {
    id: string
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
  }

  export type OauthConsentCreateOrConnectWithoutOauthapplicationInput = {
    where: OauthConsentWhereUniqueInput
    create: XOR<OauthConsentCreateWithoutOauthapplicationInput, OauthConsentUncheckedCreateWithoutOauthapplicationInput>
  }

  export type OauthConsentCreateManyOauthapplicationInputEnvelope = {
    data: OauthConsentCreateManyOauthapplicationInput | OauthConsentCreateManyOauthapplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOauthapplicationsInput = {
    update: XOR<UserUpdateWithoutOauthapplicationsInput, UserUncheckedUpdateWithoutOauthapplicationsInput>
    create: XOR<UserCreateWithoutOauthapplicationsInput, UserUncheckedCreateWithoutOauthapplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthapplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthapplicationsInput, UserUncheckedUpdateWithoutOauthapplicationsInput>
  }

  export type UserUpdateWithoutOauthapplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthapplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OauthAccessTokenUpsertWithWhereUniqueWithoutOauthapplicationInput = {
    where: OauthAccessTokenWhereUniqueInput
    update: XOR<OauthAccessTokenUpdateWithoutOauthapplicationInput, OauthAccessTokenUncheckedUpdateWithoutOauthapplicationInput>
    create: XOR<OauthAccessTokenCreateWithoutOauthapplicationInput, OauthAccessTokenUncheckedCreateWithoutOauthapplicationInput>
  }

  export type OauthAccessTokenUpdateWithWhereUniqueWithoutOauthapplicationInput = {
    where: OauthAccessTokenWhereUniqueInput
    data: XOR<OauthAccessTokenUpdateWithoutOauthapplicationInput, OauthAccessTokenUncheckedUpdateWithoutOauthapplicationInput>
  }

  export type OauthAccessTokenUpdateManyWithWhereWithoutOauthapplicationInput = {
    where: OauthAccessTokenScalarWhereInput
    data: XOR<OauthAccessTokenUpdateManyMutationInput, OauthAccessTokenUncheckedUpdateManyWithoutOauthapplicationInput>
  }

  export type OauthConsentUpsertWithWhereUniqueWithoutOauthapplicationInput = {
    where: OauthConsentWhereUniqueInput
    update: XOR<OauthConsentUpdateWithoutOauthapplicationInput, OauthConsentUncheckedUpdateWithoutOauthapplicationInput>
    create: XOR<OauthConsentCreateWithoutOauthapplicationInput, OauthConsentUncheckedCreateWithoutOauthapplicationInput>
  }

  export type OauthConsentUpdateWithWhereUniqueWithoutOauthapplicationInput = {
    where: OauthConsentWhereUniqueInput
    data: XOR<OauthConsentUpdateWithoutOauthapplicationInput, OauthConsentUncheckedUpdateWithoutOauthapplicationInput>
  }

  export type OauthConsentUpdateManyWithWhereWithoutOauthapplicationInput = {
    where: OauthConsentScalarWhereInput
    data: XOR<OauthConsentUpdateManyMutationInput, OauthConsentUncheckedUpdateManyWithoutOauthapplicationInput>
  }

  export type OauthApplicationCreateWithoutOauthaccesstokensInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutOauthapplicationsInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationUncheckedCreateWithoutOauthaccesstokensInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    userId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationCreateOrConnectWithoutOauthaccesstokensInput = {
    where: OauthApplicationWhereUniqueInput
    create: XOR<OauthApplicationCreateWithoutOauthaccesstokensInput, OauthApplicationUncheckedCreateWithoutOauthaccesstokensInput>
  }

  export type UserCreateWithoutOauthaccesstokensInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthaccesstokensInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationUncheckedCreateNestedManyWithoutUserInput
    oauthconsents?: OauthConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthaccesstokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthaccesstokensInput, UserUncheckedCreateWithoutOauthaccesstokensInput>
  }

  export type OauthApplicationUpsertWithoutOauthaccesstokensInput = {
    update: XOR<OauthApplicationUpdateWithoutOauthaccesstokensInput, OauthApplicationUncheckedUpdateWithoutOauthaccesstokensInput>
    create: XOR<OauthApplicationCreateWithoutOauthaccesstokensInput, OauthApplicationUncheckedCreateWithoutOauthaccesstokensInput>
    where?: OauthApplicationWhereInput
  }

  export type OauthApplicationUpdateToOneWithWhereWithoutOauthaccesstokensInput = {
    where?: OauthApplicationWhereInput
    data: XOR<OauthApplicationUpdateWithoutOauthaccesstokensInput, OauthApplicationUncheckedUpdateWithoutOauthaccesstokensInput>
  }

  export type OauthApplicationUpdateWithoutOauthaccesstokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutOauthapplicationsNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutOauthapplicationNestedInput
  }

  export type OauthApplicationUncheckedUpdateWithoutOauthaccesstokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutOauthapplicationNestedInput
  }

  export type UserUpsertWithoutOauthaccesstokensInput = {
    update: XOR<UserUpdateWithoutOauthaccesstokensInput, UserUncheckedUpdateWithoutOauthaccesstokensInput>
    create: XOR<UserCreateWithoutOauthaccesstokensInput, UserUncheckedCreateWithoutOauthaccesstokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthaccesstokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthaccesstokensInput, UserUncheckedUpdateWithoutOauthaccesstokensInput>
  }

  export type UserUpdateWithoutOauthaccesstokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthaccesstokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUncheckedUpdateManyWithoutUserNestedInput
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OauthApplicationCreateWithoutOauthconsentsInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutOauthapplicationsInput
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationUncheckedCreateWithoutOauthconsentsInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    userId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutOauthapplicationInput
  }

  export type OauthApplicationCreateOrConnectWithoutOauthconsentsInput = {
    where: OauthApplicationWhereUniqueInput
    create: XOR<OauthApplicationCreateWithoutOauthconsentsInput, OauthApplicationUncheckedCreateWithoutOauthconsentsInput>
  }

  export type UserCreateWithoutOauthconsentsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthconsentsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthapplications?: OauthApplicationUncheckedCreateNestedManyWithoutUserInput
    oauthaccesstokens?: OauthAccessTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthconsentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthconsentsInput, UserUncheckedCreateWithoutOauthconsentsInput>
  }

  export type OauthApplicationUpsertWithoutOauthconsentsInput = {
    update: XOR<OauthApplicationUpdateWithoutOauthconsentsInput, OauthApplicationUncheckedUpdateWithoutOauthconsentsInput>
    create: XOR<OauthApplicationCreateWithoutOauthconsentsInput, OauthApplicationUncheckedCreateWithoutOauthconsentsInput>
    where?: OauthApplicationWhereInput
  }

  export type OauthApplicationUpdateToOneWithWhereWithoutOauthconsentsInput = {
    where?: OauthApplicationWhereInput
    data: XOR<OauthApplicationUpdateWithoutOauthconsentsInput, OauthApplicationUncheckedUpdateWithoutOauthconsentsInput>
  }

  export type OauthApplicationUpdateWithoutOauthconsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutOauthapplicationsNestedInput
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutOauthapplicationNestedInput
  }

  export type OauthApplicationUncheckedUpdateWithoutOauthconsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutOauthapplicationNestedInput
  }

  export type UserUpsertWithoutOauthconsentsInput = {
    update: XOR<UserUpdateWithoutOauthconsentsInput, UserUncheckedUpdateWithoutOauthconsentsInput>
    create: XOR<UserCreateWithoutOauthconsentsInput, UserUncheckedCreateWithoutOauthconsentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthconsentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthconsentsInput, UserUncheckedUpdateWithoutOauthconsentsInput>
  }

  export type UserUpdateWithoutOauthconsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthconsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthapplications?: OauthApplicationUncheckedUpdateManyWithoutUserNestedInput
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OauthApplicationCreateManyUserInput = {
    id: string
    name?: string | null
    icon?: string | null
    metadata?: string | null
    clientId?: string | null
    clientSecret?: string | null
    redirectURLs?: string | null
    type?: string | null
    disabled?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthAccessTokenCreateManyUserInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    clientId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthConsentCreateManyUserInput = {
    id: string
    clientId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthaccesstokens?: OauthAccessTokenUpdateManyWithoutOauthapplicationNestedInput
    oauthconsents?: OauthConsentUpdateManyWithoutOauthapplicationNestedInput
  }

  export type OauthApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthaccesstokens?: OauthAccessTokenUncheckedUpdateManyWithoutOauthapplicationNestedInput
    oauthconsents?: OauthConsentUncheckedUpdateManyWithoutOauthapplicationNestedInput
  }

  export type OauthApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    redirectURLs?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthAccessTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthapplication?: OauthApplicationUpdateOneWithoutOauthaccesstokensNestedInput
  }

  export type OauthAccessTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthAccessTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthConsentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oauthapplication?: OauthApplicationUpdateOneWithoutOauthconsentsNestedInput
  }

  export type OauthConsentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OauthConsentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OauthAccessTokenCreateManyOauthapplicationInput = {
    id: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type OauthConsentCreateManyOauthapplicationInput = {
    id: string
    userId?: string | null
    scopes?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    consentGiven?: boolean | null
  }

  export type OauthAccessTokenUpdateWithoutOauthapplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutOauthaccesstokensNestedInput
  }

  export type OauthAccessTokenUncheckedUpdateWithoutOauthapplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthAccessTokenUncheckedUpdateManyWithoutOauthapplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OauthConsentUpdateWithoutOauthapplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneWithoutOauthconsentsNestedInput
  }

  export type OauthConsentUncheckedUpdateWithoutOauthapplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OauthConsentUncheckedUpdateManyWithoutOauthapplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consentGiven?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}