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
  id: ID!
  type: String!
  accessToken: String!
  refreshToken: String!
  expire: Int!
}

type AuthConnection {
  pageInfo: PageInfo!
  edges: [AuthEdge]!
  aggregate: AggregateAuth!
}

input AuthCreateInput {
  type: String!
  accessToken: String!
  refreshToken: String!
  expire: Int!
}

input AuthCreateOneInput {
  create: AuthCreateInput
  connect: AuthWhereUniqueInput
}

type AuthEdge {
  node: Auth!
  cursor: String!
}

enum AuthOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  accessToken_ASC
  accessToken_DESC
  refreshToken_ASC
  refreshToken_DESC
  expire_ASC
  expire_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthPreviousValues {
  id: ID!
  type: String!
  accessToken: String!
  refreshToken: String!
  expire: Int!
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
  type: String
  accessToken: String
  refreshToken: String
  expire: Int
}

input AuthUpdateInput {
  type: String
  accessToken: String
  refreshToken: String
  expire: Int
}

input AuthUpdateOneRequiredInput {
  create: AuthCreateInput
  update: AuthUpdateDataInput
  upsert: AuthUpsertNestedInput
  connect: AuthWhereUniqueInput
}

input AuthUpsertNestedInput {
  update: AuthUpdateDataInput!
  create: AuthCreateInput!
}

input AuthWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  expire: Int
  expire_not: Int
  expire_in: [Int!]
  expire_not_in: [Int!]
  expire_lt: Int
  expire_lte: Int
  expire_gt: Int
  expire_gte: Int
  AND: [AuthWhereInput!]
  OR: [AuthWhereInput!]
  NOT: [AuthWhereInput!]
}

input AuthWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Config {
  posX: Int!
  posY: Int!
  height: Int!
  minHeight: Int!
  maxHeight: Int!
  width: Int!
  minWidth: Int!
  maxWidth: Int!
  static: Boolean!
  specification: String
}

type ConfigConnection {
  pageInfo: PageInfo!
  edges: [ConfigEdge]!
  aggregate: AggregateConfig!
}

input ConfigCreateInput {
  posX: Int!
  posY: Int!
  height: Int!
  minHeight: Int!
  maxHeight: Int!
  width: Int!
  minWidth: Int!
  maxWidth: Int!
  static: Boolean!
  specification: String
}

input ConfigCreateOneInput {
  create: ConfigCreateInput
}

type ConfigEdge {
  node: Config!
  cursor: String!
}

