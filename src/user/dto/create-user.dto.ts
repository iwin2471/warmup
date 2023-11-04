import { IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

const passwordRegEx =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: "name must have 2" })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Matches(emailRegEx, {message: `이메일 형식에 맞게 입력 부탁드립니다`})
  email: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters,
    at least one uppercase letter,
    one lowercase letter,
    one number and
    one special character`,
  })
  password: string;

}
