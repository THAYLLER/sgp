export class Pagamento {
  constructor(
      public data: Date,
      public valor: String,
      public periodo: String,
      public carga_horaria_periodo: Number,
      public horas_em_sala: Number,
      public valor_total: String,
      public curso: Number,
      public disciplina: Number,
      public profissional: Number,
  ) { }
}
