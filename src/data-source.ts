import "dotenv/config";
import "reflect-metadata";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
    const migrationsPatch: string = path.join(__dirname,"./migrations/**.{ts,js}");
    const dburl: string | undefined = process.env.DATABASE_URL;
    const nodeEnv: string | undefined = process.env.NODE_ENV;

    if(nodeEnv === "test"){
      return{
        type:"sqlite",
        database: ":memory:",
        synchronize: true,
        entities:[entitiesPath]
      }
    };

    if(!dburl){
        throw new Error("Missing env var: 'DATABASE_URL'");
    }

    return{
        type: "postgres",
        url: dburl,
        synchronize: true,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPatch]
    }
};

const AppDataSource =  new DataSource(dataSourceConfig());

export {AppDataSource};