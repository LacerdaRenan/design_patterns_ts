import './application1'
import './application2'

import { MyDatabaseClassic } from './db/db_singleton'

const db = MyDatabaseClassic.getInstance();

db.listUsers();
