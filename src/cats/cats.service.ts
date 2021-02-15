import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import * as fs from 'fs';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = JSON.parse(
    fs.readFileSync('src/data/cats.json').toString(),
  );

  create(cat: Cat) {
    // this.cats.push(cat);
    const a = JSON.parse(fs.readFileSync('src/data/cats.json').toString());
    a.push(cat);
    console.info('cats: ', a);
    fs.writeFileSync('src/data/cats.json', JSON.stringify(a));
  }

  async findAll(): Promise<any> {
    return JSON.parse(fs.readFileSync('src/data/cats.json').toString());
  }
}
