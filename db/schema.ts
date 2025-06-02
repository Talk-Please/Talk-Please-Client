import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schemaVersion = 1;

export const mySchema = appSchema({
  version: schemaVersion,
  tables: [
    tableSchema({
      name: 'settings',
      columns: [
        { name: 'serverUrl', type: 'string' },
        { name: 'serverPort', type: 'number' },
      ],
    }),
  ],
});