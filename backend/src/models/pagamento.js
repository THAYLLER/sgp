module.exports = (sequelize, type) => {
    return sequelize.define('pagamento', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data: type.DATE,
        valor: type.DOUBLE,
        periodo: type.STRING,
        carga_horaria_periodo: type.INTEGER,
        horas_em_sala: type.INTEGER,
        valor_total: type.DOUBLE,
        curso: type.STRING,
        disciplina: type.STRING,
        profissional: type.STRING
    })
}