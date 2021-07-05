//import { getConnection} from 'typeorm';
import { v4 as uuiudV4} from 'uuid';
import { hash } from 'bcryptjs';

import createConnection from '../index'

async function create() {
  const connection = await createConnection("localhost");
 
  const id = uuiudV4();
  const password = await hash("admin", 8);

  await connection.query(
    `insert into users (id, name, email, password, "isAdmin", driver_licence, created_at)
      values  ('${id}', 'admin', 'admin@rentex.com.br', '${password}', true, '00001', now() )`
  );  

  await connection.close;
}

create().then(() => console.log("User admin created"));