import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Settings extends Model {
    static table = 'settings';
    @field('serverUrl')
    serverUrl!: string;
    
    @field('serverPort')
    serverPort!: number;
}