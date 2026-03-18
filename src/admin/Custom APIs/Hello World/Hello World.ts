import * as T from 'types';
import * as db from 'db-interfaces';

async function main(g: T.IAMGlobal) {
    return await g.sys.db.getAll({
        instance: "Bata",
        database: "bata_db",
        table: "public.users"
    })
};

module.exports = main;