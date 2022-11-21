export type Test = {
  cliente: string;
  escenario: string;
  horarioEnvio: ShippingSchedule;
  id: string;
  idVideo: string;
  link: string;
  linkVideo: string;
  plataforma: string;
  preguntas: Task[];
  response: Response;
  timeTest: string;
  transcripcion: string;
};

export type Task = {
  respuesta: string;
  texto: string;
  tiempo: string;
  tipoTarea: string;
};

export type Response = {
  data: string;
  status: Number;
};

export type ShippingSchedule = {
  nanoseconds: number;
  seconds: number;
};

export enum TaskTypes {
  verbalResponse = 'verbalResponse',
  opinionScale5 = 'opinionScale5',
}
