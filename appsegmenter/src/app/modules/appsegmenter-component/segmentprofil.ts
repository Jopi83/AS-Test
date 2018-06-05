import { Segment }    from './segment';

export class Segmentprofil {
 
  constructor(
    public sid: string,
    public idtype: string,
    public segmente: Array<Segment>
    // public alterEgo?: string
  ) {  }


}