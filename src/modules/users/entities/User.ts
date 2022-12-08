import { v4 as uuidV4 } from 'uuid'

import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity("user")
class User {

  @PrimaryColumn()
  id?: string

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {
    if( !this.id ) {
      this.id = uuidV4();
    }
  }

}

export { User }