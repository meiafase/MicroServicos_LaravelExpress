import  Sequelize from "sequelize";
import Conn from '../ConnectionDB';

const Pessoa = Conn.define('pessoa', {
    idPessoa: {
        type: Sequelize.STRING,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

await Pessoa.sync();

export default Pessoa;