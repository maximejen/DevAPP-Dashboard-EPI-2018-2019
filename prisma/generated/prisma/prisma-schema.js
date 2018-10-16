module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAuth {
  count: Int!
}

type AggregateConfig {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWidget {
  count: Int!
}

type Auth {
  Id: ID!
  Type: String!
  AccessToken: String!
  RefreshToken: String!
  Expire: Int!
  User: User!
}

type AuthConnection {
  pageInfo: PageInfo!
  edges: [AuthEdge]!
  aggregate: AggregateAuth!
}

input AuthCreateInput {
  Id: ID!
  Type: String!
  AccessToken: String!
  RefreshToken: String!
  Expire: Int!
  User: UserCreateOneWithoutAuthInput!
}

input AuthCreateOneInput {
  create: AuthCreateInput
  connect: AuthWhereUniqueInput
}

input AuthCreateOneWithoutUserInput {
  create: AuthCreateWithoutUserInput
  connect: AuthWhereUniqueInput
}

input AuthCreateWithoutUserInput {
  Id: ID!
  Type: String!
  AccessToken: String!
  RefreshToken: String!
  Expire: Int!
}

type AuthEdge {
  node: Auth!
  cursor: String!
}

enum AuthOrderByInput {
  Id_ASC
  Id_DESC
  Type_ASC
  Type_DESC
  AccessToken_ASC
  AccessToken_DESC
  RefreshToken_ASC
  RefreshToken_DESC
  Expire_ASC
  Expire_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthPreviousValues {
  Id: ID!
  Type: String!
  AccessToken: String!
  RefreshToken: String!
  Expire: Int!
}

type AuthSubscriptionPayload {
  mutation: MutationType!
  node: Auth
  updatedFields: [String!]
  previousValues: AuthPreviousValues
}

input AuthSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthWhereInput
  AND: [AuthSubscriptionWhereInput!]
  OR: [AuthSubscriptionWhereInput!]
  NOT: [AuthSubscriptionWhereInput!]
}

input AuthUpdateDataInput {
  Id: ID
  Type: String
  AccessToken: String
  RefreshToken: String
  Expire: Int
  User: UserUpdateOneRequiredWithoutAuthInput
}

input AuthUpdateInput {
  Id: ID
  Type: String
  AccessToken: String
  RefreshToken: String
  Expire: Int
  User: UserUpdateOneRequiredWithoutAuthInput
}

input AuthUpdateOneRequiredInput {
  create: AuthCreateInput
  update: AuthUpdateDataInput
  upsert: AuthUpsertNestedInput
  connect: AuthWhereUniqueInput
}

input AuthUpdateOneWithoutUserInput {
  create: AuthCreateWithoutUserInput
  update: AuthUpdateWithoutUserDataInput
  upsert: AuthUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: AuthWhereUniqueInput
}

input AuthUpdateWithoutUserDataInput {
  Id: ID
  Type: String
  AccessToken: String
  RefreshToken: String
  Expire: Int
}

input AuthUpsertNestedInput {
  update: AuthUpdateDataInput!
  create: AuthCreateInput!
}

input AuthUpsertWithoutUserInput {
  update: AuthUpdateWithoutUserDataInput!
  create: AuthCreateWithoutUserInput!
}

input AuthWhereInput {
  Id: ID
  Id_not: ID
  Id_in: [ID!]
  Id_not_in: [ID!]
  Id_lt: ID
  Id_lte: ID
  Id_gt: ID
  Id_gte: ID
  Id_contains: ID
  Id_not_contains: ID
  Id_starts_with: ID
  Id_not_starts_with: ID
  Id_ends_with: ID
  Id_not_ends_with: ID
  Type: String
  Type_not: String
  Type_in: [String!]
  Type_not_in: [String!]
  Type_lt: String
  Type_lte: String
  Type_gt: String
  Type_gte: String
  Type_contains: String
  Type_not_contains: String
  Type_starts_with: String
  Type_not_starts_with: String
  Type_ends_with: String
  Type_not_ends_with: String
  AccessToken: String
  AccessToken_not: String
  AccessToken_in: [String!]
  AccessToken_not_in: [String!]
  AccessToken_lt: String
  AccessToken_lte: String
  AccessToken_gt: String
  AccessToken_gte: String
  AccessToken_contains: String
  AccessToken_not_contains: String
  AccessToken_starts_with: String
  AccessToken_not_starts_with: String
  AccessToken_ends_with: String
  AccessToken_not_ends_with: String
  RefreshToken: String
  RefreshToken_not: String
  RefreshToken_in: [String!]
  RefreshToken_not_in: [String!]
  RefreshToken_lt: String
  RefreshToken_lte: String
  RefreshToken_gt: String
  RefreshToken_gte: String
  RefreshToken_contains: String
  RefreshToken_not_contains: String
  RefreshToken_starts_with: String
  RefreshToken_not_starts_with: String
  RefreshToken_ends_with: String
  RefreshToken_not_ends_with: String
  Expire: Int
  Expire_not: Int
  Expire_in: [Int!]
  Expire_not_in: [Int!]
  Expire_lt: Int
  Expire_lte: Int
  Expire_gt: Int
  Expire_gte: Int
  User: UserWhereInput
  AND: [AuthWhereInput!]
  OR: [AuthWhereInput!]
  NOT: [AuthWhereInput!]
}

input AuthWhereUniqueInput {
  Id: ID
}

type BatchPayload {
  count: Long!
}

type Config {
  PosX: Int!
  PosY: Int!
  Height: Int!
  MinHeight: Int!
  MaxHeight: Int!
  Width: Int!
  MinWidth: Int!
  MaxWidth: Int!
  Static: Boolean!
  Location: String!
}

type ConfigConnection {
  pageInfo: PageInfo!
  edges: [ConfigEdge]!
  aggregate: AggregateConfig!
}

input ConfigCreateInput {
  PosX: Int!
  PosY: Int!
  Height: Int!
  MinHeight: Int!
  MaxHeight: Int!
  Width: Int!
  MinWidth: Int!
  MaxWidth: Int!
  Static: Boolean!
  Location: String!
}

input ConfigCreateOneInput {
  create: ConfigCreateInput
}

type ConfigEdge {
  node: Config!
  cursor: String!
}

enum ConfigOrderByInput {
  PosX_ASC
  PosX_DESC
  PosY_ASC
  PosY_DESC
  Height_ASC
  Height_DESC
  MinHeight_ASC
  MinHeight_DESC
  MaxHeight_ASC
  MaxHeight_DESC
  Width_ASC
  Width_DESC
  MinWidth_ASC
  MinWidth_DESC
  MaxWidth_ASC
  MaxWidth_DESC
  Static_ASC
  Static_DESC
  Location_ASC
  Location_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ConfigPreviousValues {
  PosX: Int!
  PosY: Int!
  Height: Int!
  MinHeight: Int!
  MaxHeight: Int!
  Width: Int!
  MinWidth: Int!
  MaxWidth: Int!
  Static: Boolean!
  Location: String!
}

type ConfigSubscriptionPayload {
  mutation: MutationType!
  node: Config
  updatedFields: [String!]
  previousValues: ConfigPreviousValues
}

input ConfigSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ConfigWhereInput
  AND: [ConfigSubscriptionWhereInput!]
  OR: [ConfigSubscriptionWhereInput!]
  NOT: [ConfigSubscriptionWhereInput!]
}

input ConfigUpdateDataInput {
  PosX: Int
  PosY: Int
  Height: Int
  MinHeight: Int
  MaxHeight: Int
  Width: Int
  MinWidth: Int
  MaxWidth: Int
  Static: Boolean
  Location: String
}

input ConfigUpdateInput {
  PosX: Int
  PosY: Int
  Height: Int
  MinHeight: Int
  MaxHeight: Int
  Width: Int
  MinWidth: Int
  MaxWidth: Int
  Static: Boolean
  Location: String
}

input ConfigUpdateOneRequiredInput {
  create: ConfigCreateInput
  update: ConfigUpdateDataInput
  upsert: ConfigUpsertNestedInput
}

input ConfigUpsertNestedInput {
  update: ConfigUpdateDataInput!
  create: ConfigCreateInput!
}

input ConfigWhereInput {
  PosX: Int
  PosX_not: Int
  PosX_in: [Int!]
  PosX_not_in: [Int!]
  PosX_lt: Int
  PosX_lte: Int
  PosX_gt: Int
  PosX_gte: Int
  PosY: Int
  PosY_not: Int
  PosY_in: [Int!]
  PosY_not_in: [Int!]
  PosY_lt: Int
  PosY_lte: Int
  PosY_gt: Int
  PosY_gte: Int
  Height: Int
  Height_not: Int
  Height_in: [Int!]
  Height_not_in: [Int!]
  Height_lt: Int
  Height_lte: Int
  Height_gt: Int
  Height_gte: Int
  MinHeight: Int
  MinHeight_not: Int
  MinHeight_in: [Int!]
  MinHeight_not_in: [Int!]
  MinHeight_lt: Int
  MinHeight_lte: Int
  MinHeight_gt: Int
  MinHeight_gte: Int
  MaxHeight: Int
  MaxHeight_not: Int
  MaxHeight_in: [Int!]
  MaxHeight_not_in: [Int!]
  MaxHeight_lt: Int
  MaxHeight_lte: Int
  MaxHeight_gt: Int
  MaxHeight_gte: Int
  Width: Int
  Width_not: Int
  Width_in: [Int!]
  Width_not_in: [Int!]
  Width_lt: Int
  Width_lte: Int
  Width_gt: Int
  Width_gte: Int
  MinWidth: Int
  MinWidth_not: Int
  MinWidth_in: [Int!]
  MinWidth_not_in: [Int!]
  MinWidth_lt: Int
  MinWidth_lte: Int
  MinWidth_gt: Int
  MinWidth_gte: Int
  MaxWidth: Int
  MaxWidth_not: Int
  MaxWidth_in: [Int!]
  MaxWidth_not_in: [Int!]
  MaxWidth_lt: Int
  MaxWidth_lte: Int
  MaxWidth_gt: Int
  MaxWidth_gte: Int
  Static: Boolean
  Static_not: Boolean
  Location: String
  Location_not: String
  Location_in: [String!]
  Location_not_in: [String!]
  Location_lt: String
  Location_lte: String
  Location_gt: String
  Location_gte: String
  Location_contains: String
  Location_not_contains: String
  Location_starts_with: String
  Location_not_starts_with: String
  Location_ends_with: String
  Location_not_ends_with: String
  AND: [ConfigWhereInput!]
  OR: [ConfigWhereInput!]
  NOT: [ConfigWhereInput!]
}

scalar Long

type Mutation {
  createAuth(data: AuthCreateInput!): Auth!
  updateAuth(data: AuthUpdateInput!, where: AuthWhereUniqueInput!): Auth
  updateManyAuths(data: AuthUpdateInput!, where: AuthWhereInput): BatchPayload!
  upsertAuth(where: AuthWhereUniqueInput!, create: AuthCreateInput!, update: AuthUpdateInput!): Auth!
  deleteAuth(where: AuthWhereUniqueInput!): Auth
  deleteManyAuths(where: AuthWhereInput): BatchPayload!
  createConfig(data: ConfigCreateInput!): Config!
  updateManyConfigs(data: ConfigUpdateInput!, where: ConfigWhereInput): BatchPayload!
  deleteManyConfigs(where: ConfigWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWidget(data: WidgetCreateInput!): Widget!
  updateWidget(data: WidgetUpdateInput!, where: WidgetWhereUniqueInput!): Widget
  updateManyWidgets(data: WidgetUpdateInput!, where: WidgetWhereInput): BatchPayload!
  upsertWidget(where: WidgetWhereUniqueInput!, create: WidgetCreateInput!, update: WidgetUpdateInput!): Widget!
  deleteWidget(where: WidgetWhereUniqueInput!): Widget
  deleteManyWidgets(where: WidgetWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  auth(where: AuthWhereUniqueInput!): Auth
  auths(where: AuthWhereInput, orderBy: AuthOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Auth]!
  authsConnection(where: AuthWhereInput, orderBy: AuthOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthConnection!
  configs(where: ConfigWhereInput, orderBy: ConfigOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Config]!
  configsConnection(where: ConfigWhereInput, orderBy: ConfigOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConfigConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  widget(where: WidgetWhereUniqueInput!): Widget
  widgets(where: WidgetWhereInput, orderBy: WidgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Widget]!
  widgetsConnection(where: WidgetWhereInput, orderBy: WidgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WidgetConnection!
  node(id: ID!): Node
}

type Subscription {
  auth(where: AuthSubscriptionWhereInput): AuthSubscriptionPayload
  config(where: ConfigSubscriptionWhereInput): ConfigSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  widget(where: WidgetSubscriptionWhereInput): WidgetSubscriptionPayload
}

type User {
  Id: ID!
  Name: String!
  Passwd: String!
  Email: String!
  WidgetSpec(where: WidgetWhereInput, orderBy: WidgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Widget!]
  Auth: Auth
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  Id: ID!
  Name: String!
  Passwd: String!
  Email: String!
  WidgetSpec: WidgetCreateManyInput
  Auth: AuthCreateOneWithoutUserInput
}

input UserCreateOneWithoutAuthInput {
  create: UserCreateWithoutAuthInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAuthInput {
  Id: ID!
  Name: String!
  Passwd: String!
  Email: String!
  WidgetSpec: WidgetCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  Id_ASC
  Id_DESC
  Name_ASC
  Name_DESC
  Passwd_ASC
  Passwd_DESC
  Email_ASC
  Email_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  Id: ID!
  Name: String!
  Passwd: String!
  Email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  Id: ID
  Name: String
  Passwd: String
  Email: String
  WidgetSpec: WidgetUpdateManyInput
  Auth: AuthUpdateOneWithoutUserInput
}

input UserUpdateOneRequiredWithoutAuthInput {
  create: UserCreateWithoutAuthInput
  update: UserUpdateWithoutAuthDataInput
  upsert: UserUpsertWithoutAuthInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAuthDataInput {
  Id: ID
  Name: String
  Passwd: String
  Email: String
  WidgetSpec: WidgetUpdateManyInput
}

input UserUpsertWithoutAuthInput {
  update: UserUpdateWithoutAuthDataInput!
  create: UserCreateWithoutAuthInput!
}

input UserWhereInput {
  Id: ID
  Id_not: ID
  Id_in: [ID!]
  Id_not_in: [ID!]
  Id_lt: ID
  Id_lte: ID
  Id_gt: ID
  Id_gte: ID
  Id_contains: ID
  Id_not_contains: ID
  Id_starts_with: ID
  Id_not_starts_with: ID
  Id_ends_with: ID
  Id_not_ends_with: ID
  Name: String
  Name_not: String
  Name_in: [String!]
  Name_not_in: [String!]
  Name_lt: String
  Name_lte: String
  Name_gt: String
  Name_gte: String
  Name_contains: String
  Name_not_contains: String
  Name_starts_with: String
  Name_not_starts_with: String
  Name_ends_with: String
  Name_not_ends_with: String
  Passwd: String
  Passwd_not: String
  Passwd_in: [String!]
  Passwd_not_in: [String!]
  Passwd_lt: String
  Passwd_lte: String
  Passwd_gt: String
  Passwd_gte: String
  Passwd_contains: String
  Passwd_not_contains: String
  Passwd_starts_with: String
  Passwd_not_starts_with: String
  Passwd_ends_with: String
  Passwd_not_ends_with: String
  Email: String
  Email_not: String
  Email_in: [String!]
  Email_not_in: [String!]
  Email_lt: String
  Email_lte: String
  Email_gt: String
  Email_gte: String
  Email_contains: String
  Email_not_contains: String
  Email_starts_with: String
  Email_not_starts_with: String
  Email_ends_with: String
  Email_not_ends_with: String
  WidgetSpec_every: WidgetWhereInput
  WidgetSpec_some: WidgetWhereInput
  WidgetSpec_none: WidgetWhereInput
  Auth: AuthWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  Id: ID
}

type Widget {
  Id: ID!
  Name: String!
  SlugName: String!
  Config: Config!
  Enable: Boolean!
  NeedAuth: Boolean!
  Authenticate: Boolean!
  Authentication: Auth!
}

type WidgetConnection {
  pageInfo: PageInfo!
  edges: [WidgetEdge]!
  aggregate: AggregateWidget!
}

input WidgetCreateInput {
  Id: ID!
  Name: String!
  SlugName: String!
  Config: ConfigCreateOneInput!
  Enable: Boolean!
  NeedAuth: Boolean!
  Authenticate: Boolean!
  Authentication: AuthCreateOneInput!
}

input WidgetCreateManyInput {
  create: [WidgetCreateInput!]
  connect: [WidgetWhereUniqueInput!]
}

type WidgetEdge {
  node: Widget!
  cursor: String!
}

enum WidgetOrderByInput {
  Id_ASC
  Id_DESC
  Name_ASC
  Name_DESC
  SlugName_ASC
  SlugName_DESC
  Enable_ASC
  Enable_DESC
  NeedAuth_ASC
  NeedAuth_DESC
  Authenticate_ASC
  Authenticate_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WidgetPreviousValues {
  Id: ID!
  Name: String!
  SlugName: String!
  Enable: Boolean!
  NeedAuth: Boolean!
  Authenticate: Boolean!
}

type WidgetSubscriptionPayload {
  mutation: MutationType!
  node: Widget
  updatedFields: [String!]
  previousValues: WidgetPreviousValues
}

input WidgetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WidgetWhereInput
  AND: [WidgetSubscriptionWhereInput!]
  OR: [WidgetSubscriptionWhereInput!]
  NOT: [WidgetSubscriptionWhereInput!]
}

input WidgetUpdateDataInput {
  Id: ID
  Name: String
  SlugName: String
  Config: ConfigUpdateOneRequiredInput
  Enable: Boolean
  NeedAuth: Boolean
  Authenticate: Boolean
  Authentication: AuthUpdateOneRequiredInput
}

input WidgetUpdateInput {
  Id: ID
  Name: String
  SlugName: String
  Config: ConfigUpdateOneRequiredInput
  Enable: Boolean
  NeedAuth: Boolean
  Authenticate: Boolean
  Authentication: AuthUpdateOneRequiredInput
}

input WidgetUpdateManyInput {
  create: [WidgetCreateInput!]
  update: [WidgetUpdateWithWhereUniqueNestedInput!]
  upsert: [WidgetUpsertWithWhereUniqueNestedInput!]
  delete: [WidgetWhereUniqueInput!]
  connect: [WidgetWhereUniqueInput!]
  disconnect: [WidgetWhereUniqueInput!]
}

input WidgetUpdateWithWhereUniqueNestedInput {
  where: WidgetWhereUniqueInput!
  data: WidgetUpdateDataInput!
}

input WidgetUpsertWithWhereUniqueNestedInput {
  where: WidgetWhereUniqueInput!
  update: WidgetUpdateDataInput!
  create: WidgetCreateInput!
}

input WidgetWhereInput {
  Id: ID
  Id_not: ID
  Id_in: [ID!]
  Id_not_in: [ID!]
  Id_lt: ID
  Id_lte: ID
  Id_gt: ID
  Id_gte: ID
  Id_contains: ID
  Id_not_contains: ID
  Id_starts_with: ID
  Id_not_starts_with: ID
  Id_ends_with: ID
  Id_not_ends_with: ID
  Name: String
  Name_not: String
  Name_in: [String!]
  Name_not_in: [String!]
  Name_lt: String
  Name_lte: String
  Name_gt: String
  Name_gte: String
  Name_contains: String
  Name_not_contains: String
  Name_starts_with: String
  Name_not_starts_with: String
  Name_ends_with: String
  Name_not_ends_with: String
  SlugName: String
  SlugName_not: String
  SlugName_in: [String!]
  SlugName_not_in: [String!]
  SlugName_lt: String
  SlugName_lte: String
  SlugName_gt: String
  SlugName_gte: String
  SlugName_contains: String
  SlugName_not_contains: String
  SlugName_starts_with: String
  SlugName_not_starts_with: String
  SlugName_ends_with: String
  SlugName_not_ends_with: String
  Config: ConfigWhereInput
  Enable: Boolean
  Enable_not: Boolean
  NeedAuth: Boolean
  NeedAuth_not: Boolean
  Authenticate: Boolean
  Authenticate_not: Boolean
  Authentication: AuthWhereInput
  AND: [WidgetWhereInput!]
  OR: [WidgetWhereInput!]
  NOT: [WidgetWhereInput!]
}

input WidgetWhereUniqueInput {
  Id: ID
}
`
      }
    