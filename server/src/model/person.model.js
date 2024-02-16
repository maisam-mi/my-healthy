import { query } from '../../boilerplate/db/index.js';

const dbgetPersons = async () => {
  const { rows } = await query('select * from person order by pid');
  return rows;
};

const dbgetPerson = async (req) => {
  const { rows } = await query('select * from person where pid = $1 order by pid', [req.params.pid]);
  return rows[0];
};

export default {
  dbgetPersons,
  dbgetPerson,
};
