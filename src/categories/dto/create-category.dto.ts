import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty({message: 'Nama Category Harus Diisi'})
  @MaxLength(100, {message: 'Nama Category Maksimal 100 Karakter'})
  readonly name: string;
}