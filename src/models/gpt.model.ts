import { DataTypes, Model, Sequelize } from 'sequelize';

export class GPT extends Model {
    public id!: number;
    public name!: string;
    public systemMessage!: string;
}

export function initGptModel(sequelize: Sequelize): void {
    GPT.init({
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
        systemMessage: {
          type: new DataTypes.TEXT,
          allowNull: false,
        },
      }, {
        tableName: 'gpts',
        timestamps: true,
        sequelize,
    });
}
