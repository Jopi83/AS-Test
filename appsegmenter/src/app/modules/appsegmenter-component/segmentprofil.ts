export class Segmentprofil {
 
  constructor(
    public sid: string,
    public idtype: string,
    public segmente: Array<{ id: number, time: number}>
    // public alterEgo?: string
  ) {  }


}