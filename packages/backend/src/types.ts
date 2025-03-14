/*
 * Copyright 2023 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Logger } from 'winston';
import { LoggerService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import {
  PluginCacheManager,
  PluginDatabaseManager,
  PluginEndpointDiscovery,
  TokenManager,
} from '@backstage/backend-common';
import { ServerPermissionClient } from '@backstage/plugin-permission-node';
import { PluginTaskScheduler } from '@backstage/backend-tasks';
import { UrlReaderService } from '@backstage/backend-plugin-api';

export type PluginEnvironment = {
  logger: Logger | LoggerService;
  cache: PluginCacheManager;
  database: PluginDatabaseManager;
  config: Config;
  reader: UrlReaderService;
  discovery: PluginEndpointDiscovery;
  tokenManager: TokenManager;
  permissions: ServerPermissionClient;
  scheduler: PluginTaskScheduler;
};
