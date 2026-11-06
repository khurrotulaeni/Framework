import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './entities/category-entity.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  // Menampilkan semua kategori
  async findAll() {
    return await this.categoryRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  //menampilkan kategori berdasarkan id
  async findById(id: string) : Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id },
  });
    if (!category) {
      throw new NotFoundException(`Kategori dengan ID ${id} tidak ditemukan`);
    }
    return category;
  }

  //menyimpan data kategori baru
  async create(Category: CreateCategoryDto) : Promise<Category> {
    const newCategory = this.categoryRepository.create(Category);

    return await this.categoryRepository.save(newCategory);
  }

  // mengubah data kategori berdasarkan id
async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
  const category = await this.categoryRepository.findOne({
    where: { id },
  });

  if (!category) {
    throw new NotFoundException(`Kategori dengan ID ${id} tidak ditemukan`);
  }

  const updatedCategory = this.categoryRepository.merge(
    category,
    updateCategoryDto,
  );

  return await this.categoryRepository.save(updatedCategory);
}

  //menghapus data kategori berdasarkan id
  async delete(id: string) {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(`Kategori dengan ID ${id} tidak ditemukan`);
    }
    await this.categoryRepository.remove(category);
    return { message: 'Kategori berhasil dihapus', deletedId: id };
  }
}
