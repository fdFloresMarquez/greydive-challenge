export type Test = {
  cliente: string;
  escenario: string;
  horarioEnvio: ShippingSchedule;
  id: string;
  idVideo: string;
  link: string;
  linkVideo: string;
  plataforma: string;
  preguntas: Question[];
  response: Response;
  timeTest: string;
  transcripcion: string;
};

export type Question = {
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