enum ConfigOrderByInput {
  posX_ASC
  posX_DESC
  posY_ASC
  posY_DESC
  height_ASC
  height_DESC
  minHeight_ASC
  minHeight_DESC
  maxHeight_ASC
  maxHeight_DESC
  width_ASC
  width_DESC
  minWidth_ASC
  minWidth_DESC
  maxWidth_ASC
  maxWidth_DESC
  static_ASC
  static_DESC
  specification_ASC
  specification_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ConfigPreviousValues {
  posX: Int!
  posY: Int!
  height: Int!
  minHeight: Int!
  maxHeight: Int!
  width: Int!
  minWidth: Int!
  maxWidth: Int!
  static: Boolean!
  specification: String
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
  posX: Int
  posY: Int
  height: Int
  minHeight: Int
  maxHeight: Int
  width: Int
  minWidth: Int
  maxWidth: Int
  static: Boolean
  specification: String
}

input ConfigUpdateInput {
  posX: Int
  posY: Int
  height: Int
  minHeight: Int
  maxHeight: Int
  width: Int
  minWidth: Int
  maxWidth: Int
  static: Boolean
  specification: String
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
  posX: Int
  posX_not: Int
  posX_in: [Int!]
  posX_not_in: [Int!]
  posX_lt: Int
  posX_lte: Int
  posX_gt: Int
  posX_gte: Int
  posY: Int
  posY_not: Int
  posY_in: [Int!]
  posY_not_in: [Int!]
  posY_lt: Int
  posY_lte: Int
  posY_gt: Int
  posY_gte: Int
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  minHeight: Int
  minHeight_not: Int
  minHeight_in: [Int!]
  minHeight_not_in: [Int!]
  minHeight_lt: Int
  minHeight_lte: Int
  minHeight_gt: Int
  minHeight_gte: Int
  maxHeight: Int
  maxHeight_not: Int
  maxHeight_in: [Int!]
  maxHeight_not_in: [Int!]
  maxHeight_lt: Int
  maxHeight_lte: Int
  maxHeight_gt: Int
  maxHeight_gte: Int
  width: Int
  width_not: Int
  width_in: [Int!]
  width_not_in: [Int!]
  width_lt: Int
  width_lte: Int
  width_gt: Int
  width_gte: Int
  minWidth: Int
  minWidth_not: Int
  minWidth_in: [Int!]
  minWidth_not_in: [Int!]
  minWidth_lt: Int
  minWidth_lte: Int
  minWidth_gt: Int
  minWidth_gte: Int
  maxWidth: Int
  maxWidth_not: Int
  maxWidth_in: [Int!]
  maxWidth_not_in: [Int!]
  maxWidth_lt: Int
  maxWidth_lte: Int
  maxWidth_gt: Int
  maxWidth_gte: Int
  static: Boolean
  static_not: Boolean
  specification: String
  specification_not: String
  specification_in: [String!]
  specification_not_in: [String!]
  specification_lt: String
  specification_lte: String
  specification_gt: String
  specification_gte: String
  specification_contains: String
  specification_not_contains: String
  specification_starts_with: String
  specification_not_starts_with: String
  specification_ends_with: String
  specification_not_ends_with: String
  AND: [ConfigWhereInput!]
  OR: [ConfigWhereInput!]
  NOT: [ConfigWhereInput!]
}

scalar DateTime

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
  id: ID!
  name: String!
  passwd: String!
  email: String!
  widgetSpec(where: WidgetWhereInput, orderBy: WidgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Widget!]
  token: String
  connectionDate: DateTime
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  passwd: String!
  email: String!
  widgetSpec: WidgetCreateManyInput
  token: String
  connectionDate: DateTime
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  passwd_ASC
  passwd_DESC
  email_ASC
  email_DESC
  token_ASC
  token_DESC
  connectionDate_ASC
  connectionDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  passwd: String!
  email: String!
  token: String
  connectionDate: DateTime
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
  name: String
  passwd: String
  email: String
  widgetSpec: WidgetUpdateManyInput
  token: String
  connectionDate: DateTime
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  passwd: String
  passwd_not: String
  passwd_in: [String!]
  passwd_not_in: [String!]
  passwd_lt: String
  passwd_lte: String
  passwd_gt: String
  passwd_gte: String
  passwd_contains: String
  passwd_not_contains: String
  passwd_starts_with: String
  passwd_not_starts_with: String
  passwd_ends_with: String
  passwd_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  widgetSpec_every: WidgetWhereInput
  widgetSpec_some: WidgetWhereInput
  widgetSpec_none: WidgetWhereInput
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  connectionDate: DateTime
  connectionDate_not: DateTime
  connectionDate_in: [DateTime!]
  connectionDate_not_in: [DateTime!]
  connectionDate_lt: DateTime
  connectionDate_lte: DateTime
  connectionDate_gt: DateTime
  connectionDate_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type Widget {
  id: ID!
  name: String!
  slugname: String!
  config: Config!
  enable: Boolean!
  needAuth: Boolean!
  authenticate: Boolean!
  authentication: Auth!
}

type WidgetConnection {
  pageInfo: PageInfo!
  edges: [WidgetEdge]!
  aggregate: AggregateWidget!
}

input WidgetCreateInput {
  name: String!
  slugname: String!
  config: ConfigCreateOneInput!
  enable: Boolean!
  needAuth: Boolean!
  authenticate: Boolean!
  authentication: AuthCreateOneInput!
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
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slugname_ASC
  slugname_DESC
  enable_ASC
  enable_DESC
  needAuth_ASC
  needAuth_DESC
  authenticate_ASC
  authenticate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WidgetPreviousValues {
  id: ID!
  name: String!
  slugname: String!
  enable: Boolean!
  needAuth: Boolean!
  authenticate: Boolean!
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
  name: String
  slugname: String
  config: ConfigUpdateOneRequiredInput
  enable: Boolean
  needAuth: Boolean
  authenticate: Boolean
  authentication: AuthUpdateOneRequiredInput
}

input WidgetUpdateInput {
  name: String
  slugname: String
  config: ConfigUpdateOneRequiredInput
  enable: Boolean
  needAuth: Boolean
  authenticate: Boolean
  authentication: AuthUpdateOneRequiredInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slugname: String
  slugname_not: String
  slugname_in: [String!]
  slugname_not_in: [String!]
  slugname_lt: String
  slugname_lte: String
  slugname_gt: String
  slugname_gte: String
  slugname_contains: String
  slugname_not_contains: String
  slugname_starts_with: String
  slugname_not_starts_with: String
  slugname_ends_with: String
  slugname_not_ends_with: String
  config: ConfigWhereInput
  enable: Boolean
  enable_not: Boolean
  needAuth: Boolean
  needAuth_not: Boolean
  authenticate: Boolean
  authenticate_not: Boolean
  authentication: AuthWhereInput
  AND: [WidgetWhereInput!]
  OR: [WidgetWhereInput!]
  NOT: [WidgetWhereInput!]
}

input WidgetWhereUniqueInput {
  id: ID
}
`
      }
    