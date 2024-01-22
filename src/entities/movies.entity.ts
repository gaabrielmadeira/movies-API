import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
    @PrimaryGeneratedColumn("increment")
    "id": number;

    @Column({ unique: true, length: 50})
    "name": string;

    @Column({type: "text", nullable: true})
    "description"?: string | undefined | null;

    @Column()
    "duration": number;

    @Column()
    "price": number;
};

export default Movie;
