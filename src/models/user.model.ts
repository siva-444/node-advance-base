import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model {
  public first!: string;
  public last!: string;
  public username!: string;
  public password!: string;
  public status!: number;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        first: DataTypes.STRING,
        last: DataTypes.STRING,
      },
      { sequelize: sequelize }
    );
  }
}
export default User;
