import { IsEmail, IsDefined,IsString,IsNumber,IsNotEmpty, Length, Min, IsIn } from "class-validator";

export class registerDto {

    @IsEmail()
    @IsDefined()
    public email: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Length(2)
    public name: string;

    @IsNumber()
    @IsDefined()
    @Min(18)
    public age: number;

    @IsNumber()
    @IsDefined()
    @IsIn([1,2])

    readonly genger: number;

}