import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import Settings from '@/db/models/settings';
import { mySchema } from '@/db/schema';

const adapter = new LokiJSAdapter({
  schema: mySchema,
  useWebWorker: false,
  useIncrementalIndexedDB: true,
});

export const database = new Database({
  adapter,
  modelClasses: [Settings],
});