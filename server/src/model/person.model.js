import { query } from '../../boilerplate/db/index.js';

const dbgetPersons = async () => {
  const { rows } = await query('select * from person order by pid');
  return rows;
};

const dbgetPerson = async (req) => {
  const { rows } = await query(
    'select * from person where email = $1',
    [req.params.email],
  );
  return rows[0];
};

const dbgetPersonWithRecords = async (req) => {
  const { rows } = await query(
    'select p.*, sum(r.traveldistance) as traveleddistance, sum(r.runnedtime) as time, sum(r.calories) as calories from person p join records r on p.pid = r.pid group by p.pid having p.email = $1',
    [req.params.email],
  );
  return rows[0];
};

const dbaddPerson = async (req) => {
  const { rows } = await query(
    'insert into person (firstname, lastname, email, password, birthdate, height, weight, salt) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *',
    [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password,
      req.body.birthdate,
      req.body.height,
      req.body.weight,
      req.body.salt
    ],
  );
  return rows[0];
};

const dbupdatePerson = async (req) => {
  const { rows } = await query(
    'update person set firstname = $1, lastname = $2, password = $3, birthdate = $4, height = $5, weight = $6 where email = $7 returning *',
    [
      req.body.firstname,
      req.body.lastname,
      req.body.password,
      req.body.birthdate,
      req.body.height,
      req.body.weight,
      req.params.email,
    ],
  );
  return rows[0];
};

const dbdeletePerson = async (req) => {
  const { rows } = await query('delete from person where email = $1 returning *', [
    req.params.email,
  ]);
  return rows[0];
};

export default {
  dbgetPersons,
  dbgetPerson,
  dbgetPersonWithRecords,
  dbaddPerson,
  dbupdatePerson,
  dbdeletePerson,
};
