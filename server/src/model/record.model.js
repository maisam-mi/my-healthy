import { query } from '../../boilerplate/db/index.js';

const dbgetAllRecords = async () => {
  const { rows } = await query('select * from records');
  return rows;
};

const dbgetPersonRecords = async (req) => {
  const { rows } = await query(
    'select calories, traveldistance, runnedtime, runneddate from records where pid = $1 order by runneddate desc, rid desc',
    [req.params.pid],
  );
  return rows;
};

const dbaddRecord = async (req) => {
  const { rows } = await query(
    'insert into records (traveldistance, runnedtime, calories, pid, runneddate) values ($1, $2, $3, $4, $5) returning *',
    [
      req.body.traveldistance,
      req.body.runnedtime,
      req.body.calories,
      req.body.pid,
      req.body.runneddate,
    ],
  );
  return rows[0];
};

export default {
  dbgetAllRecords,
  dbgetPersonRecords,
  dbaddRecord,
};
